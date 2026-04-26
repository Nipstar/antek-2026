import { Button } from '../../../src/components/Button'
import { Card } from '../../../src/components/Card'
import { Icon } from '../../../src/components/Icon'
import { QuickRecap } from '../../../src/components/QuickRecap'
import { ResourcesCompliance } from '../../../src/components/ResourcesCompliance'

export default function Page() {
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              WORKFLOW AUTOMATION | SAVE 10-20 HOURS A WEEK | HAMPSHIRE, UK
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              Stop Doing the Same Admin Tasks Every Day. Automate Them.
            </h1>
            <p className="text-xl text-charcoal leading-normal mb-4">
              We connect your tools, automate your processes, and give you back the hours you're currently wasting on repetitive work. Built with n8n -- no lock-in, you own everything.
            </p>
            <p className="text-sm text-mid-gray mb-8">By <a href="/about" className="underline hover:text-terracotta transition-colors">Andy Norman</a>, Founder | 30+ years in technology | Last updated March 2026</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <a href="/contact">
                <Button variant="primary">
                  Book an Automation Audit
                </Button>
              </a>
              <a href="#what-we-automate">
                <Button variant="secondary">
                  See What We Automate
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <QuickRecap items={[
        'We automate your repetitive admin using n8n (open-source) — you own the workflows outright, no vendor lock-in',
        'For service businesses spending 10+ hours/week on manual data entry, follow-ups, and CRM updates',
        'From £250 one-off for a starter workflow — <a href="/pricing#workflow-automation" class="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">see full pricing</a>',
        'Simple workflows live in 1–2 days; complex multi-system builds take 1–2 weeks',
        'Discovery audit first — we won\'t automate processes we don\'t fully understand',
      ]} />

      {/* Problem Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Your Evening Shouldn't Be Spent Doing Admin
          </h2>
          <div className="space-y-6 text-lg text-charcoal leading-normal">
            <p>
              You finish the actual work at 5. The stuff that makes money. The client calls, the projects, the creative problem-solving. That's done.
            </p>
            <p>
              Then the admin starts. Updating the CRM. Sending follow-up emails. Chasing invoices. Copying data from one spreadsheet to another. Checking who needs a reminder. Logging things in three different systems because none of them talk to each other.
            </p>
            <div className="bg-peach border-3 border-charcoal p-6">
              <p className="font-black text-charcoal text-xl mb-2">
                You didn't start a business to do data entry until 8pm.
              </p>
              <p className="text-charcoal">
                But that's where most small business owners end up. Buried in admin that could be done by a machine in seconds. While your kids are in the other room wondering when you're going to stop working.
              </p>
            </div>
            <p>
              Importantly, most of this work follows the exact same steps every single time. If something happens the same way every time, a computer can do it. Faster, more accurately, and without needing a tea break.
            </p>
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section id="what-we-automate" className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-6 text-center">
            Stuff You're Probably Doing Manually Right Now
          </h2>
          <p className="text-lg text-charcoal text-center mb-16 max-w-3xl mx-auto">
            Sound familiar? Every one of these can be fully automated. Set it up once, never think about it again.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card hover>
              <Icon letter="L" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Lead Follow-Up
              </h3>
              <p className="text-charcoal leading-normal mb-4">
                Someone fills in your contact form. You get a notification. You add them to your CRM. You send a welcome email. You set a reminder to follow up in 3 days.
              </p>
              <div className="bg-soft-sage border-3 border-charcoal p-4">
                <p className="font-black text-charcoal text-sm uppercase mb-1">Automated version:</p>
                <p className="text-charcoal text-sm">
                  All of that happens instantly, the moment they hit "send." CRM updated, email sent, follow-up scheduled. You just get a notification telling you it's done.
                </p>
              </div>
            </Card>

            <Card hover>
              <Icon letter="I" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Invoicing and Chasing
              </h3>
              <p className="text-charcoal leading-normal mb-4">
                Job done? Create an invoice in Xero. Send it to the client. Wait. Chase after 7 days. Chase again after 14 days. Mark as paid when money arrives.
              </p>
              <div className="bg-soft-sage border-3 border-charcoal p-4">
                <p className="font-black text-charcoal text-sm uppercase mb-1">Automated version:</p>
                <p className="text-charcoal text-sm">
                  Mark a job as complete in your system, and the invoice generates, sends, chases, and reconciles itself. You only hear about it if there's a problem.
                </p>
              </div>
            </Card>

            <Card hover>
              <Icon letter="R" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Appointment Reminders
              </h3>
              <p className="text-charcoal leading-normal mb-4">
                Client booked for Thursday. Send them a reminder on Wednesday. Another one Thursday morning. If they don't show, send a rebook link.
              </p>
              <div className="bg-soft-sage border-3 border-charcoal p-4">
                <p className="font-black text-charcoal text-sm uppercase mb-1">Automated version:</p>
                <p className="text-charcoal text-sm">
                  Reminders go out automatically at the intervals you choose. No-show follow-up handles itself. You just focus on the people who turn up.
                </p>
              </div>
            </Card>

            <Card hover>
              <Icon letter="D" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Data Syncing Between Tools
              </h3>
              <p className="text-charcoal leading-normal mb-4">
                Update a client's details in your CRM. Then update them in your email marketing tool. Then your project management tool. Then your accounting software.
              </p>
              <div className="bg-soft-sage border-3 border-charcoal p-4">
                <p className="font-black text-charcoal text-sm uppercase mb-1">Automated version:</p>
                <p className="text-charcoal text-sm">
                  Change it in one place, and it updates everywhere else automatically. One source of truth, zero copy-pasting.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why n8n */}
      <section className="bg-warm-beige border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Built on n8n -- And Why That Matters to You
          </h2>
          <p className="text-lg text-charcoal leading-normal mb-10">
            You might be thinking "why not just use Zapier?" Fair question. Here's why we use n8n instead:
          </p>

          <div className="space-y-8">
            <Card>
              <Icon letter="O" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-3">
                It's Open Source -- You Own Everything
              </h3>
              <p className="text-charcoal leading-normal">
                With Zapier, you rent your automations. Stop paying, they stop working. With n8n, we build it, you own it. Your workflows, your data, your infrastructure. No vendor lock-in, ever.
              </p>
            </Card>

            <Card>
              <Icon letter="C" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-3">
                It Connects to Pretty Much Everything
              </h3>
              <p className="text-charcoal leading-normal">
                400+ integrations out of the box. Google Workspace, Xero, Stripe, HubSpot, Slack, WhatsApp, Shopify -- you name it. And if something doesn't have a built-in connector, we can hook into any API or webhook.
              </p>
            </Card>

            <Card>
              <Icon letter="P" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-3">
                No Per-Task Pricing That Catches You Out
              </h3>
              <p className="text-charcoal leading-normal">
                Zapier charges per task. The more you automate, the more you pay. n8n doesn't work like that. Whether you run 100 tasks or 100,000, the cost stays the same. Scale without worrying about surprise bills.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-4">
            How Does n8n Compare to Zapier and Make?
          </h2>
          <p className="text-lg text-charcoal leading-normal mb-10">
            n8n is an open-source workflow automation platform that gives you full ownership of your automations without per-task pricing. Unlike Zapier and Make, your workflows keep running even if you stop paying a subscription — because you own them. Here's how the three platforms compare for a typical small business.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-3 border-charcoal text-left text-sm">
              <thead>
                <tr className="bg-charcoal text-off-white">
                  <th className="p-4 font-black uppercase border-r-3 border-off-white/20"></th>
                  <th className="p-4 font-black uppercase border-r-3 border-off-white/20">n8n</th>
                  <th className="p-4 font-black uppercase border-r-3 border-off-white/20">Zapier</th>
                  <th className="p-4 font-black uppercase">Make</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t-3 border-charcoal bg-white">
                  <td className="p-4 font-bold text-charcoal border-r-3 border-charcoal">Ownership</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">You own everything</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">Rented (stop paying, it stops)</td>
                  <td className="p-4 text-charcoal">Rented</td>
                </tr>
                <tr className="border-t-3 border-charcoal bg-peach">
                  <td className="p-4 font-bold text-charcoal border-r-3 border-charcoal">Pricing Model</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">Flat fee, unlimited tasks</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">Per task (costs grow with usage)</td>
                  <td className="p-4 text-charcoal">Per operation (cheaper than Zapier)</td>
                </tr>
                <tr className="border-t-3 border-charcoal bg-white">
                  <td className="p-4 font-bold text-charcoal border-r-3 border-charcoal">Integrations</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">400+ built-in, any API/webhook</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">6,000+ built-in</td>
                  <td className="p-4 text-charcoal">1,800+ built-in</td>
                </tr>
                <tr className="border-t-3 border-charcoal bg-peach">
                  <td className="p-4 font-bold text-charcoal border-r-3 border-charcoal">Complexity</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">Handles complex multi-step logic</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">Best for simple A-to-B automations</td>
                  <td className="p-4 text-charcoal">Good for moderate complexity</td>
                </tr>
                <tr className="border-t-3 border-charcoal bg-white">
                  <td className="p-4 font-bold text-charcoal border-r-3 border-charcoal">Self-Hostable</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">Yes (your server, your data)</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">No</td>
                  <td className="p-4 text-charcoal">No</td>
                </tr>
                <tr className="border-t-3 border-charcoal bg-peach">
                  <td className="p-4 font-bold text-charcoal border-r-3 border-charcoal">Best For</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">Businesses wanting ownership and scale</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">Quick, simple integrations</td>
                  <td className="p-4 text-charcoal">Budget-conscious teams</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What It Won't Do */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            What Are the Limits of Workflow Automation?
          </h2>
          <div className="space-y-6 text-lg text-charcoal leading-normal">
            <p>
              We need to be straight with you about something. Automation is brilliant, but it's not a magic wand. If your process is broken, automating it just means you'll break things faster.
            </p>
            <div className="bg-peach border-3 border-charcoal p-6">
              <p className="font-black text-charcoal text-xl mb-2">
                That's why every project starts with an audit.
              </p>
              <p className="text-charcoal">
                We look at how things actually work in your business right now. What's working, what's not, and what would genuinely benefit from automation. Sometimes the answer is "fix the process first, then automate it." And we'll tell you that honestly, even if it means less work for us.
              </p>
            </div>
            <p>
              We've seen businesses try to automate chaos and end up with automated chaos. That's not what we do. We make sure the foundations are right before we build on top of them.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How much does workflow automation cost?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                From £250 one-off for a starter workflow. <a href="/pricing#workflow-automation" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">See full pricing</a> — exact cost depends on workflow count and complexity.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What's n8n and why do you use it instead of Zapier?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                n8n is open-source automation software. Unlike Zapier, you own your workflows — there's no per-task pricing and no vendor lock-in. If you stop working with us, your automations keep running. You're not renting them.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What tools can you connect?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                400+ integrations out of the box — Google Workspace, Xero, Stripe, HubSpot, Slack, WhatsApp, Shopify, and more. If a tool has an API or webhook, we can connect it.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How long does it take to set up automations?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Simple workflows take 1–2 days. Complex multi-step processes with multiple integrations take 1–2 weeks. Every project starts with an audit so we understand exactly what needs automating.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What if my current process is a mess?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                That's fine — and common. We audit your processes first and recommend fixes before automating anything. We won't automate chaos. If something needs fixing first, we'll tell you honestly.
              </div>
            </details>
          </div>
        </div>
      </section>

      <ResourcesCompliance links={[
        { text: 'n8n workflow automation (Wikipedia)', url: 'https://en.wikipedia.org/wiki/N8n', context: 'Open-source automation platform used for all Antek workflow builds' },
        { text: 'Webhook overview (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Webhook', context: 'Technical explanation of webhooks — the backbone of automation integrations' },
        { text: 'ICO data protection for businesses', url: 'https://ico.org.uk/for-organisations/guide-to-data-protection/', context: 'UK law on data handling within automated workflows' },
      ]} />

      {/* CTA Section */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-off-white mb-6">
            Book an Automation Audit
          </h2>
          <p className="text-lg text-off-white leading-normal mb-4">
            We'll spend 30 minutes on a call, look at your current processes, and tell you exactly where automation would save you the most time. No sales pitch, no pressure. If we think automation isn't right for you, we'll say so.
          </p>
          <p className="text-off-white leading-normal mb-10">
            Clients typically save 10–20 hours a week once automations are running — that's one to two full working days back, every week. Exact savings depend on the volume of manual work being replaced.
          </p>
          <a href="/contact">
            <Button variant="primary" className="text-lg px-10">
              Book Your Free Audit
            </Button>
          </a>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h3 className="font-black text-2xl uppercase tracking-tight-lg text-charcoal mb-8 text-center">
            Related Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/ai-receptionist" className="block">
              <Card hover>
                <Icon letter="R" size="md" />
                <h4 className="font-black text-lg uppercase text-charcoal mt-4 mb-2">AI Receptionist</h4>
                <p className="text-charcoal text-sm leading-normal">
                  Productised phone answering from &pound;97/month. Screens callers and books appointments 24/7.
                </p>
              </Card>
            </a>
            <a href="/services/ai-voice-assistants" className="block">
              <Card hover>
                <Icon letter="V" size="md" />
                <h4 className="font-black text-lg uppercase text-charcoal mt-4 mb-2">AI Voice Agents</h4>
                <p className="text-charcoal text-sm leading-normal">
                  Never miss a call again. AI that answers the phone, books appointments, and sounds like a real person.
                </p>
              </Card>
            </a>
            <a href="/services/ai-chatbots" className="block">
              <Card hover>
                <Icon letter="C" size="md" />
                <h4 className="font-black text-lg uppercase text-charcoal mt-4 mb-2">AI Chatbots</h4>
                <p className="text-charcoal text-sm leading-normal">
                  Capture leads on your website 24/7 with a chatbot trained on your business.
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
