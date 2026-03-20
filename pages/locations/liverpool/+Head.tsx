export function Head() {
  return (
    <>
      <title>AI Automation Liverpool | Voice Agents &amp; Chatbots</title>
      <meta name="description" content="AI voice agents, chatbots & workflow automation for Liverpool businesses. From Dale Street to the Baltic Triangle, we catch the calls you miss. Free consultation." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/liverpool" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Liverpool | Voice Agents & Chatbots" />
      <meta property="og:description" content="AI voice agents, chatbots & workflow automation for Liverpool businesses. From Dale Street to the Baltic Triangle, we catch the calls you miss. Free consultation." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/liverpool" />
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
                name: 'Liverpool',
                item: 'https://www.antekautomation.com/locations/liverpool',
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
            name: 'Antek Automation Liverpool',
            url: 'https://www.antekautomation.com/locations/liverpool',
            telephone: '+44-3330-389960',
            founder: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Liverpool',
              addressRegion: 'Merseyside',
              addressCountry: 'GB',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 53.4084,
              longitude: -2.9916,
            },
            areaServed: {
              '@type': 'City',
              name: 'Liverpool',
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
                name: 'Can the AI handle Scouse accents?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes. Modern speech recognition handles regional accents well — including Scouse. We test with real Liverpool callers during setup and tweak until it's spot-on. The AI's own voice is configurable too, so it matches the tone of your business.",
                },
              },
              {
                '@type': 'Question',
                name: 'Do you cover all of Merseyside?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes — Liverpool, Wirral, Sefton, Knowsley, St Helens, and Halton. The AI runs on cloud infrastructure, so it works identically regardless of postcode.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why use a Hampshire agency for my Liverpool business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Because AI doesn't need a local postcode — it needs someone who builds it properly. You get the same technology at a lower price point, direct access to the founder, and support that's a phone call away. No Bold Street office rent baked into your invoice.",
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can you get my AI live?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Most voice agents and chatbots are live within 5-7 working days. Workflow automation typically takes 1-2 weeks depending on how many tools we're connecting. Everything is done remotely — no need to clear your diary.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
