import { Button } from '../../../src/components/Button'
import { Card } from '../../../src/components/Card'
import { Icon } from '../../../src/components/Icon'

const services = [
  {
    letter: 'V',
    name: 'AI Voice Assistants',
    slug: 'ai-voice-assistants',
    description:
      'Phone agents that answer every call 24/7, qualify leads, book appointments, and send you a summary — all without hiring anyone.',
    price: 'From £249 setup + £97/month',
  },
  {
    letter: 'C',
    name: 'AI Chatbots',
    slug: 'ai-chatbots',
    description:
      "Website chat that handles enquiries, qualifies prospects, and books appointments around the clock \u2014 even when you're asleep.",
    price:   'From £149 setup + £57/month',
  },
  {
    letter: 'A',
    name: 'Workflow Automation',
    slug: 'workflow-automation',
    description:
      "Connect your tools. Eliminate repetitive tasks. From invoice chasing to CRM updates \u2014 let AI handle the busywork so you don't have to.",
    price: 'From £250 one-off',
  },
  {
    letter: 'G',
    name: 'GEO Audit',
    slug: 'geo-audit',
    description:
      'A full audit of how visible your business is in AI-generated answers from ChatGPT, Claude, Gemini, and Perplexity — with a clear action plan to fix it.',
    price: 'From £247 one-time',
  },
]

export default function Page() {
  return (
    <div className="bg-off-white">

      {/* ── HERO ── */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              SERVICES &bull; AI AUTOMATION
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation Services for UK Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              We build AI voice agents, chatbots, and workflow automation that work 24/7 — capturing leads, booking appointments, and handling admin while you focus on the actual work. Based in Hampshire. Serving the whole UK.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <a href="/contact">
                <Button variant="primary">Book a free 15-min chat</Button>
              </a>
              <a href="/ai-receptionist">
                <Button variant="secondary">See AI Receptionist</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
            What We Build
          </h2>
          <p className="text-lg text-charcoal mb-12 max-w-2xl">
            Everything is built to your business, not bolted on from a template. Pick one service or combine them — most clients start with voice and add automation over time.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <a key={service.slug} href={`/services/${service.slug}`} className="block group">
                <Card hover>
                  <Icon letter={service.letter} size="lg" />
                  <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-3 group-hover:text-terracotta transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-charcoal leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-sm font-black text-terracotta uppercase">
                    {service.price}
                  </p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ANTEK ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            Why Antek Automation?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <Icon letter="B" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-3">
                Built for Your Business
              </h3>
              <p className="text-charcoal leading-relaxed text-sm">
                We don't sell subscriptions to generic tools. Everything is configured to your services, your customers, and your workflows.
              </p>
            </Card>
            <Card>
              <Icon letter="U" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-3">
                UK-Based Support
              </h3>
              <p className="text-charcoal leading-relaxed text-sm">
                We're in Hampshire. You'll speak to the person who built your system, not a support ticket queue. Same-day responses, proper answers.
              </p>
            </Card>
            <Card>
              <Icon letter="R" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-3">
                Certified Retell AI Partner
              </h3>
              <p className="text-charcoal leading-relaxed text-sm">
                One of a handful of certified Retell AI partners in the UK. The technology is enterprise-grade — the price and attitude are not.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 30-minute call. We'll look at where you're losing time, where you're missing leads, and tell you honestly which service will make the biggest difference.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <a href="/contact">
              <Button variant="primary">Book a free 15-min chat</Button>
            </a>
            <a href="tel:03330389960">
              <Button variant="secondary">Call 0333 038 9960</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
