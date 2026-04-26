import type { Check } from '../types.js'

const check: Check = {
  name: 'SSR content present',
  description: 'Verifies <h1>, <main>, and primary content are in raw SSR HTML without JS execution',
  introducedInPhase: 1,
  async run({ html, document }) {
    const issues: string[] = []

    if (!html.includes('<h1')) issues.push('No <h1> in raw HTML')
    if (!html.includes('<main')) issues.push('No <main> in raw HTML')

    const bodyText = document.body?.textContent?.trim() ?? ''
    if (bodyText.length < 200) issues.push(`Body text too short (${bodyText.length} chars) — may be JS-only content`)

    if (issues.length > 0) {
      return { status: 'fail', detail: issues.join('; ') }
    }
    return { status: 'pass', detail: `h1 ✓  main ✓  body text ${bodyText.length} chars` }
  },
}

export default check
