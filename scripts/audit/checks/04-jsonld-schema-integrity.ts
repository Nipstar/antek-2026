import type { Check } from '../types.js'
import expectedNap from '../expected-nap.json' assert { type: 'json' }

const FORBIDDEN_TYPES_FOR_REVIEW = ['Organization', 'LocalBusiness']

const check: Check = {
  name: 'JSON-LD schema integrity',
  description: 'Validates all ld+json blocks: valid JSON, @context/@type present, no self-serving reviews on Org/LocalBusiness, NAP matches',
  introducedInPhase: 1,
  async run({ document, url }) {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    if (scripts.length === 0) {
      return { status: 'warn', detail: 'No JSON-LD schema blocks found' }
    }

    const issues: string[] = []
    let schemaCount = 0

    for (const script of scripts) {
      const raw = script.textContent?.trim() ?? ''
      if (!raw) continue

      let parsed: Record<string, unknown>
      try {
        parsed = JSON.parse(raw)
        schemaCount++
      } catch (e) {
        issues.push(`Invalid JSON in ld+json block: ${String(e).slice(0, 80)}`)
        continue
      }

      if (!parsed['@context']) issues.push(`Missing @context in ${parsed['@type'] ?? 'unknown'} schema`)
      if (!parsed['@type']) issues.push(`Missing @type in schema block`)

      const type = parsed['@type'] as string
      if (FORBIDDEN_TYPES_FOR_REVIEW.includes(type)) {
        if (parsed['aggregateRating']) issues.push(`${type} schema contains aggregateRating (Google policy violation — remove it)`)
        if (parsed['review']) issues.push(`${type} schema contains review array (Google policy violation — remove it)`)
      }

      // NAP check on LocalBusiness
      if (type === 'LocalBusiness') {
        const phone = (parsed['telephone'] as string | undefined) ?? ''
        const normalised = phone.replace(/[\s-]/g, '')
        const validPhones = expectedNap.telephone.map(p => p.replace(/[\s-]/g, ''))
        if (phone && !validPhones.includes(normalised)) {
          issues.push(`LocalBusiness telephone "${phone}" does not match expected NAP — verify against GBP`)
        }
      }
    }

    if (issues.length > 0) {
      return { status: 'fail', detail: issues.slice(0, 4).join(' | ') + (issues.length > 4 ? ` (+${issues.length - 4} more)` : '') }
    }
    return { status: 'pass', detail: `${schemaCount} schema block(s) valid` }
  },
}

export default check
