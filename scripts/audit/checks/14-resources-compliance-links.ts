import type { Check } from '../types.js'

const check: Check = {
  name: '<ResourcesCompliance /> present with live outbound links',
  description: 'Checks for a Resources & Compliance section with at least 2 outbound links that return 200',
  introducedInPhase: 4,
  async run({ document }) {
    const allText = document.body?.textContent ?? ''

    const hasSection = /resources\s*&?\s*compliance|resources\s+and\s+compliance/i.test(allText)
    if (!hasSection) {
      return { status: 'fail', detail: 'No "Resources & Compliance" section found' }
    }

    // Find the section and extract outbound links
    const headings = Array.from(document.querySelectorAll('h2, h3, h4'))
    const complianceHeading = headings.find(h => /resources.*compliance/i.test(h.textContent ?? ''))

    let outboundLinks: Element[] = []
    if (complianceHeading) {
      const section = complianceHeading.closest('section') ?? complianceHeading.parentElement
      outboundLinks = Array.from(section?.querySelectorAll('a[href^="https://"], a[href^="http://"]') ?? [])
    }

    if (outboundLinks.length < 2) {
      return {
        status: 'fail',
        detail: `Resources & Compliance section found but only ${outboundLinks.length} outbound link(s) — need at least 2`,
      }
    }

    // HEAD-check up to 4 links (don't flood with requests)
    const toCheck = outboundLinks.slice(0, 4)
    const dead: string[] = []

    await Promise.all(
      toCheck.map(async (el) => {
        const href = el.getAttribute('href') ?? ''
        try {
          const res = await fetch(href, { method: 'HEAD', signal: AbortSignal.timeout(5000) })
          if (!res.ok) dead.push(`${href} → ${res.status}`)
        } catch {
          dead.push(`${href} → unreachable`)
        }
      })
    )

    if (dead.length > 0) {
      return { status: 'fail', detail: `Dead outbound links: ${dead.join(' | ')}` }
    }

    return { status: 'pass', detail: `${outboundLinks.length} outbound link(s) present, ${toCheck.length} checked — all live` }
  },
}

export default check
