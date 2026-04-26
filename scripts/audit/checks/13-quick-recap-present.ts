import type { Check } from '../types.js'

const check: Check = {
  name: '<QuickRecap /> present on every page',
  description: 'Checks for a Quick Recap / Key Takeaways block with 3–5 bullet points',
  introducedInPhase: 4,
  async run({ document }) {
    const allText = document.body?.textContent ?? ''

    // Look for the heading
    const hasRecapHeading = /quick\s+recap|key\s+takeaways/i.test(allText)
    if (!hasRecapHeading) {
      return { status: 'fail', detail: 'No "Quick Recap" or "Key Takeaways" heading found' }
    }

    // Find the heading element and count adjacent list items
    const headings = Array.from(document.querySelectorAll('h2, h3, h4, p'))
    const recapHeading = headings.find(h => /quick\s+recap|key\s+takeaways/i.test(h.textContent ?? ''))

    if (!recapHeading) {
      return { status: 'fail', detail: 'Quick Recap heading text found but no heading element detected' }
    }

    // Look for bullets in the next sibling list
    const nextEl = recapHeading.nextElementSibling
    const listItems = nextEl?.querySelectorAll('li') ?? recapHeading.parentElement?.querySelectorAll('li')
    const count = listItems?.length ?? 0

    if (count < 3) {
      return { status: 'fail', detail: `Quick Recap found but only ${count} bullet(s) — need 3–5` }
    }
    if (count > 5) {
      return { status: 'warn', detail: `Quick Recap has ${count} bullets — recommended max is 5` }
    }

    return { status: 'pass', detail: `Quick Recap present with ${count} bullets` }
  },
}

export default check
