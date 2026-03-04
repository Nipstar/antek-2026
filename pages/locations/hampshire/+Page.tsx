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
              AI AUTOMATION &bull; HAMPSHIRE
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Hampshire Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              We're based in <a href="/locations/andover" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Andover</a>, right in the middle of Hampshire. From Southampton up to Basingstoke, from Winchester across to Farnborough &mdash; if you run a service business anywhere in the county, we build the AI that keeps your phone answered and your leads captured while you're out doing the actual work.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              Whether you're a plumber in Eastleigh who can't answer calls mid-job, an electrician in Fleet losing evening enquiries, or a dental practice in Winchester drowning in appointment requests &mdash; we've got something that'll genuinely help.
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
              What We Build for Hampshire Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services. All of them designed to stop you losing money to missed calls, slow follow-ups, and admin that eats your evenings.
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
                An AI receptionist that picks up when you're on a job in Romsey or stuck in traffic on the M3. It answers questions, books appointments, and captures caller details in a natural, human-sounding voice. 24/7, bank holidays included.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                No more missed calls. No more chasing voicemails at 9pm.
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
                A smart chat widget on your website that talks to visitors the moment they land. Answers their questions, qualifies them, and books them straight into your calendar &mdash; whether it's 2pm or 2am.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Turns browsers into booked appointments while you sleep.
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
                We connect the tools you already use &mdash; your calendar, CRM, email, invoicing &mdash; and automate the repetitive stuff. New enquiry comes in? Logged, acknowledged, and followed up automatically.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Less admin. Fewer mistakes. More time for paying work.
              </p>
              <a href="/services/workflow-automation">
                <Button variant="primary" className="w-full">Learn More</Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* ── WHY LOCAL MATTERS ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              Why a Hampshire AI Agency?
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              I'm Andy, and I'm based in <a href="/locations/andover" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Andover</a>. I've got 30+ years in tech &mdash; not the trendy Silicon Valley kind, but the kind where you actually build things that work and fix them when they don't.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              I set up Antek Automation because I kept seeing local tradespeople and service businesses losing work to missed calls, slow follow-ups, and admin overload. The big AI agencies don't care about a plumber in Alton or a cleaning company in Fareham. I do.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Happy to meet for a coffee if you're nearby &mdash; I've done it with businesses across the county, from Petersfield to Aldershot. But honestly, everything works brilliantly over a video call too. Most of my Hampshire clients never need to meet in person, and their AI agents run just as well.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              The point is: you're not dealing with a faceless agency. You're dealing with a bloke who lives here, who picks up his own phone, and who actually gives a toss about whether this works for your business.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Ready to Stop Losing Leads?
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 15-minute chat with Andy. No pitch deck, no pressure &mdash; just a straight conversation about whether AI automation makes sense for your Hampshire business.
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
