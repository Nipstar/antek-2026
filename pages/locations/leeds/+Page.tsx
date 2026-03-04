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
              AI AUTOMATION &bull; LEEDS
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Leeds Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Leeds has quietly become one of the UK's strongest business cities. A hub for professional services, a growing digital economy, and a thriving SMB scene that runs on hard work and word of mouth. From solicitors around Park Square to personal trainers in Headingley, from accountants in Chapel Allerton to cleaning firms covering Roundhay &mdash; the businesses here don't mess about.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              Neither do we. We build AI voice agents, chatbots, and workflow automation that catch the calls you're missing, convert the website visitors you're losing, and handle the admin that eats your evenings.
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
              What We Build for Leeds Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services that help professional services firms, tradespeople, and growing SMBs operate like businesses twice their size.
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
                In a professional services city like Leeds, your phone manner matters. Our AI voice agents answer calls in a natural, professional voice &mdash; handling enquiries, booking consultations, and capturing details. Perfect for law firms that can't take calls during client meetings or trades firms that can't answer mid-job.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Every call answered. Every lead captured. Every time.
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
                Leeds' growing digital economy means your customers are researching online before they pick up the phone. Our AI chatbots engage them on your website instantly &mdash; answering their questions, qualifying their needs, and booking them in. Works just as well at 11pm as it does at 11am.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Turn your website into your hardest-working salesperson.
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
                Whether you're running a consultancy in the city centre or a service business in the suburbs, the admin is the same: quotes, follow-ups, invoices, and the constant nagging feeling you've forgotten something. We connect your existing tools and automate the lot.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Professional operations. Without the professional overheads.
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
              Remote Delivery. Real Results.
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We're based in Hampshire, not Leeds &mdash; and we're completely transparent about that. But Leeds is a city that understands modern business. Remote working isn't a novelty here; it's standard practice. And AI automation works the same way &mdash; everything from the first conversation to ongoing support happens over video call, screen share, and good old-fashioned phone calls.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Our Leeds clients span professional services in the city centre, trades firms out towards Pudsey and Morley, and growing businesses across the whole Leeds City Region. The technology doesn't care about postcodes. What matters is that it answers your calls, books your appointments, and stops leads falling through the cracks.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              You deal directly with Andy &mdash; 30+ years in tech, no juniors, no account managers, no "we'll get back to you." If something needs sorting, it gets sorted. No fuss.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              Leeds businesses earn their reputation through results, not promises. We work the same way.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Work Smarter, Not Harder
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 15-minute chat. No pressure, no jargon &mdash; just a straight conversation about whether AI automation makes sense for your Leeds business.
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
