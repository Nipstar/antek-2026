import { AIReceptionistIndustryPage } from '../../../src/components/AIReceptionistIndustryPage'
import { getIndustryBySlug } from '../../../src/data/aiReceptionist'

export default function Page() {
  const industry = getIndustryBySlug('lawyers')!
  return <AIReceptionistIndustryPage industry={industry} />
}
