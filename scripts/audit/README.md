# Site Audit Tool

Playwright-based audit tool that verifies content quality, schema markup, and structural requirements across phases of the Antek Automation content improvement project.

## Running the audit

```bash
# Requires: npm run dev (or set AUDIT_BASE_URL to a live URL)

# Run all checks (all phases)
npm run audit:full

# Run only Phase 1 checks (use before merging a Phase 1 PR)
npm run audit -- --since-phase=1

# Scope to specific pages
npm run audit -- --pages=/,/services/ai-chatbots

# Save screenshots
npm run audit -- --screenshots

# Emit machine-readable JSON
npm run audit -- --json

# Fail on warnings too (CI strict mode)
npm run audit -- --strict
```

Output is written to `audit-output/report.md` (and `report.json` with `--json`).

## Phase gates

Each PR must pass the checks for its phase before merging:

| PR label | Command to run locally |
|---|---|
| `phase-1` | `npm run audit -- --since-phase=1` |
| `phase-2` | `npm run audit -- --since-phase=2` |
| `phase-3` | `npm run audit -- --since-phase=3` |
| `phase-4` | `npm run audit -- --since-phase=4` |
| `phase-5` | `npm run audit -- --since-phase=5` |

CI reads the `phase-N` label from the PR (or a `PHASE` file in the diff) and runs the appropriate phase gate automatically.

## Environment

```
AUDIT_BASE_URL   Target URL (default: http://localhost:5173)
```

## Adding a new check

Create a file in `scripts/audit/checks/` — name it `NN-description.ts`:

```ts
import type { Check } from '../types.js'

const check: Check = {
  name: 'Human-readable name',
  description: 'What this check verifies',
  introducedInPhase: 1,  // which phase this check gates
  async run({ url, page, html, document, config }) {
    // ... your logic
    return { status: 'pass', detail: 'All good' }
    // or: return { status: 'fail', detail: 'What went wrong' }
    // or: return { status: 'warn', detail: 'Advisory only' }
  },
}

export default check
```

`AuditContext` provides:
- `url` — the page path (e.g. `/services/ai-chatbots`)
- `fullUrl` — the full URL including base
- `page` — a Playwright `Page` instance (post-hydration)
- `html` — raw SSR HTML from `fetch()` (pre-hydration)
- `document` — jsdom `Document` parsed from the raw HTML
- `config` — the CLI config object

## Files

| File | Purpose |
|---|---|
| `site-audit.ts` | Main runner — page discovery, check orchestration, report output |
| `types.ts` | TypeScript interfaces shared across all checks |
| `pages.ts` | Fallback page list when sitemap.xml is unavailable |
| `expected-nap.json` | NAP ground truth — verify against Google Business Profile |
| `acronyms.json` | Acronym → expansion map for check 11 |
| `checks/01-*.ts` … `checks/17-*.ts` | Individual checks |
