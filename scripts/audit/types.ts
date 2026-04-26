import type { Page } from 'playwright'

export interface AuditConfig {
  baseUrl: string
  pages?: string[]
  sincePhase: number
  bail: boolean
  screenshots: boolean
  baseline: boolean
  json: boolean
  strict: boolean
}

export interface AuditContext {
  url: string
  fullUrl: string
  page: Page
  html: string
  document: Document
  config: AuditConfig
}

export interface CheckResult {
  status: 'pass' | 'fail' | 'warn'
  detail: string
}

export interface Check {
  name: string
  description: string
  introducedInPhase: number
  run: (ctx: AuditContext) => Promise<CheckResult>
}

export interface PageReport {
  path: string
  results: Array<{ check: Check; result: CheckResult }>
  screenshotPath?: string
}
