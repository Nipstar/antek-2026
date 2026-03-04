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
              AI AUTOMATION &bull; GLASGOW
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Glasgow Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Glasgow is Scotland's commercial engine &mdash; a city built on graft, straight-talking, and getting things done. Whether you're a joiner in the Southside, a lettings agent in the West End, or a dental practice in Finnieston, you know the score: miss a call, lose a job. Spend your evenings on admin, lose your sanity.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              We build AI that answers your phone, converts your website visitors, and automates the boring stuff &mdash; so you can focus on the work that actually pays. Delivered remotely from Hampshire, working just as well in Glasgow as it does anywhere in the UK.
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
              What We Build for Glasgow Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services that stop you losing money to missed calls, slow responses, and admin that never ends.
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
                Glasgow's trades and service sector is strong, but competition is fierce. When a customer calls and gets voicemail, they ring the next name on their list. Our AI voice agents answer every call &mdash; taking details, answering questions, and booking appointments in a natural voice. Round the clock, seven days a week.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                No more losing jobs because you were on another job.
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
                Scottish customers are canny &mdash; they compare, they research, and they make up their minds fast. Our AI chatbots engage visitors on your website the moment they arrive, answering questions and booking them in before they've had a chance to check your competitors.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                First to respond usually wins the job. This makes you first, every time.
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
                Running a service business in Glasgow means you're constantly juggling enquiries, quotes, bookings, and invoices. We connect the tools you're already using and automate the repetitive bits. New lead? Logged, acknowledged, and followed up &mdash; automatically.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Spend your time on the work, not the paperwork.
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
              Hampshire to Glasgow. Nae Bother.
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Aye, we're based in Hampshire. But AI doesn't care about geography &mdash; and neither does a good working relationship. Everything we build is set up, tested, and supported over video calls. Our Glasgow clients get the same service, the same turnaround, and the same results as businesses five miles down the road from us.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We've worked with Scottish businesses who were sceptical about working with someone south of the border. Fair enough &mdash; we get it. But once they see the AI answering their calls and booking their appointments while they're out on a job in Merchant City, the geography stops mattering pretty quickly.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Whether you're in the West End, the Southside, Partick, or out towards East Kilbride, the technology works the same. And you deal directly with Andy &mdash; no call centres, no runaround, no account managers who don't know your name.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              Glasgow businesses are straight-talking, and so are we. If AI automation isn't right for you, we'll say so. If it is, we'll build it properly and make sure it works.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Let's Talk Business
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 15-minute chat. No sales pitch, no jargon &mdash; just a straight conversation about whether AI automation makes sense for your Glasgow business.
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
