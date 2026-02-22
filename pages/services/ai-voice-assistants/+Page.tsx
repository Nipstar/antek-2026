import { useState, lazy, Suspense } from 'react'
import { Button } from '../../../src/components/Button'
import { Card } from '../../../src/components/Card'
import { Icon } from '../../../src/components/Icon'

const VoiceChat = lazy(() =>
  import('../../../src/components/VoiceChat').then((m) => ({ default: m.VoiceChat }))
)

export default function Page() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false)

  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI VOICE AGENTS | 24/7 CALL ANSWERING | HAMPSHIRE, UK
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              An AI Receptionist That Actually Sounds Like a Real Person
            </h1>
            <p className="text-xl text-charcoal leading-normal mb-8">
              It answers every call. Books appointments. Qualifies leads. Sends you the details. Works 24/7, costs less than a part-time hire.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <Button variant="primary" onClick={() => setIsVoiceChatOpen(true)}>
                Try the Demo Now
              </Button>
              <a href="/contact">
                <Button variant="secondary">
                  Get Your Voice Agent
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            How Many Calls Did You Miss Last Week?
          </h2>
          <div className="space-y-6 text-lg text-charcoal leading-normal">
            <p>
              Be honest. You were on a job. In a meeting. Having dinner with your family. The phone rang, you couldn't get to it, and whoever was calling hung up and rang someone else.
            </p>
            <p>
              It happens to every business owner. You're busy doing the actual work, and the phone just keeps ringing. You can't answer it when you're elbow-deep in a project, mid-conversation with a client, or trying to have five minutes of peace.
            </p>
            <div className="bg-peach border-3 border-charcoal p-6">
              <p className="font-black text-charcoal text-xl mb-2">
                The average UK small business misses 30-50% of incoming calls.
              </p>
              <p className="text-charcoal">
                That's not a guess. That's real data. And every one of those missed calls is money walking out the door and straight to your competitor who picked up.
              </p>
            </div>
            <p>
              Voicemail? Nobody leaves voicemails anymore. They just call the next number on Google. You'll never even know they tried.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-6 text-center">
            Here's What Happens When Someone Rings You
          </h2>
          <p className="text-lg text-charcoal text-center mb-16 max-w-3xl mx-auto">
            From the moment the phone rings to the moment you get a summary in your pocket. The whole thing takes about two minutes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card hover>
              <div className="w-16 h-16 bg-terracotta text-off-white flex items-center justify-center font-black text-3xl border-3 border-charcoal shadow-brutal-sm mb-6">
                1
              </div>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                The Phone Rings
              </h3>
              <p className="text-charcoal leading-normal">
                Someone calls your business number. Your AI agent picks up within two rings. No hold music. No "press 1 for sales." Just a friendly, natural-sounding voice.
              </p>
            </Card>

            <Card hover>
              <div className="w-16 h-16 bg-terracotta text-off-white flex items-center justify-center font-black text-3xl border-3 border-charcoal shadow-brutal-sm mb-6">
                2
              </div>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                It Has a Proper Conversation
              </h3>
              <p className="text-charcoal leading-normal">
                The AI asks what they need, answers questions about your services, pricing, and availability. It's trained on your business, so it actually knows what it's talking about.
              </p>
            </Card>

            <Card hover>
              <div className="w-16 h-16 bg-terracotta text-off-white flex items-center justify-center font-black text-3xl border-3 border-charcoal shadow-brutal-sm mb-6">
                3
              </div>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                It Captures Their Details
              </h3>
              <p className="text-charcoal leading-normal">
                Name, number, email, what they need, when they need it. All collected naturally during the conversation, not through some robotic questionnaire.
              </p>
            </Card>

            <Card hover>
              <div className="w-16 h-16 bg-terracotta text-off-white flex items-center justify-center font-black text-3xl border-3 border-charcoal shadow-brutal-sm mb-6">
                4
              </div>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                It Books the Appointment
              </h3>
              <p className="text-charcoal leading-normal">
                Connected to your calendar, so it checks your real availability and books them in. They get a confirmation text or email straight away.
              </p>
            </Card>

            <Card hover>
              <div className="w-16 h-16 bg-terracotta text-off-white flex items-center justify-center font-black text-3xl border-3 border-charcoal shadow-brutal-sm mb-6">
                5
              </div>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                You Get a Summary
              </h3>
              <p className="text-charcoal leading-normal">
                Within seconds, you get a text or email with everything: who called, what they want, their contact details, and when they're booked in. Check it when you're ready.
              </p>
            </Card>

            <Card hover>
              <div className="w-16 h-16 bg-terracotta text-off-white flex items-center justify-center font-black text-3xl border-3 border-charcoal shadow-brutal-sm mb-6">
                6
              </div>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                Urgent? It Puts Them Through
              </h3>
              <p className="text-charcoal leading-normal">
                If something's genuinely urgent, or it's a high-value caller, the AI recognises that and transfers the call to your mobile straight away. You decide the rules.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What It Won't Do */}
      <section className="bg-warm-beige border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Let's Be Straight
          </h2>
          <p className="text-lg text-charcoal leading-normal mb-10">
            We're not going to pretend this is magic. It's brilliant technology, but it has limits. Here's what you should know:
          </p>

          <div className="space-y-8">
            <Card>
              <Icon letter="1" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-3">
                It's Not a Human
              </h3>
              <p className="text-charcoal leading-normal">
                About 1 in 20 callers will realise they're talking to AI. Most won't. But some will, and a few of them might prefer to speak to a real person. That's fine -- the AI can transfer them to you or take a message.
              </p>
            </Card>

            <Card>
              <Icon letter="2" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-3">
                It Can't Handle Truly Complex Issues
              </h3>
              <p className="text-charcoal leading-normal">
                If someone rings with a complicated complaint or a situation that needs real judgement, the AI will take their details and flag it for you. It's not going to try to blag its way through something it shouldn't.
              </p>
            </Card>

            <Card>
              <Icon letter="3" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-3">
                It Needs Setting Up Properly
              </h3>
              <p className="text-charcoal leading-normal">
                The quality depends on how well it's trained on your business. That's why we spend time getting your services, prices, FAQs, and processes right. Rubbish in, rubbish out. We don't do rubbish.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-off-white mb-6">
            Try It Right Now
          </h2>
          <p className="text-lg text-off-white leading-normal mb-4">
            Seriously. Hit the button below and have a chat with our demo agent. Ask it anything. See how natural it sounds. No signup, no credit card, no sales pitch. Just the tech, doing its thing.
          </p>
          <p className="text-off-white leading-normal mb-10">
            If you like what you hear, get in touch and we'll build one for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="text-lg px-10" onClick={() => setIsVoiceChatOpen(true)}>
              Talk to the AI Agent
            </Button>
            <a href="/contact">
              <Button variant="secondary" className="text-lg px-10">
                Book a Free Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h3 className="font-black text-2xl uppercase tracking-tight-lg text-charcoal mb-8 text-center">
            Related Services
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/services/ai-chatbots" className="block">
              <Card hover>
                <Icon letter="C" size="md" />
                <h4 className="font-black text-lg uppercase text-charcoal mt-4 mb-2">AI Chatbots</h4>
                <p className="text-charcoal text-sm leading-normal">
                  Capture leads on your website 24/7 with a chatbot trained on your business.
                </p>
              </Card>
            </a>
            <a href="/services/workflow-automation" className="block">
              <Card hover>
                <Icon letter="W" size="md" />
                <h4 className="font-black text-lg uppercase text-charcoal mt-4 mb-2">Workflow Automation</h4>
                <p className="text-charcoal text-sm leading-normal">
                  Automate the admin that's burying you. CRM updates, invoicing, follow-ups.
                </p>
              </Card>
            </a>
            <a href="/locations/hampshire" className="block">
              <Card hover>
                <Icon letter="H" size="md" />
                <h4 className="font-black text-lg uppercase text-charcoal mt-4 mb-2">Hampshire</h4>
                <p className="text-charcoal text-sm leading-normal">
                  AI automation services for businesses across Hampshire and the South Coast.
                </p>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Voice Chat Modal */}
      {isVoiceChatOpen && (
        <Suspense fallback={null}>
          <VoiceChat isOpen={isVoiceChatOpen} onClose={() => setIsVoiceChatOpen(false)} />
        </Suspense>
      )}
    </div>
  )
}
