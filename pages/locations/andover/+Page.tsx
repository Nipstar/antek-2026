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
              AI AUTOMATION &bull; ANDOVER
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation in Andover &mdash; Built by a Local
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Andy here. I'm based in Andover &mdash; have been for years. I've got 30+ years in tech, and I started Antek Automation because I was tired of watching local businesses lose work to problems that technology solved ages ago.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              If you run a service business in Andover &mdash; whether you're based near the Chantry Centre, out on the industrial estate, or anywhere in between &mdash; I build AI voice agents, chatbots, and workflow automation that stop you losing leads and wasting time on admin.
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
              What I Build for Andover Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services that solve the problems I hear about every week from businesses right here in town.
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
                You're on a job, hands covered in whatever, phone buzzing in your pocket. By the time you call back, they've already rung someone else. My AI voice agents answer your calls in a natural, human-sounding voice &mdash; taking messages, answering questions, and booking appointments 24/7.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Every missed call is a missed job. Let's fix that.
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
                Your website gets visitors at all hours. Without a chatbot, they look around, maybe fill in a form, probably just leave. My AI chatbots engage visitors instantly &mdash; answering questions and booking appointments whether it's lunchtime or midnight.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Stop losing website visitors. Start converting them.
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
                Every evening spent updating spreadsheets, sending follow-up emails, and chasing invoices is an evening you don't get back. I connect your existing tools and automate the repetitive tasks that eat your time.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Your business runs smoother. You get your evenings back.
              </p>
              <a href="/services/workflow-automation">
                <Button variant="primary" className="w-full">Learn More</Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* ── LOCAL CREDIBILITY ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              Andover Born and Bred (Well, Almost)
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              I've been in Andover long enough to know the difference between the town centre on a Saturday and the ghost town it becomes by 6pm. I know the industrial estate, I know the businesses that keep this town running, and I know what it's like trying to grow a service business here without a massive marketing budget.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We're already ranking for searches like "AI automation company Andover," "AI automation for small business Andover," and "AI chatbot services Andover." That's not an accident &mdash; it's because I'm genuinely here, genuinely building this, and genuinely invested in making it work for local businesses.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              The kettle's always on. If you want to have a chat about what AI could do for your business, I'm happy to meet up locally or jump on a video call. No sales pitch, no jargon &mdash; just a straight conversation about whether this makes sense for you.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              And if you want to see the broader <a href="/locations/hampshire" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Hampshire</a> picture, we cover the whole county too.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Let's Have a Chat
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            15 minutes. No obligation. Just a conversation about your business and whether AI automation could actually help. The kettle's always on.
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
