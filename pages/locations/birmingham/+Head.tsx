export function Head() {
  return (
    <>
      <title>AI Automation Birmingham | Voice Agents, Chatbots &amp; Workflows</title>
      <meta name="description" content="AI automation services in Birmingham. Voice agents, chatbots & workflow automation for Birmingham businesses. UK-wide service from Antek Automation. Free consultation." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/birmingham" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Birmingham | Voice Agents, Chatbots & Workflows" />
      <meta property="og:description" content="AI automation services in Birmingham. Voice agents, chatbots & workflow automation for Birmingham businesses. UK-wide service from Antek Automation. Free consultation." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/birmingham" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Birmingham | Voice Agents, Chatbots & Workflows" />
      <meta name="twitter:description" content="AI automation services in Birmingham. Voice agents, chatbots & workflow automation for Birmingham businesses. UK-wide service from Antek Automation. Free consultation." />

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
                name: 'Birmingham',
                item: 'https://www.antekautomation.com/locations/birmingham',
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
            name: 'Antek Automation Birmingham',
            url: 'https://www.antekautomation.com/locations/birmingham',
            telephone: '+44-3330-389960',
            founder: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Birmingham',
              addressRegion: 'West Midlands',
              addressCountry: 'GB',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 52.4862,
              longitude: -1.8904,
            },
            areaServed: {
              '@type': 'City',
              name: 'Birmingham',
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
                name: 'Can the AI handle Birmingham accents and local dialect?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes. Modern speech recognition handles Brummie accents and Black Country dialect accurately — we test with real local callers during setup. The AI's own voice is configurable too, so it matches the tone and personality of your business.",
                },
              },
              {
                '@type': 'Question',
                name: 'Do you cover the whole West Midlands?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes — Birmingham, Solihull, Wolverhampton, Walsall, Dudley, Sandwell, and Coventry. The AI runs on cloud infrastructure, so it works identically regardless of location.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which Birmingham industries do you specialise in?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Construction and trades (14% of the local workforce), dental and medical, hospitality, cleaning, estate agents, legal, and professional services. If your business takes calls, books appointments, or sends invoices — we can automate it.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why use a Hampshire agency for my Birmingham business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Because AI doesn't need a local postcode — it needs someone who builds it properly. You get the same technology a Birmingham agency would charge double for, direct access to the founder (not a junior), and support that's a phone call away. No Brindleyplace office rent baked into your invoice.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
