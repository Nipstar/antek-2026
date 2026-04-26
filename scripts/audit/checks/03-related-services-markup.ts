import type { Check } from '../types.js'

const check: Check = {
  name: 'Related Services markup clean',
  description: 'Checks that Related Services section contains no escaped backslashes, raw **, or stray brackets',
  introducedInPhase: 1,
  async run({ document }) {
    // Find any section/div that contains "Related Services" heading text
    const headings = Array.from(document.querySelectorAll('h2, h3, h4'))
    const relatedHeading = headings.find(h => /related\s+services/i.test(h.textContent ?? ''))

    if (!relatedHeading) {
      return { status: 'warn', detail: 'No "Related Services" section found on this page' }
    }

    const section = relatedHeading.closest('section') ?? relatedHeading.parentElement
    const text = section?.textContent ?? ''
    const issues: string[] = []

    if (text.includes('\\\\') || text.includes('\\"')) issues.push('Contains escaped backslashes')
    if (/\*\*[^*]+\*\*/.test(text)) issues.push('Contains raw **bold** markdown')
    if (/\[[^\]]+\]\([^)]+\)/.test(text)) issues.push('Contains raw [link](url) markdown')
    // Check for stray brackets not part of HTML
    if (/(?<![a-z])\[(?!\d)/.test(text) && !text.includes('[ANDY')) issues.push('Contains suspicious stray brackets')

    if (issues.length > 0) {
      return { status: 'fail', detail: issues.join('; ') }
    }
    return { status: 'pass', detail: 'Related Services markup is clean' }
  },
}

export default check
