import { useState, Suspense, lazy } from 'react';
import { Button } from '../../../src/components/Button';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';
import { VoiceDemoButton } from '../../../src/components/VoiceDemoButton';

const VoiceChat = lazy(() => import('../../../src/components/VoiceChat').then(m => ({ default: m.VoiceChat })));

export default function Page() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);

  return (
    <div className="bg-off-white">

      {/* ── HERO ── */}
      <section className="bg-warm-beige border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI AUTOMATION &bull; LONDON
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for London Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              London customers have the highest expectations in the country. They want instant responses, seamless booking, and zero friction &mdash; and they've got a hundred alternatives if you can't deliver. Meanwhile, hiring staff to handle calls, enquiries, and admin in London costs more than almost anywhere else in the UK.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              AI automation isn't just a nice-to-have in London. It's the difference between competing and getting buried. We build voice agents, chatbots, and workflow automation that give you enterprise-level responsiveness without the enterprise-level payroll.
            </p>
            <p className="text-sm text-mid-gray mb-8">By <a href="/about" className="underline hover:text-terracotta transition-colors">Andy Norman</a>, Founder | 30+ years in technology</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <a href="/contact">
                <Button variant="primary">Book a Free 15-Min Chat</Button>
              </a>
              <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              What We Build for London Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services that help you punch above your weight in the most competitive market in the UK.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Voice Agents */}
            <Card hover>
              <Icon letter="V" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                AI Voice Agents
              </h3>
              <p className="text-charcoal leading-relaxed mb-4">
                In London, a missed call doesn't just cost you a lead &mdash; it costs you a lead worth two or three times what it would anywhere else. Our AI voice agents pick up every call, answer questions, book appointments, and capture details. They sound natural, they work 24/7, and they never take a sick day.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                The financial case is a no-brainer when you compare it to London receptionist salaries.
              </p>
              <a href="/services/ai-voice-assistants">
                <Button variant="primary" className="w-full">Learn More</Button>
              </a>
            </Card>

            {/* AI Chatbots */}
            <Card hover>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                AI Chatbots
              </h3>
              <p className="text-charcoal leading-relaxed mb-4">
                London customers do their research at all hours &mdash; on the tube, during lunch, at midnight. Our AI chatbots engage them the instant they land on your site, answering questions and booking appointments before they bounce to the next Google result.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                In a market this saturated, speed of response is everything.
              </p>
              <a href="/services/ai-chatbots">
                <Button variant="primary" className="w-full">Learn More</Button>
              </a>
            </Card>

            {/* Workflow Automation */}
            <Card hover>
              <Icon letter="A" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Workflow Automation
              </h3>
              <p className="text-charcoal leading-relaxed mb-4">
                Time is money, and in London it's a lot of money. Every hour you spend on data entry, follow-up emails, and invoice chasing is an hour you're not billing. We connect your tools and automate the admin &mdash; so new leads get acknowledged, quotes get followed up, and nothing falls through the cracks.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Reclaim the hours that London's pace steals from you.
              </p>
              <a href="/services/workflow-automation">
                <Button variant="primary" className="w-full">Learn More</Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* ── WHY REMOTE WORKS ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              Not Based in London. That's the Point.
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We're based in Hampshire, and we're not going to pretend otherwise. But here's what that means for you: you get the same quality work without the London agency price tag. No Shoreditch office rent baked into your invoice. No overheads that exist purely to impress other agencies.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Whether your business is in the City, Camden, Croydon, or anywhere in between, the AI we build works the same. Setup, testing, and ongoing support all happen over video call and screen share &mdash; which, let's be honest, is how most London business gets done these days anyway.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We work with accountants in Canary Wharf, trades firms in South London, dental practices in Kensington, and cleaning companies that cover half the city. The geography doesn't matter. What matters is that the AI picks up your calls, books your appointments, and handles your admin &mdash; and that's what we deliver.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              You'll deal directly with Andy &mdash; 30+ years in tech, no account managers, no juniors, no runaround.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            London Speed. Without London Prices.
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 15-minute chat. We'll tell you exactly what AI can do for your London business &mdash; and what it can't. No faff.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
            <a href="/contact">
              <Button variant="secondary">Book a Free Chat</Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── VOICE CHAT MODAL ── */}
      {isVoiceChatOpen && (
        <Suspense fallback={null}>
          <VoiceChat isOpen={isVoiceChatOpen} onClose={() => setIsVoiceChatOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
