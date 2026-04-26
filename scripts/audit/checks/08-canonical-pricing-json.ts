import type { Check } from '../types.js'
import * as fs from 'fs'
import * as path from 'path'

const check: Check = {
  name: 'canonical-pricing.json exists and is valid',
  description: 'Checks that canonical-pricing.json exists at the repo root and contains at least one product with a price',
  introducedInPhase: 2,
  async run({ config }) {
    // canonical-pricing.json sits at repo root (two levels up from scripts/audit/)
    const candidates = [
      path.resolve(process.cwd(), 'canonical-pricing.json'),
      path.resolve(process.cwd(), '..', 'canonical-pricing.json'),
    ]

    const filePath = candidates.find(p => fs.existsSync(p))
    if (!filePath) {
      return { status: 'fail', detail: 'canonical-pricing.json not found at repo root' }
    }

    try {
      const raw = fs.readFileSync(filePath, 'utf-8')
      const data = JSON.parse(raw) as Record<string, unknown>
      const products = Object.keys(data)
      if (products.length === 0) {
        return { status: 'fail', detail: 'canonical-pricing.json is empty' }
      }
      return { status: 'pass', detail: `canonical-pricing.json found with ${products.length} product(s): ${products.join(', ')}` }
    } catch (e) {
      return { status: 'fail', detail: `canonical-pricing.json is invalid JSON: ${String(e)}` }
    }
  },
}

export default check
