import type { Check } from '../types.js'

const check: Check = {
  name: '/pricing page exists and renders',
  description: 'Verifies that /pricing route returns a 200 with meaningful content',
  introducedInPhase: 2,
  async run({ config }) {
    try {
      const res = await fetch(`${config.baseUrl}/pricing`)
      if (!res.ok) {
        return { status: 'fail', detail: `/pricing returned HTTP ${res.status}` }
      }
      const html = await res.text()
      if (!html.includes('<h1')) {
        return { status: 'fail', detail: '/pricing returned 200 but has no <h1> — may be a fallback page' }
      }
      return { status: 'pass', detail: '/pricing returns 200 with content' }
    } catch (e) {
      return { status: 'fail', detail: `Failed to fetch /pricing: ${String(e)}` }
    }
  },
}

export default check
