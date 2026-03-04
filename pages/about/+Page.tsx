import { Button } from '../../src/components/Button';

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm-beige border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6">
            About Antek Automation
          </h1>
          <p className="text-lg md:text-xl text-mid-gray max-w-2xl">
            AI automation built by someone who's spent 30+ years solving technology problems for businesses.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="border-3 border-charcoal shadow-brutal bg-white p-10 md:p-14">
            <h2 className="font-black text-2xl md:text-3xl uppercase tracking-tight-lg text-charcoal mb-6">
              Meet the Founder
            </h2>
            <h3 className="font-black text-xl uppercase text-charcoal mb-2">Andy Norman</h3>
            <p className="text-sm font-bold uppercase text-terracotta mb-6">Founder &amp; Director</p>
            <div className="space-y-4 text-mid-gray leading-relaxed">
              <p>
                With over 30 years in technology, Andy founded Antek Automation to help UK businesses
                stop losing customers to missed calls, slow responses, and manual admin.
              </p>
              <p>
                Antek is a Certified Retell AI Partner, building voice agents, chatbots, and workflow
                automation that work 24/7 so business owners can focus on what they do best.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://www.linkedin.com/in/andy-norman-ab78443a1"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm text-charcoal hover:text-terracotta transition-colors underline"
              >
                Connect on LinkedIn &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company */}
      <section className="bg-soft-sage border-t-3 border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-2xl md:text-3xl uppercase tracking-tight-lg text-charcoal mb-10">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-3 border-charcoal shadow-brutal-sm bg-white p-8">
              <h3 className="font-black text-lg uppercase text-charcoal mb-3">AI Voice Agents</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Phone agents that answer calls, take bookings, and handle customer questions 24/7.
              </p>
            </div>
            <div className="border-3 border-charcoal shadow-brutal-sm bg-white p-8">
              <h3 className="font-black text-lg uppercase text-charcoal mb-3">AI Chatbots</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Website chat that qualifies leads, answers FAQs, and books appointments instantly.
              </p>
            </div>
            <div className="border-3 border-charcoal shadow-brutal-sm bg-white p-8">
              <h3 className="font-black text-lg uppercase text-charcoal mb-3">Workflow Automation</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Connect your tools and eliminate repetitive tasks. From scheduling to invoicing.
              </p>
            </div>
          </div>

          <div className="mt-12 border-3 border-charcoal shadow-brutal-sm bg-white p-8">
            <h3 className="font-black text-lg uppercase text-charcoal mb-4">Company Details</h3>
            <ul className="space-y-2 text-mid-gray text-sm">
              <li><span className="font-bold text-charcoal">Headquarters:</span> Chantry House, 38 Chantry Way, Andover, Hampshire, SP10 1LZ</li>
              <li><span className="font-bold text-charcoal">Phone:</span> 03330 389960</li>
              <li><span className="font-bold text-charcoal">Email:</span> hello@antekautomation.com</li>
              <li><span className="font-bold text-charcoal">Partnership:</span> Certified Retell AI Partner</li>
              <li><span className="font-bold text-charcoal">Membership:</span> Federation of Small Businesses (FSB)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal border-t-3 border-charcoal py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-off-white mb-6">
            Ready to Automate?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Book a free 30-minute call. We'll look at where AI can save you time and win you more business.
          </p>
          <a href="/contact">
            <Button variant="primary">Book Free Call &rarr;</Button>
          </a>
        </div>
      </section>
    </>
  );
}
