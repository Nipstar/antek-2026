import type { Check } from '../types.js'
import acronyms from '../acronyms.json' assert { type: 'json' }

// Acronyms that are so common we skip them (AI, FAQ, SEO, etc.)
const SKIP = new Set(['AI', 'FAQ', 'SEO', 'CTA', 'ROI', 'SSR', 'GDPR', 'ICO'])

const check: Check = {
  name: 'Acronym first-use expansion',
  description: 'First occurrence of each acronym should be followed by a parenthetical expansion within 200 chars',
  introducedInPhase: 3,
  async run({ document }) {
    const bodyText = document.body?.textContent ?? ''
    const warnings: string[] = []

    for (const [acronym, expansion] of Object.entries(acronyms)) {
      if (SKIP.has(acronym)) continue

      // Find first occurrence of the bare acronym (word boundary)
      const regex = new RegExp(`\\b${acronym}\\b`)
      const match = regex.exec(bodyText)
      if (!match) continue  // acronym not used on this page

      const after = bodyText.slice(match.index, match.index + 200)
      // Check for parenthetical expansion nearby
      const hasExpansion = after.includes(`(${expansion}`) || after.includes(`(${expansion.slice(0, 10)}`)
      if (!hasExpansion) {
        warnings.push(`"${acronym}" used without expansion on first occurrence`)
      }
    }

    if (warnings.length > 0) {
      return {
        status: 'warn',
        detail: warnings.slice(0, 5).join(' | ') + (warnings.length > 5 ? ` (+${warnings.length - 5} more)` : ''),
      }
    }
    return { status: 'pass', detail: 'All acronyms expanded on first use (or not present on this page)' }
  },
}

export default check
