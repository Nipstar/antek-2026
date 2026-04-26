import type { Check } from '../types.js'

const PRIMARY_CTA = 'Book a free 15-min chat'
const DEMO_CTA = 'Try the demo'
// Variants that are close but wrong
const BAD_PATTERNS = [
  /\bLive\b(?!\s+chat)/i,  // standalone "Live" not followed by "chat"
  /book\s+a\s+free\s+call/i,
  /book\s+free\s+call/i,
  /try\s+voice\s+ai\s+demo/i,
  /book\s+a\s+free\s+15.min\s+consultation/i,
]

function getVisibleText(el: Element): string {
  // Exclude aria-hidden children from text content check
  let text = ''
  for (const node of el.childNodes) {
    if (node.nodeType === 3 /* TEXT_NODE */) {
      text += node.textContent ?? ''
    } else if (node.nodeType === 1 /* ELEMENT_NODE */) {
      const child = node as Element
      if (child.getAttribute('aria-hidden') !== 'true') {
        text += getVisibleText(child)
      }
    }
  }
  return text.trim()
}

const check: Check = {
  name: 'CTA labels are standardised',
  description: `Primary CTA must be "${PRIMARY_CTA}" — demo CTA must be "${DEMO_CTA}"`,
  introducedInPhase: 3,
  async run({ document }) {
    const buttons = document.querySelectorAll('button, a[href], [role="button"]')
    const issues: string[] = []

    for (const el of buttons) {
      const text = getVisibleText(el)
      if (!text) continue

      for (const pattern of BAD_PATTERNS) {
        if (pattern.test(text)) {
          issues.push(`Non-standard CTA: "${text.slice(0, 60)}"`)
          break
        }
      }
    }

    // Deduplicate
    const unique = [...new Set(issues)]
    if (unique.length > 0) {
      return { status: 'fail', detail: unique.slice(0, 4).join(' | ') + (unique.length > 4 ? ` (+${unique.length - 4} more)` : '') }
    }
    return { status: 'pass', detail: `${buttons.length} buttons/links checked — CTAs are standardised` }
  },
}

export default check
