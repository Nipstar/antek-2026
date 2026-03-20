import { Button } from '../../../src/components/Button';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';

export default function Page() {
  return (
    <div className="bg-off-white">

      {/* ── HERO ── */}
      <section className="bg-warm-beige border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              GEO AUDIT &bull; AI SEARCH VISIBILITY
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              Your Customers Are Asking AI. Is It Recommending You?
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Right now, people are typing &ldquo;Who&rsquo;s the best plumber near me?&rdquo; into ChatGPT. They&rsquo;re asking Perplexity for recommendations. Google&rsquo;s showing AI-generated answers above the traditional results. If your business isn&rsquo;t in those answers, you&rsquo;re not ranking low &mdash; you&rsquo;re invisible. Completely absent from a channel that&rsquo;s capturing 25% of all search traffic in 2026.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              Our GEO Audit shows you exactly where you stand &mdash; and what to do about it. No jargon, no 50-page report. Just a clear, prioritised action plan.
            </p>
            <p className="text-sm text-mid-gray mb-8">By <a href="/about" className="underline hover:text-terracotta transition-colors">Andy Norman</a>, Founder | 30+ years in technology</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <a href="/contact">
                <Button variant="primary">Book Your Free AI Visibility Check</Button>
              </a>
              <a href="tel:03330389960">
                <Button variant="secondary">Call 0333 038 9960</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS GEO ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            What Is GEO?
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            GEO &mdash; Generative Engine Optimisation &mdash; is SEO&rsquo;s sharper sibling. While SEO gets you ranking in Google&rsquo;s blue links, GEO gets you cited in the AI-generated answers that are increasingly replacing those links.
          </p>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            When ChatGPT recommends a business, it doesn&rsquo;t scroll through search results. It pulls from content it trusts, understands, and can verify. Getting into that answer requires a different approach: clear content structure, proper schema markup, strong authority signals, and extractable statements AI can confidently cite.
          </p>
          <p className="text-lg text-charcoal leading-relaxed">
            Most small businesses haven&rsquo;t done any of this. Which is exactly why it&rsquo;s an opportunity right now.
          </p>
        </div>
      </section>

      {/* ── WHAT OUR GEO AUDIT COVERS ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              What Our GEO Audit Covers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card hover>
              <Icon letter="1" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                AI Visibility
              </h3>
              <p className="text-charcoal leading-relaxed">
                We test real prompts your customers would use across ChatGPT, Perplexity, Google AI Overviews and Claude. How often do you appear? How are you described?
              </p>
            </Card>

            <Card hover>
              <Icon letter="2" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Citation Readiness
              </h3>
              <p className="text-charcoal leading-relaxed">
                Can AI actually quote your content? We check for clear statements, attributed data, and extractable insights.
              </p>
            </Card>

            <Card hover>
              <Icon letter="3" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Technical Setup
              </h3>
              <p className="text-charcoal leading-relaxed">
                Schema markup, robots.txt, llms.txt, site speed, mobile-readiness, structured data.
              </p>
            </Card>

            <Card hover>
              <Icon letter="4" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Content Structure
              </h3>
              <p className="text-charcoal leading-relaxed">
                Does your site answer questions directly? FAQ coverage, heading hierarchy, answer density.
              </p>
            </Card>

            <Card hover>
              <Icon letter="5" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Authority Signals
              </h3>
              <p className="text-charcoal leading-relaxed">
                NAP consistency, directory listings, review profiles, brand mentions across the web.
              </p>
            </Card>

            <Card hover>
              <Icon letter="6" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Competitor Gaps
              </h3>
              <p className="text-charcoal leading-relaxed">
                Where competitors are getting cited and you&rsquo;re not. Which prompts they&rsquo;re winning.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Quick Check */}
            <Card>
              <div className="text-center mb-6">
                <h3 className="font-black text-2xl uppercase text-charcoal mb-2">Quick Check</h3>
                <p className="font-black text-5xl text-terracotta">&pound;247</p>
              </div>
              <ul className="space-y-3 text-charcoal mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>AI visibility test across 4 platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>10 real customer prompts tested</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Citation readiness score</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Top 5 priorities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Loom video walkthrough + 1-page PDF</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Delivered in 3 working days</span>
                </li>
              </ul>
              <a href="/contact">
                <Button variant="secondary" className="w-full">Get Started</Button>
              </a>
            </Card>

            {/* Full Audit */}
            <Card>
              <div className="border-3 border-terracotta bg-peach px-4 py-1 inline-block mb-4">
                <span className="font-black uppercase text-sm text-charcoal">Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="font-black text-2xl uppercase text-charcoal mb-2">Full Audit</h3>
                <p className="font-black text-5xl text-terracotta">&pound;497</p>
              </div>
              <ul className="space-y-3 text-charcoal mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Everything in Quick Check</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Full technical crawlability review</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Schema audit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Content structure analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>3 competitor benchmarks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>30+ test prompts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Effort/impact action plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>PDF report + 30-min video walkthrough</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Delivered in 5&ndash;7 working days</span>
                </li>
              </ul>
              <a href="/contact">
                <Button variant="primary" className="w-full">Get Started</Button>
              </a>
            </Card>

            {/* Audit + Fix */}
            <Card>
              <div className="text-center mb-6">
                <h3 className="font-black text-2xl uppercase text-charcoal mb-2">Audit + Fix</h3>
                <p className="font-black text-5xl text-terracotta">&pound;997</p>
              </div>
              <ul className="space-y-3 text-charcoal mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Full Audit included</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>3 weeks hands-on implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Schema deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Content restructuring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>llms.txt setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Directory submissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Re-test to measure improvement</span>
                </li>
              </ul>
              <a href="/contact">
                <Button variant="secondary" className="w-full">Get Started</Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* ── MONTHLY RETAINER ── */}
      <section className="border-y-3 border-charcoal py-16 md:py-20 bg-peach">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-6">
            Monthly GEO Retainer
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-4">
            From <span className="font-black">&pound;247/month</span>. Rolling monthly after first 3 months.
          </p>
          <p className="text-lg text-charcoal leading-relaxed">
            Includes: monthly AI citation monitoring, content optimisation, schema maintenance, monthly report, quarterly strategy call.
          </p>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Who This Is For
          </h2>
          <ul className="space-y-4 text-lg text-charcoal leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-terracotta font-black text-xl mt-0.5">&bull;</span>
              <span>Trades businesses</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-terracotta font-black text-xl mt-0.5">&bull;</span>
              <span>Professional services</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-terracotta font-black text-xl mt-0.5">&bull;</span>
              <span>Local businesses with defined service areas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-terracotta font-black text-xl mt-0.5">&bull;</span>
              <span>MSPs and IT companies</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-terracotta font-black text-xl mt-0.5">&bull;</span>
              <span>Any SME/SMB that relies on being found online</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Why Us?
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            We&rsquo;re not an SEO agency sticking &ldquo;AI optimisation&rdquo; on the menu because it&rsquo;s trendy. We build AI voice agents, chatbots and automation workflows every single day. We understand how AI systems retrieve, evaluate and cite content because we work with the same technology stack.
          </p>
          <p className="text-lg text-charcoal leading-relaxed">
            Based in Hampshire. UK-wide. 30+ years in service business technology.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What is a GEO audit?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                A GEO audit assesses how visible your business is in AI-generated search results from ChatGPT, Perplexity, Google AI Overviews and Claude. It evaluates your technical setup, content structure, authority signals and citation readiness, then provides a prioritised action plan.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How is GEO different from SEO?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                SEO focuses on ranking in Google&rsquo;s traditional results. GEO focuses on getting cited in AI-generated answers. AI engines prioritise content clarity, structured data and extractable statements over keyword density and backlink volume.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How long does a GEO audit take?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Quick Check: 3 working days. Full Audit: 5&ndash;7 working days. Audit + Fix: 3&ndash;4 weeks including implementation.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Which AI platforms do you test?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                ChatGPT (including ChatGPT Search), Perplexity, Google AI Overviews, Claude and Gemini. We use real prompts your customers would actually type.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do I need GEO if I already rank well on Google?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. Many businesses rank well in Google&rsquo;s blue links but are completely absent from AI-generated answers. GEO and SEO complement each other, but they&rsquo;re different disciplines.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What size business is this for?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                We&rsquo;ve priced this for small businesses and SMBs &mdash; sole traders through to companies with up to 50 staff. If you&rsquo;re spending money on Google Ads or SEO but haven&rsquo;t thought about AI search yet, this is for you.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Find Out If AI&rsquo;s Recommending You (Or Just Your Competitors)
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 15-minute AI visibility check. We&rsquo;ll run your business through ChatGPT and Perplexity live on the call. No pitch, no obligation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <a href="/contact">
              <Button variant="primary">Book Your Free AI Visibility Check</Button>
            </a>
            <a href="tel:03330389960">
              <Button variant="secondary">Call 0333 038 9960</Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
