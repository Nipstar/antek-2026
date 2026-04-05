import { usePageContext } from 'vike-react/usePageContext'
import { Button } from '../../src/components/Button'

export default function Page() {
  const pageContext = usePageContext()
  const is404 = pageContext.is404

  const title = is404 ? '404' : '500'
  const heading = is404 ? 'This Page Went Missing' : 'Something Went Wrong'
  const subhead = is404
    ? "The page you're looking for doesn't exist, has been moved, or never existed in the first place. Happens to the best of us."
    : 'An error occurred on our end. We\u2019ve logged it and we\u2019re looking into it. Try again in a moment, or head back to the homepage.'

  return (
    <div className="bg-off-white min-h-[70vh] flex items-center">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-28 w-full">
        <div className="bg-warm-beige border-3 border-charcoal shadow-brutal p-8 md:p-16">
          <p className="font-black text-[8rem] md:text-[12rem] uppercase tracking-tight-xl text-terracotta leading-none mb-4">
            {title}
          </p>
          <h1 className="font-black text-3xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-6 leading-tight">
            {heading}
          </h1>
          <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-10 max-w-2xl">
            {subhead}
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-12">
            <a href="/">
              <Button variant="primary">Back to Homepage</Button>
            </a>
            <a href="/contact">
              <Button variant="secondary">Talk to a Human</Button>
            </a>
          </div>

          <div className="border-t-3 border-charcoal pt-8">
            <p className="font-black text-sm uppercase tracking-wide text-charcoal mb-5">
              Popular Pages
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li>
                <a
                  href="/ai-receptionist"
                  className="text-charcoal hover:text-terracotta transition-colors font-bold underline underline-offset-4 decoration-terracotta decoration-2"
                >
                  AI Receptionist &rarr;
                </a>
              </li>
              <li>
                <a
                  href="/services/ai-voice-assistants"
                  className="text-charcoal hover:text-terracotta transition-colors font-bold underline underline-offset-4 decoration-terracotta decoration-2"
                >
                  AI Voice Agents &rarr;
                </a>
              </li>
              <li>
                <a
                  href="/services/ai-chatbots"
                  className="text-charcoal hover:text-terracotta transition-colors font-bold underline underline-offset-4 decoration-terracotta decoration-2"
                >
                  AI Chatbots &rarr;
                </a>
              </li>
              <li>
                <a
                  href="/services/workflow-automation"
                  className="text-charcoal hover:text-terracotta transition-colors font-bold underline underline-offset-4 decoration-terracotta decoration-2"
                >
                  Workflow Automation &rarr;
                </a>
              </li>
              <li>
                <a
                  href="/services/geo-audit"
                  className="text-charcoal hover:text-terracotta transition-colors font-bold underline underline-offset-4 decoration-terracotta decoration-2"
                >
                  GEO Audit &rarr;
                </a>
              </li>
              <li>
                <a
                  href="/locations"
                  className="text-charcoal hover:text-terracotta transition-colors font-bold underline underline-offset-4 decoration-terracotta decoration-2"
                >
                  All Locations &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
