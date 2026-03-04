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
              AI AUTOMATION &bull; NEWCASTLE
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Newcastle Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Newcastle's got something a lot of cities don't: fierce local loyalty. When a Geordie finds a business they trust, they stick with it and tell their mates. But that loyalty has to be earned &mdash; and you earn it by being reliable, responsive, and not messing people about.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              That's exactly what our AI does. It answers every call, responds to every website visitor, and follows up on every lead &mdash; so you build the kind of reputation that keeps Jesmond, Gosforth, Gateshead, and the Quayside coming back. We build voice agents, chatbots, and workflow automation that make your business impossible to ignore.
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
              What We Build for Newcastle Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services that give you big-business responsiveness at small-business prices. Proper value for money.
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
                The North East runs on word of mouth, and word of mouth starts with a good first impression. Our AI voice agents answer your calls with a natural, professional voice &mdash; taking details, answering questions, and booking appointments. No voicemail, no hold music, no "please try again later."
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Every call answered means another chance to earn that Geordie loyalty.
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
                Your website visitors want answers now, not tomorrow morning. Our AI chatbots engage them the instant they arrive &mdash; answering questions about your services, checking availability, and booking them in. Works at midnight after the match, works during Sunday lunch, works while you're on a job in Tynemouth.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Always open. Always responsive. Always working for you.
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
                Running a service business in Newcastle means wearing every hat at once &mdash; quoting, booking, invoicing, following up, and somehow finding time to do the actual work. We automate the admin by connecting your existing tools so enquiries get logged, quotes get followed up, and nothing gets forgotten.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                All the professionalism. None of the late-night spreadsheets.
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
              Value for Money. No Matter the Postcode.
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We're based in Hampshire, and we know what you're thinking: "Another southern company telling us how to run our business." That's not what this is. We're not here to sell you something flashy &mdash; we're here to build something useful at a price that makes sense for North East businesses.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              The beauty of AI automation is that it works the same whether you're in Jesmond or Johannesburg. Setup, testing, and ongoing support all happen remotely &mdash; video calls, screen shares, and phone conversations with Andy directly. No layers of middlemen, no premium pricing for the postcode.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We've worked with businesses across the North East &mdash; from electricians in Gosforth to property managers in Gateshead, from dental practices near the Quayside to service companies covering Sunderland and Durham. The tech doesn't know or care about borders. It just answers your phone and captures your leads.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              Newcastle businesses value straight-talking and fair pricing. That's exactly what you'll get from us. No surprises, no hidden costs, no waffle. Just AI that works and a bloke who picks up the phone when you need him.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Canny Investment. Proper Results.
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 15-minute chat. Straight conversation, no waffle &mdash; just an honest look at whether AI automation makes sense for your Newcastle business.
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
