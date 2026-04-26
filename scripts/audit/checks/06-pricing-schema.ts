import type { Check } from '../types.js'

const VALID_PRODUCT_TYPES = ['SoftwareApplication', 'Service']

const check: Check = {
  name: '/pricing has Service/SoftwareApplication schema with Offer in GBP',
  description: 'Only runs on /pricing — validates that product schema types have GBP Offer entries',
  introducedInPhase: 2,
  async run({ url, document }) {
    if (url !== '/pricing') {
      return { status: 'pass', detail: 'Not /pricing — skipped' }
    }

    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    const issues: string[] = []
    let offersFound = 0

    for (const script of scripts) {
      let parsed: Record<string, unknown>
      try {
        parsed = JSON.parse(script.textContent?.trim() ?? '{}')
      } catch {
        continue
      }

      const type = parsed['@type'] as string
      if (!VALID_PRODUCT_TYPES.includes(type)) continue

      const offers = parsed['offers'] as Record<string, unknown> | Record<string, unknown>[] | undefined
      if (!offers) {
        issues.push(`${type} schema has no "offers" property`)
        continue
      }

      const offerList = Array.isArray(offers) ? offers : [offers]
      for (const offer of offerList) {
        if (offer['priceCurrency'] !== 'GBP') {
          issues.push(`Offer in ${type} has priceCurrency "${offer['priceCurrency']}" — expected GBP`)
        } else {
          offersFound++
        }
      }
    }

    if (issues.length > 0) {
      return { status: 'fail', detail: issues.join(' | ') }
    }
    if (offersFound === 0) {
      return { status: 'fail', detail: 'No GBP Offer entries found in any Service/SoftwareApplication schema on /pricing' }
    }
    return { status: 'pass', detail: `${offersFound} GBP offer(s) found` }
  },
}

export default check
