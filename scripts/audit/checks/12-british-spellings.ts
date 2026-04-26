import type { Check } from '../types.js'

const AMERICAN_TO_BRITISH: Record<string, string> = {
  optimization: 'optimisation',
  optimized: 'optimised',
  optimizing: 'optimising',
  optimizes: 'optimises',
  organization: 'organisation',
  organized: 'organised',
  organizing: 'organising',
  organizes: 'organises',
  color: 'colour',
  colors: 'colours',
  favorite: 'favourite',
  favorites: 'favourites',
  customize: 'customise',
  customized: 'customised',
  customizing: 'customising',
  customizes: 'customises',
  specialize: 'specialise',
  specialized: 'specialised',
  specializes: 'specialises',
  analyze: 'analyse',
  analyzed: 'analysed',
  analyzes: 'analyses',
  behavior: 'behaviour',
  behaviors: 'behaviours',
  center: 'centre',
  centers: 'centres',
  traveling: 'travelling',
  traveled: 'travelled',
  traveler: 'traveller',
  recognize: 'recognise',
  recognized: 'recognised',
  recognizing: 'recognising',
  maximize: 'maximise',
  maximized: 'maximised',
  minimize: 'minimise',
  minimized: 'minimised',
  prioritize: 'prioritise',
  prioritized: 'prioritised',
}

const check: Check = {
  name: 'No American spellings',
  description: 'Checks for American English spellings and suggests British equivalents',
  introducedInPhase: 3,
  async run({ document }) {
    const bodyText = document.body?.textContent ?? ''
    const issues: string[] = []

    for (const [american, british] of Object.entries(AMERICAN_TO_BRITISH)) {
      const regex = new RegExp(`\\b${american}\\b`, 'gi')
      if (regex.test(bodyText)) {
        issues.push(`"${american}" → "${british}"`)
      }
    }

    if (issues.length > 0) {
      return {
        status: 'fail',
        detail: `American spellings found: ${issues.slice(0, 5).join(', ')}` + (issues.length > 5 ? ` (+${issues.length - 5} more)` : ''),
      }
    }
    return { status: 'pass', detail: 'British English spellings confirmed' }
  },
}

export default check
