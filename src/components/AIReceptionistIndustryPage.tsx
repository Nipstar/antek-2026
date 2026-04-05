import { useState, Suspense, lazy } from 'react'
import { Button } from './Button'
import { Card } from './Card'
import { Icon } from './Icon'
import { VoiceDemoButton } from './VoiceDemoButton'
import { AIReceptionistDemoCards } from './AIReceptionistDemoCards'
import type { IndustryData } from '../data/aiReceptionist'
import { getIndustryBySlug } from '../data/aiReceptionist'

const VoiceChat = lazy(() => import('./VoiceChat').then((m) => ({ default: m.VoiceChat })))

interface Props {
  industry: IndustryData
}

export function AIReceptionistIndustryPage({ industry }: Props) {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false)

  const related = industry.alsoPopularWith
    .map((slug) => getIndustryBySlug(slug))
    .filter((i): i is IndustryData => !!i)

  return (
    <div className="bg-off-white">
      {/* ── HERO ── */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              {industry.heroEyebrow}
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              {industry.heroH1}
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              {industry.heroSubhead}
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
              <a href="/contact">
                <Button variant="secondary">Book a 15-Min Chat</Button>
              </a>
            </div>
            <p className="text-sm text-charcoal/70 mt-4 tracking-wide">
              Plans from &pound;97/month &middot; Setup from &pound;249
            </p>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-10">
            {industry.problemH2}
          </h2>
          {industry.problemParagraphs.map((p, i) => (
            <p key={i} className="text-lg text-charcoal leading-relaxed mb-6">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* ── BEFORE/AFTER ── */}
      <section className="bg-muted-taupe border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-12 text-center">
            Before vs After
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-3 border-charcoal shadow-brutal p-8 md:p-10">
              <p className="font-black text-sm uppercase tracking-wide text-terracotta mb-4">
                Without AI Receptionist
              </p>
              <p className="text-lg text-charcoal leading-relaxed">{industry.beforeAfter.without}</p>
            </div>
            <div className="bg-soft-sage border-3 border-charcoal shadow-brutal p-8 md:p-10">
              <p className="font-black text-sm uppercase tracking-wide text-charcoal mb-4">
                With AI Receptionist
              </p>
              <p className="text-lg text-charcoal leading-relaxed">{industry.beforeAfter.with}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-lg text-charcoal">Live in 24&ndash;48 hours. No forms. No faff.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {industry.howItWorks.map((step, i) => (
              <Card key={i}>
                <div className="w-15 h-15 bg-terracotta border-3 border-charcoal shadow-brutal-sm flex items-center justify-center mb-6">
                  <span className="font-black text-2xl text-off-white">{i + 1}</span>
                </div>
                <p className="text-charcoal leading-relaxed">{step}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IT CAPTURES ── */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-10">
            What It Captures on Every Call
          </h2>
          <ul className="space-y-4">
            {industry.captures.map((c, i) => (
              <li
                key={i}
                className="bg-white border-3 border-charcoal shadow-brutal-sm p-5 text-charcoal font-bold flex items-start gap-4"
              >
                <span className="text-terracotta font-black text-xl leading-none mt-0.5">&rarr;</span>
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PRICING + INTEGRATIONS ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <Icon letter="£" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Simple Pricing
              </h3>
              <p className="text-charcoal leading-relaxed mb-4">
                Plans from &pound;97/month. Setup from &pound;249. No per-minute charges. No hidden
                fees.
              </p>
              <a href="/contact">
                <Button variant="primary" className="w-full">
                  Book a 15-Min Chat
                </Button>
              </a>
            </Card>
            <Card>
              <Icon letter="I" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Integrations
              </h3>
              <p className="text-charcoal leading-relaxed">{industry.integrations}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── DEMO ── */}
      <section id="demo" className="bg-peach border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-6">
              Hear It For Yourself
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Dial any of our live demo agents below. Real phone numbers. Real conversations.
              Pick one, give it a go, then imagine it running on your line.
            </p>
          </div>
          <AIReceptionistDemoCards />
          <div className="text-center mt-12">
            <a href="/contact">
              <Button variant="primary">Book a 15-Min Chat</Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── ALSO POPULAR WITH ── */}
      {related.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-10 text-center">
              Also Popular With
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((r) => (
                <a key={r.slug} href={`/ai-receptionist/${r.slug}`} className="block">
                  <Card hover>
                    <h3 className="font-black text-xl uppercase text-charcoal mb-3">{r.name}</h3>
                    <p className="text-charcoal leading-relaxed mb-4">{r.gridDescription}</p>
                    <p className="font-black text-terracotta uppercase text-sm tracking-wide">
                      Learn More &rarr;
                    </p>
                  </Card>
                </a>
              ))}
              <a href="/ai-receptionist" className="block">
                <Card hover>
                  <h3 className="font-black text-xl uppercase text-charcoal mb-3">All Industries</h3>
                  <p className="text-charcoal leading-relaxed mb-4">
                    See every industry we build AI receptionists for.
                  </p>
                  <p className="font-black text-terracotta uppercase text-sm tracking-wide">
                    See All &rarr;
                  </p>
                </Card>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section className="bg-off-white border-t-3 border-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {industry.faqs.map((faq, i) => (
              <details
                key={i}
                className="border-3 border-charcoal bg-white shadow-brutal-sm group"
              >
                <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{faq.question}</span>
                  <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform flex-shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            {industry.bottomCtaH2}
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            {industry.bottomCtaSubhead}
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
            <a href="/contact">
              <Button variant="secondary">Book a 15-Min Chat</Button>
            </a>
          </div>
        </div>
      </section>

      {isVoiceChatOpen && (
        <Suspense fallback={null}>
          <VoiceChat isOpen={isVoiceChatOpen} onClose={() => setIsVoiceChatOpen(false)} />
        </Suspense>
      )}
    </div>
  )
}
