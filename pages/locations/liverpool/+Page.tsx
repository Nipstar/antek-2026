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
              AI AUTOMATION &bull; LIVERPOOL
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Liverpool Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Liverpool is a city that gets things done. From the commercial district around Dale Street to the creative quarter in the Baltic Triangle, from family trades firms in Aigburth to lettings agents covering Toxteth and Wavertree &mdash; the businesses here are built on graft, reputation, and word of mouth.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              But graft alone doesn't scale. We build AI voice agents, chatbots, and workflow automation that catch the calls you miss, convert the website visitors you lose, and handle the admin that keeps you at your desk until 8pm.
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
              What We Build for Liverpool Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services that help Merseyside businesses punch above their weight. No fluff, no jargon &mdash; just tools that work.
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
                Liverpool businesses thrive on personal connections, and a missed call is a missed opportunity. Our AI voice agents answer every call with a natural, professional voice &mdash; taking details, answering questions, and booking appointments. Whether you're a solicitor in court or a plumber under a sink, every call gets answered.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Your reputation's built on being reliable. This makes sure you are.
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
                Liverpool's customer base is savvy. They're checking your website at 10pm, comparing you to three competitors, and going with whoever responds first. Our AI chatbots engage every visitor instantly &mdash; answering their questions, qualifying their needs, and booking them in before they click away.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Your website working the night shift, so you don't have to.
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
                The admin never stops. Quotes, follow-ups, invoices, appointment reminders &mdash; it's the same routine every week. We connect the tools you already use and automate the repetitive bits. New enquiry comes in? It's acknowledged, logged, and followed up automatically. Invoice overdue? Chased without you lifting a finger.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Spend your time doing the work, not chasing it.
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
              Remote Delivery. No Nonsense.
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We're based in Hampshire, not Liverpool &mdash; and we won't pretend otherwise. But here's the thing: AI automation doesn't need someone sitting in your office. Everything from the initial chat to the build, testing, and ongoing support happens over video call and screen share. It's how most tech businesses work these days, and it's how we've delivered for clients across the UK.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Our Liverpool clients include trades firms working across Merseyside, professional services in the city centre, and growing businesses from Wirral to Knowsley. The AI doesn't care about postcodes &mdash; it answers your calls and books your appointments whether the caller's in L1 or L36.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              What you get is Andy directly. 30+ years in tech, no juniors, no layers of account managers. If something needs sorting, it gets sorted. Liverpool businesses appreciate straight dealing &mdash; that's exactly what we offer.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              You'll judge us on results, not geography. And we're comfortable with that.
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
            Book a free 15-minute chat. No sales pitch, no obligation &mdash; just a straight conversation about whether AI automation is right for your Liverpool business.
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
