export function Head() {
  return (
    <>
      <title>AI Automation London | Voice Agents &amp; Chatbots</title>
      <meta name="description" content="AI automation for London businesses. Voice agents, chatbots & workflow automation delivered remotely. Free consultation." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/london" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation London | Voice Agents & Chatbots" />
      <meta property="og:description" content="AI automation for London businesses. Voice agents, chatbots & workflow automation delivered remotely. Free consultation." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/london" />
      <meta property="og:type" content="website" />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.antekautomation.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Locations',
                item: 'https://www.antekautomation.com/locations',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'London',
                item: 'https://www.antekautomation.com/locations/london',
              },
            ],
          }),
        }}
      />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Antek Automation London',
            url: 'https://www.antekautomation.com/locations/london',
            telephone: '+44-3330-389960',
            founder: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'London',
              addressRegion: 'Greater London',
              addressCountry: 'GB',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 51.5074,
              longitude: -0.1278,
            },
            areaServed: {
              '@type': 'City',
              name: 'London',
            },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'h2', '.text-lg'],
            },
            makesOffer: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI Voice Agents',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI Chatbots',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Workflow Automation',
                },
              },
            ],
          }),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Why would I use a Hampshire agency instead of a London one?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Because ours works the same and costs less. You're not paying for a Shoreditch office, a 12-person \"innovation team\", or Friday drinks. You're paying for AI that answers your phone, books your appointments, and handles your admin. We deliver that from Hampshire at a fraction of the London rate, and you deal directly with the founder — not a junior account manager.",
                },
              },
              {
                '@type': 'Question',
                name: 'Will the AI voice agent sound right for London callers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes. We configure the voice, tone, and vocabulary to match your brand and your clientele. A Mayfair dental practice gets a different voice profile from a South London roofing company. We test with real scenarios before go-live and tweak until it's spot-on.",
                },
              },
              {
                '@type': 'Question',
                name: 'What types of London businesses do you work with?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Trades (plumbers, electricians, roofers, builders), dental and medical practices, cleaning companies, estate agents, accountants, solicitors, restaurants, salons, and fitness studios. If you take bookings, answer phone calls, or chase invoices — we can automate it.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do your prices compare to London AI agencies?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Significantly lower. London agencies typically charge £150–250/hr for the same services we deliver at a fixed project price. Our voice agents start from a one-off setup fee plus a monthly subscription — no hourly billing, no scope creep, no surprises.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
