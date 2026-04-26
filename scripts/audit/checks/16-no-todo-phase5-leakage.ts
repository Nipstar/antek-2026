import type { Check } from '../types.js'

const check: Check = {
  name: 'No TODO_PHASE5 placeholder leakage',
  description: 'Checks that no {{ TODO_PHASE5: ... }} placeholders appear in rendered page text',
  introducedInPhase: 5,
  async run({ document }) {
    const bodyText = document.body?.textContent ?? ''

    const matches = [...bodyText.matchAll(/\{\{\s*TODO_PHASE5[^}]*\}\}/g)]
    if (matches.length > 0) {
      const examples = matches.slice(0, 3).map(m => `"${m[0].slice(0, 60)}"`)
      return {
        status: 'fail',
        detail: `${matches.length} TODO_PHASE5 placeholder(s) in rendered text: ${examples.join(' | ')}`,
      }
    }

    // Also check for the raw HTML (placeholders might be in attributes)
    const htmlMatches = [...(document.documentElement?.innerHTML ?? '').matchAll(/TODO_PHASE5/g)]
    if (htmlMatches.length > 0) {
      return { status: 'warn', detail: `TODO_PHASE5 found ${htmlMatches.length} time(s) in HTML (may be in attributes or comments)` }
    }

    return { status: 'pass', detail: 'No TODO_PHASE5 placeholders in rendered output' }
  },
}

export default check
