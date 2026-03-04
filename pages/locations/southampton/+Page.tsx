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
              AI AUTOMATION &bull; SOUTHAMPTON
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Southampton Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Southampton is a city that knows how to work. It's a major port, a university city, and home to a strong service economy that covers everything from maritime logistics to high-street retail. From Ocean Village to Portswood, from Shirley to Bitterne &mdash; the businesses here are practical, no-nonsense, and focused on getting the job done.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              We're a <a href="/locations/hampshire" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Hampshire</a>-based AI automation agency, just up the road in Andover. We build voice agents, chatbots, and workflow automation for Southampton businesses that are tired of losing leads to missed calls and drowning in admin.
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
              What We Build for Southampton Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services designed for a port city that never stops. Because your customers don't wait, and neither should your business.
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
                Southampton's service businesses are busy &mdash; out on jobs, on the water, in meetings. Our AI voice agents pick up every call you can't, answering in a natural voice that sounds like a real receptionist. They take details, answer questions, and book appointments round the clock.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Stop losing jobs to unanswered calls. It's that simple.
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
                With two major universities, Southampton has a tech-savvy customer base that expects instant online responses. Our AI chatbots sit on your website and engage every visitor &mdash; answering questions, collecting details, and booking appointments before they click away to the next option.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Your website works as hard as you do. Finally.
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
                From quotes and invoices to follow-ups and data entry, the admin never stops. We connect the tools you're already using and automate the repetitive tasks that eat your time. New enquiry? Acknowledged, logged, and followed up &mdash; without you doing a thing.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Run a tighter ship. Without working longer hours.
              </p>
              <a href="/services/workflow-automation">
                <Button variant="primary" className="w-full">Learn More</Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* ── LOCAL ADVANTAGE ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              Just Up the Road. Properly Local.
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We're based in Andover &mdash; about 30 minutes up the A3057. That makes us one of the closest AI automation agencies to Southampton, and definitely the most accessible. While the big London agencies charge London rates and treat you like a line item on a spreadsheet, we're right here in <a href="/locations/hampshire" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Hampshire</a>, building bespoke AI solutions for local businesses.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              That said, you don't need to drive up the A303 to work with us. Everything runs perfectly over video calls and screen share &mdash; which is how most of our Southampton clients prefer it anyway. The setup, testing, and ongoing support all happen remotely. Your AI voice agent doesn't need a parking space in Ocean Village to answer your calls.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We've worked with tradespeople covering the SO postcode, lettings agents in the city centre, health and wellness businesses in Portswood, and service companies that cover everything from Eastleigh to the New Forest. The AI doesn't care about geography &mdash; it just works.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              You'll deal with Andy directly. 30+ years in tech, no account managers, no handoffs. When something needs doing, it gets done. That's the Hampshire way.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Your Nearest AI Automation Agency
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 15-minute chat with Andy. We're just up the road, we know Hampshire, and we'll give you a straight answer about whether AI automation is right for your business.
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
