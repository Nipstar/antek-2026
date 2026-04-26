import type { Check } from '../types.js'
import * as fs from 'fs'
import * as path from 'path'

const check: Check = {
  name: 'Visual screenshot',
  description: 'Saves a full-page screenshot to audit-output/screenshots/<slug>.png',
  introducedInPhase: 0,
  async run({ url, page, config }) {
    if (!config.screenshots) {
      return { status: 'pass', detail: 'Screenshots disabled (use --screenshots to enable)' }
    }

    const slug = url === '/' ? 'home' : url.replace(/\//g, '-').replace(/^-/, '')
    const screenshotsDir = path.resolve(process.cwd(), 'audit-output', 'screenshots')
    fs.mkdirSync(screenshotsDir, { recursive: true })

    const filePath = path.join(screenshotsDir, `${slug}.png`)
    try {
      await page.screenshot({ path: filePath, fullPage: true })
      return { status: 'pass', detail: `Screenshot saved to audit-output/screenshots/${slug}.png` }
    } catch (e) {
      return { status: 'warn', detail: `Screenshot failed: ${String(e)}` }
    }
  },
}

export default check
