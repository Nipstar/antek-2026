import type { Check } from '../types.js'

const check: Check = {
  name: '<FAQ /> present with matching FAQPage JSON-LD',
  description: 'Checks for an FAQ section with at least 5 Q&As and matching FAQPage schema',
  introducedInPhase: 4,
  async run({ document }) {
    // Check for FAQ items (details/summary accordion or data-faq pattern)
    const faqItems = document.querySelectorAll('details, [data-faq-item]')
    const visibleCount = faqItems.length

    // Pages with no FAQ section at all (e.g. homepage) — skip
    if (visibleCount === 0) {
      const hasFaqHeading = /frequently asked|faq/i.test(document.body?.textContent ?? '')
      if (!hasFaqHeading) {
        return { status: 'warn', detail: 'No FAQ section found on this page (may not need one)' }
      }
    }

    if (visibleCount < 5) {
      return { status: 'fail', detail: `Only ${visibleCount} FAQ item(s) found — minimum is 5` }
    }

    // Check for FAQPage JSON-LD
    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    let hasFaqSchema = false
    let schemaQCount = 0

    for (const script of scripts) {
      try {
        const parsed = JSON.parse(script.textContent?.trim() ?? '{}') as Record<string, unknown>
        if (parsed['@type'] === 'FAQPage') {
          hasFaqSchema = true
          const entities = parsed['mainEntity'] as unknown[] | undefined
          schemaQCount = Array.isArray(entities) ? entities.length : 0
          break
        }
      } catch {
        continue
      }
    }

    if (!hasFaqSchema) {
      return { status: 'fail', detail: `${visibleCount} FAQ item(s) found but no FAQPage JSON-LD schema` }
    }

    if (Math.abs(schemaQCount - visibleCount) > 2) {
      return {
        status: 'warn',
        detail: `FAQ DOM has ${visibleCount} items but FAQPage schema has ${schemaQCount} questions — potential drift`,
      }
    }

    return { status: 'pass', detail: `${visibleCount} FAQ items with FAQPage schema (${schemaQCount} questions)` }
  },
}

export default check
