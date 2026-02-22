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
              AI AUTOMATION &bull; MANCHESTER
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Manchester Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Manchester moves fast. It's the beating heart of the Northern Powerhouse, with one of the fastest-growing business scenes in the UK. From media agencies in Salford to plumbing firms in Trafford, from estate agents along Deansgate to cleaning companies covering Stockport &mdash; everyone's fighting for the same customers, and the businesses that respond fastest win.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              We build AI voice agents, chatbots, and workflow automation that make sure you're always the first to respond &mdash; even when you're mid-job, mid-meeting, or fast asleep.
            </p>
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
              What We Build for Manchester Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services built for a city that doesn't wait around. Speed, efficiency, and zero wasted time.
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
                Manchester's a tech-forward city, and your customers expect instant responses. Our AI voice agents answer every call in a natural, human-sounding voice &mdash; handling enquiries, booking appointments, and capturing details. They don't take lunch breaks and they don't clock off at five.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                In a city this competitive, the business that answers first gets the job.
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
                Manchester's digital economy is booming, and your customers are online at all hours. Our AI chatbots sit on your website and engage every visitor &mdash; answering questions, qualifying leads, and booking appointments whether it's Tuesday afternoon or Saturday night.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Convert visitors while your competitors are still checking their emails.
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
                Growing fast in Manchester means your admin grows with you. We connect the tools you're already using &mdash; calendar, email, CRM, invoicing &mdash; and automate the bits that don't need a human. Enquiries get acknowledged, follow-ups get sent, and invoices get chased &mdash; automatically.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Scale your business without scaling your admin.
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
              Why a Hampshire Agency Works for Manchester
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Manchester knows tech. It's home to MediaCity, a thriving startup scene, and businesses that expect digital-first solutions. So it won't surprise you that our entire service works remotely &mdash; from initial consultation to build, launch, and ongoing support.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We're based in Hampshire, but our Manchester clients don't notice the distance. Everything happens over video call and screen share. The AI we build runs on cloud infrastructure that doesn't care whether it's answering calls in Didsbury or Deansgate. And when something needs tweaking, we're a phone call or message away.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              What you won't get is a bloated team, layers of account managers, or the kind of agency overhead that Manchester's Northern Quarter seems to specialise in. You get Andy &mdash; 30+ years in tech, direct access, straight answers.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              We've worked with Manchester trades firms, professional services companies, and hospitality businesses. The common thread? They all wanted something that actually works, without the waffle. That's what we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Move Faster Than the Competition
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            15 minutes. Free. No obligation. Let's talk about whether AI automation makes sense for your Manchester business.
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
