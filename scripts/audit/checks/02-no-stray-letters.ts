import type { Check } from '../types.js'

const check: Check = {
  name: 'No stray single-letter artifacts',
  description: 'Checks for bare capital letters as text nodes adjacent to headings that are not aria-hidden',
  introducedInPhase: 1,
  async run({ document }) {
    const headings = document.querySelectorAll('h2, h3, h4')
    const stray: string[] = []

    for (const heading of headings) {
      const prev = heading.previousSibling
      if (prev && prev.nodeType === 3 /* TEXT_NODE */) {
        const text = prev.textContent?.trim() ?? ''
        if (/^[A-Z]$/.test(text)) {
          stray.push(`Stray "${text}" before <${heading.tagName.toLowerCase()}>: "${heading.textContent?.trim().slice(0, 50)}"`)
        }
      }

      // Also check preceding element siblings that are not aria-hidden
      const prevEl = heading.previousElementSibling
      if (prevEl) {
        const ariaHidden = prevEl.getAttribute('aria-hidden')
        const text = prevEl.textContent?.trim() ?? ''
        if (/^[A-Z]$/.test(text) && ariaHidden !== 'true') {
          stray.push(`Non-hidden element with single letter "${text}" before <${heading.tagName.toLowerCase()}>: "${heading.textContent?.trim().slice(0, 50)}"`)
        }
      }
    }

    if (stray.length > 0) {
      return { status: 'fail', detail: stray.slice(0, 5).join(' | ') + (stray.length > 5 ? ` (+${stray.length - 5} more)` : '') }
    }
    return { status: 'pass', detail: `${headings.length} headings checked — no stray letters` }
  },
}

export default check
