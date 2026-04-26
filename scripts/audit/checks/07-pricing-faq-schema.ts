import type { Check } from '../types.js'

const check: Check = {
  name: '/pricing FAQPage schema matches visible FAQ',
  description: 'Only runs on /pricing — checks FAQPage JSON-LD exists and question count matches visible FAQ items',
  introducedInPhase: 2,
  async run({ url, document }) {
    if (url !== '/pricing') {
      return { status: 'pass', detail: 'Not /pricing — skipped' }
    }

    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    let faqSchema: Record<string, unknown> | null = null

    for (const script of scripts) {
      try {
        const parsed = JSON.parse(script.textContent?.trim() ?? '{}') as Record<string, unknown>
        if (parsed['@type'] === 'FAQPage') {
          faqSchema = parsed
          break
        }
      } catch {
        continue
      }
    }

    if (!faqSchema) {
      return { status: 'fail', detail: 'No FAQPage JSON-LD found on /pricing' }
    }

    const mainEntities = faqSchema['mainEntity'] as unknown[] | undefined
    const schemaQCount = Array.isArray(mainEntities) ? mainEntities.length : 0

    // Count visible FAQ items in DOM (look for details/summary or common FAQ patterns)
    const visibleFaqs = document.querySelectorAll('details, [data-faq], .faq-item')
    const visibleCount = visibleFaqs.length

    if (schemaQCount === 0) {
      return { status: 'fail', detail: 'FAQPage schema has no mainEntity questions' }
    }

    if (visibleCount > 0 && Math.abs(schemaQCount - visibleCount) > 1) {
      return {
        status: 'warn',
        detail: `Schema has ${schemaQCount} questions but DOM shows ~${visibleCount} FAQ items — check for drift`,
      }
    }

    return { status: 'pass', detail: `FAQPage schema with ${schemaQCount} questions present` }
  },
}

export default check
