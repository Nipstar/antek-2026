import { Button } from '../../../src/components/Button'
import { Card } from '../../../src/components/Card'
import { Icon } from '../../../src/components/Icon'

export default function Page() {
  const openChatbot = () => {
    window.dispatchEvent(new Event('openChatbot'))
  }

  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI CHATBOTS | 24/7 LEAD CAPTURE | HAMPSHIRE, UK
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              A Website Chatbot That Actually Knows Your Business
            </h1>
            <p className="text-xl text-charcoal leading-normal mb-4">
              Not a generic FAQ widget. An AI trained on your services, prices, and availability that captures leads and books appointments around the clock.
            </p>
            <p className="text-sm text-mid-gray mb-8">By <a href="/about" className="underline hover:text-terracotta transition-colors">Andy Norman</a>, Founder | 30+ years in technology | Last updated March 2026</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <Button variant="primary" onClick={openChatbot}>
                Try the Chatbot Demo
              </Button>
              <a href="/contact">
                <Button variant="secondary">
                  Get Your Chatbot
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
            Your Website Is Open 24/7. Your Team Isn't.
          </h2>
          <div className="space-y-6 text-lg text-charcoal leading-normal">
            <p>
              Picture this. It's 10pm on a Tuesday. Someone's sitting on their sofa, phone in hand, looking for exactly the service you offer. They land on your website. They've got questions -- how much does it cost? Do you cover their area? Can they book for next week?
            </p>
            <p>
              There's no one there to answer. No live chat. No quick reply. Just a contact form that feels like shouting into a void. So they close the tab and try the next result on Google.
            </p>
            <div className="bg-peach border-3 border-charcoal p-6">
              <p className="font-black text-charcoal text-xl mb-2">
                You paid for that click. They were ready to buy. And they left because nobody was there.
              </p>
              <p className="text-charcoal">
                This happens dozens of times a week on most business websites. Evenings, weekends, bank holidays -- your busiest traffic often arrives when your team is offline.
              </p>
            </div>
            <p>
              A chatbot that actually knows your business changes the whole equation. It's there at 10pm, at 6am on a Sunday, on Christmas Day. It answers questions, captures details, and books them in. While you sleep.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-6 text-center">
            What Your Chatbot Does
          </h2>
          <p className="text-lg text-charcoal text-center mb-16 max-w-3xl mx-auto">
            Not just any chatbot. One that's trained on your business, speaks in your tone, and actually helps people.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card hover>
              <Icon letter="A" size="lg" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-6 mb-3">
                Answers Questions Instantly
              </h3>
              <p className="text-charcoal leading-normal">
                Pricing, availability, service areas, opening hours, what you do, what you don't do. Trained on your actual business info, not generic waffle.
              </p>
            </Card>

            <Card hover>
              <Icon letter="L" size="lg" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-6 mb-3">
                Captures Lead Details
              </h3>
              <p className="text-charcoal leading-normal">
                Name, email, phone number, what they need. Collected naturally through conversation, not through a boring form they'll abandon halfway through.
              </p>
            </Card>

            <Card hover>
              <Icon letter="B" size="lg" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-6 mb-3">
                Books Appointments
              </h3>
              <p className="text-charcoal leading-normal">
                Connected to your calendar, so visitors can book a time slot that actually works. Confirmation sent automatically. No back-and-forth emails needed.
              </p>
            </Card>

            <Card hover>
              <Icon letter="Q" size="lg" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-6 mb-3">
                Qualifies Leads
              </h3>
              <p className="text-charcoal leading-normal">
                Asks the right questions to work out if someone's a good fit. Budget, timeline, location. You get warm leads, not tyre-kickers.
              </p>
            </Card>

            <Card hover>
              <Icon letter="N" size="lg" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-6 mb-3">
                Sends You Notifications
              </h3>
              <p className="text-charcoal leading-normal">
                Every lead gets pinged straight to your inbox, phone, or CRM. You'll know within seconds that someone's interested, even at 3am.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What It Won't Do */}
      <section className="bg-warm-beige border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Keeping It Real
          </h2>
          <p className="text-lg text-charcoal leading-normal mb-10">
            We'd rather be upfront than oversell you. Here's what a chatbot can and can't do:
          </p>

          <div className="space-y-8">
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                It Handles About 80% of Conversations Perfectly
              </h3>
              <p className="text-charcoal leading-normal">
                The common questions, the lead capture, the appointment booking -- it nails that. The other 20%? Unusual requests, complex complaints, edge cases. For those, it takes details and flags them for you. It won't make things up or pretend it knows something it doesn't.
              </p>
            </Card>

            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                It's Not a Replacement for Human Connection
              </h3>
              <p className="text-charcoal leading-normal">
                Some customers want to talk to a real person. That's fine. Your chatbot can hand over to you during office hours or collect details for a callback. It's a first responder, not a replacement for your team.
              </p>
            </Card>

            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                It's Only as Good as the Information You Give It
              </h3>
              <p className="text-charcoal leading-normal">
                We spend proper time training it on your business. If your pricing changes or you add new services, we update it. But if you don't tell us, it can't know. Simple as that.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How much does an AI chatbot cost?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Setup starts from £149, with monthly plans from £57/month. The exact pricing depends on features, integrations, and complexity. We offer a free consultation to scope your needs and give you a clear quote — no hidden fees.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Can it integrate with my CRM or booking system?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. It connects to HubSpot, Google Calendar, Calendly, and most tools via API or webhook. Lead details flow straight into your existing systems without any manual copying.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What percentage of conversations can it handle?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                About 80% of conversations are handled autonomously — common questions, lead capture, appointment booking. The other 20% (complex queries, complaints, edge cases) get flagged for your team to follow up.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Will it sound like a generic bot?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                No. It's trained on your business — your services, pricing, availability, and tone of voice. It answers like someone who actually works there, not a generic FAQ widget.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Can visitors still talk to a real person?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. During office hours the chatbot can hand over to your team for a live conversation. Outside hours it captures the visitor's details so you can call them back.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-off-white mb-6">
            See It in Action
          </h2>
          <p className="text-lg text-off-white leading-normal mb-4">
            Hit the button below to chat with our demo bot. Ask it questions, try to trip it up, see how it handles a real conversation. That's the kind of thing we'll build for your business.
          </p>
          <p className="text-off-white leading-normal mb-10">
            Or if you've seen enough and want to get cracking, book a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="text-lg px-10" onClick={openChatbot}>
              Chat with the Demo Bot
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
            <a href="/services/ai-voice-assistants" className="block">
              <Card hover>
                <Icon letter="V" size="md" />
                <h4 className="font-black text-lg uppercase text-charcoal mt-4 mb-2">AI Voice Agents</h4>
                <p className="text-charcoal text-sm leading-normal">
                  Never miss a call again. AI that answers the phone, books appointments, and sounds like a real person.
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
    </div>
  )
}
