#!/usr/bin/env tsx
import { chromium } from 'playwright'
import { JSDOM } from 'jsdom'
import * as fs from 'fs'
import * as path from 'path'
import type { AuditConfig, AuditContext, Check, PageReport, CheckResult } from './types.js'

// ── CLI args ──────────────────────────────────────────────────────────────────

const args = process.argv.slice(2)
const flag = (name: string) => args.find(a => a.startsWith(`--${name}=`))?.split('=').slice(1).join('=')
const has = (name: string) => args.includes(`--${name}`)

const config: AuditConfig = {
  baseUrl: (process.env.AUDIT_BASE_URL ?? 'http://localhost:5173').replace(/\/$/, ''),
  pages: flag('pages')?.split(','),
  sincePhase: parseInt(flag('since-phase') ?? '99'),
  bail: has('bail'),
  screenshots: has('screenshots'),
  baseline: has('baseline'),
  json: has('json'),
  strict: has('strict'),
}

// ── Page discovery ─────────────────────────────────────────────────────────────

async function discoverPages(): Promise<string[]> {
  if (config.pages?.length) return config.pages

  try {
    const res = await fetch(`${config.baseUrl}/sitemap.xml`, { signal: AbortSignal.timeout(5000) })
    if (res.ok) {
      const xml = await res.text()
      const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
      const paths = matches.map(m => {
        try { return new URL(m[1]).pathname } catch { return null }
      }).filter((p): p is string => !!p)
      if (paths.length > 0) {
        console.log(`  Discovered ${paths.length} pages from sitemap.xml`)
        return paths
      }
    }
  } catch (e) {
    console.log(`  Sitemap fetch failed (${String(e)}) — using fallback page list`)
  }

  const { pages } = await import('./pages.js')
  console.log(`  Using fallback list: ${pages.length} pages`)
  return pages
}

// ── Check loader ───────────────────────────────────────────────────────────────

async function loadChecks(): Promise<Check[]> {
  const checksDir = path.resolve(import.meta.dirname, 'checks')
  const files = fs.readdirSync(checksDir).filter(f => f.endsWith('.ts') || f.endsWith('.js')).sort()
  const checks: Check[] = []

  for (const file of files) {
    const mod = await import(path.join(checksDir, file))
    const check: Check = mod.default
    if (check && typeof check.run === 'function') {
      if (check.introducedInPhase <= config.sincePhase) {
        checks.push(check)
      }
    }
  }

  return checks
}

// ── Report generation ─────────────────────────────────────────────────────────

function statusEmoji(status: CheckResult['status']): string {
  return status === 'pass' ? '✅ pass' : status === 'warn' ? '⚠️  warn' : '❌ fail'
}

function generateMarkdown(reports: PageReport[], checks: Check[], startTime: Date): string {
  const total = reports.flatMap(r => r.results)
  const passes = total.filter(r => r.result.status === 'pass').length
  const warns = total.filter(r => r.result.status === 'warn').length
  const fails = total.filter(r => r.result.status === 'fail').length

  const lines = [
    `# Site audit — ${startTime.toISOString()}`,
    `**Base URL:** ${config.baseUrl}`,
    `**Pages audited:** ${reports.length}`,
    `**Pass / Warn / Fail:** ${passes} / ${warns} / ${fails}`,
    `**Phases included:** 1 to ${config.sincePhase}`,
    '',
  ]

  for (const report of reports) {
    lines.push(`## ${report.path}`)
    lines.push('')
    lines.push('| Check | Phase | Status | Detail |')
    lines.push('|---|---|---|---|')

    for (const { check, result } of report.results) {
      const detail = result.detail.replace(/\|/g, '\\|')
      lines.push(`| ${check.name} | ${check.introducedInPhase} | ${statusEmoji(result.status)} | ${detail} |`)
    }

    if (report.screenshotPath) {
      lines.push(``)
      lines.push(`_Screenshot: ${report.screenshotPath}_`)
    }
    lines.push('')
  }

  return lines.join('\n')
}

// ── Runner ────────────────────────────────────────────────────────────────────

async function run() {
  const startTime = new Date()
  console.log(`\n🔍 Antek Automation site audit`)
  console.log(`   Base URL: ${config.baseUrl}`)
  console.log(`   Phases:   1–${config.sincePhase}`)
  console.log(`   Mode:     ${config.screenshots ? 'screenshots ' : ''}${config.json ? 'json ' : ''}${config.strict ? 'strict' : ''}\n`)

  const pages = await discoverPages()
  const checks = await loadChecks()
  console.log(`  Loaded ${checks.length} check(s) for phases 1–${config.sincePhase}\n`)

  const browser = await chromium.launch({ headless: true })
  const reports: PageReport[] = []
  let hasFailure = false

  for (const pagePath of pages) {
    const fullUrl = `${config.baseUrl}${pagePath}`
    console.log(`  → ${pagePath}`)

    let html = ''
    let document: Document

    try {
      const res = await fetch(fullUrl, { signal: AbortSignal.timeout(10000) })
      html = await res.text()
    } catch (e) {
      console.log(`     ✗ Fetch failed: ${e}`)
      reports.push({ path: pagePath, results: checks.map(c => ({ check: c, result: { status: 'fail' as const, detail: `Page unreachable: ${String(e)}` } })) })
      if (config.bail) break
      continue
    }

    try {
      const dom = new JSDOM(html, { url: fullUrl })
      document = dom.window.document
    } catch (e) {
      console.log(`     ✗ DOM parse failed: ${e}`)
      reports.push({ path: pagePath, results: checks.map(c => ({ check: c, result: { status: 'fail' as const, detail: `DOM parse error: ${String(e)}` } })) })
      if (config.bail) break
      continue
    }

    const page = await browser.newPage()
    try {
      await page.goto(fullUrl, { waitUntil: 'networkidle', timeout: 15000 })
    } catch (e) {
      console.log(`     ⚠ Playwright navigation slow/failed: ${e}`)
    }

    const ctx: AuditContext = { url: pagePath, fullUrl, page, html, document, config }
    const results: PageReport['results'] = []

    for (const check of checks) {
      try {
        const result = await check.run(ctx)
        results.push({ check, result })
        const icon = result.status === 'pass' ? '✓' : result.status === 'warn' ? '⚠' : '✗'
        console.log(`     ${icon} ${check.name}`)
        if (result.status !== 'pass') console.log(`       → ${result.detail}`)
        if (result.status === 'fail') hasFailure = true
        if (config.bail && result.status === 'fail') {
          await page.close()
          break
        }
      } catch (e) {
        const result: CheckResult = { status: 'fail', detail: `Check threw: ${String(e)}` }
        results.push({ check, result })
        console.log(`     ✗ ${check.name}: threw ${e}`)
      }
    }

    await page.close()
    reports.push({ path: pagePath, results })

    if (config.bail && hasFailure) break
  }

  await browser.close()

  // ── Write output ─────────────────────────────────────────────────────────────

  const outputDir = path.resolve(process.cwd(), 'audit-output')
  fs.mkdirSync(outputDir, { recursive: true })

  const markdown = generateMarkdown(reports, checks, startTime)
  fs.writeFileSync(path.join(outputDir, 'report.md'), markdown)
  console.log(`\n  📄 Report written to audit-output/report.md`)

  if (config.json) {
    const jsonReport = reports.map(r => ({
      path: r.path,
      results: r.results.map(({ check, result }) => ({
        check: { name: check.name, phase: check.introducedInPhase },
        status: result.status,
        detail: result.detail,
      })),
    }))
    fs.writeFileSync(path.join(outputDir, 'report.json'), JSON.stringify(jsonReport, null, 2))
    console.log(`  📄 JSON report written to audit-output/report.json`)
  }

  const total = reports.flatMap(r => r.results)
  const fails = total.filter(r => r.result.status === 'fail').length
  const warns = total.filter(r => r.result.status === 'warn').length
  const passes = total.filter(r => r.result.status === 'pass').length

  console.log(`\n  Results: ${passes} pass, ${warns} warn, ${fails} fail\n`)

  const exitFail = fails > 0 || (config.strict && warns > 0)
  process.exit(exitFail ? 1 : 0)
}

run().catch(e => {
  console.error('Audit runner crashed:', e)
  process.exit(1)
})
