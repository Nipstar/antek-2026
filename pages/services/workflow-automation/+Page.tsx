import { Button } from '../../../src/components/Button'
import { Card } from '../../../src/components/Card'
import { Icon } from '../../../src/components/Icon'

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
            <p className="text-sm text-mid-gray mb-8">By <a href="/about" className="underline hover:text-terracotta transition-colors">Andy Norman</a>, Founder | 30+ years in technology</p>
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
              The mad thing is, most of this work follows the exact same steps every single time. If something happens the same way every time, a computer can do it. Faster, more accurately, and without needing a tea break.
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

      {/* What It Won't Do */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            What Automation Won't Fix
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
            Most of our clients save 10-20 hours a week. That's two full working days back, every single week.
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
