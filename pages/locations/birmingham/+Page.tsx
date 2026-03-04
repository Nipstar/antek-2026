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
              AI AUTOMATION &bull; BIRMINGHAM
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Birmingham Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Birmingham doesn't hang about. It's the UK's second-largest city, it's got a manufacturing heritage that runs deep, and its service sector is fiercely competitive. If you're running a business here &mdash; whether that's a trades firm in Digbeth, a consultancy in the Jewellery Quarter, or a dental practice out in Solihull &mdash; you already know that every missed call is money walking out the door.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              We build AI that catches those calls, converts those website visitors, and handles the admin that eats your evenings. Delivered remotely from Hampshire, working brilliantly for businesses across the West Midlands.
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
              What We Build for Birmingham Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three tools that give you a competitive edge in a city where everyone's fighting for the same customers.
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
                In a city this busy, speed wins. Our AI voice agents answer your calls instantly &mdash; taking messages, answering common questions, and booking appointments in a natural, human-sounding voice. While your competitors scramble to return calls, your AI's already handled it.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                24/7 coverage. No missed calls. No lost revenue.
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
                Birmingham's customers are savvy &mdash; they research online before they pick up the phone. Our AI chatbots catch them at the moment they're comparing options, answering their questions and booking them in before they click through to your competitor.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Turn website browsers into paying customers, day or night.
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
                Running a service business in Brum means juggling quotes, bookings, invoices, and follow-ups across half a dozen tools. We connect them all and automate the repetitive bits &mdash; so a new enquiry gets logged, acknowledged, and followed up without you touching a thing.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Less time on paperwork. More time on the tools.
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
              Hampshire-Based. Birmingham-Ready.
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We're based in Hampshire, not Birmingham &mdash; and we're upfront about that. But here's the thing: AI automation doesn't need someone sitting in your office. It needs someone who knows what they're doing, builds it properly, and is available when you need them.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Everything we do &mdash; from the initial chat to the build, testing, and ongoing support &mdash; works over video call, screen share, and good old-fashioned phone conversations. Our Birmingham clients get exactly the same service, the same turnaround, and the same results as the businesses we work with down the road.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Whether you're a property manager in Edgbaston, a cleaning company covering Sutton Coldfield, or a solicitor's practice in the city centre &mdash; the AI we build works from day one, and we're a phone call away if anything needs tweaking.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              Birmingham's got enough agencies that over-promise and under-deliver. We'd rather just build something that works and let the results speak for themselves.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Ready to Compete Smarter?
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 15-minute chat. No jargon, no pitch deck &mdash; just a straight conversation about whether AI automation makes sense for your Birmingham business.
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
