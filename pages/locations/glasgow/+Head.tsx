export function Head() {
  return (
    <>
      <title>AI Automation Glasgow | Voice Agents &amp; Chatbots</title>
      <meta name="description" content="AI automation for Glasgow businesses. Voice agents that answer every call, chatbots that convert visitors & automation that kills the admin. Free consultation." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/glasgow" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Glasgow | Voice Agents & Chatbots" />
      <meta property="og:description" content="AI automation for Glasgow businesses. Voice agents that answer every call, chatbots that convert visitors & automation that kills the admin. Free consultation." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/glasgow" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Glasgow | Voice Agents & Chatbots" />
      <meta name="twitter:description" content="AI automation for Glasgow businesses. Voice agents that answer every call, chatbots that convert visitors & automation that kills the admin. Free consultation." />

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
                name: 'Glasgow',
                item: 'https://www.antekautomation.com/locations/glasgow',
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
            name: 'Antek Automation Glasgow',
            url: 'https://www.antekautomation.com/locations/glasgow',
            telephone: '+44-3330-389960',
            founder: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Glasgow',
              addressRegion: 'Scotland',
              addressCountry: 'GB',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 55.8642,
              longitude: -4.2518,
            },
            areaServed: {
              '@type': 'City',
              name: 'Glasgow',
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
                name: 'Can the AI handle Scottish accents?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Aye. Modern speech recognition handles Scottish accents — including Glaswegian — accurately. We test with real Glasgow callers during setup and fine-tune until it's spot-on. The AI's own voice is configurable too.",
                },
              },
              {
                '@type': 'Question',
                name: 'Do you cover all of Greater Glasgow?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes — Glasgow, Paisley, East Kilbride, Clydebank, Rutherglen, and the surrounding areas. The AI runs on cloud infrastructure, so it works identically anywhere.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why use an English agency for my Scottish business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Fair question. Because AI doesn't care about borders — it cares about being built properly. You get the same quality at a competitive price, direct access to the founder, and support that's a phone call away. No George Square office rent on your invoice.",
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can you get things set up?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Most voice agents and chatbots are live within 5-7 working days. Workflow automation typically 1-2 weeks depending on complexity. All done remotely over video call — nae need to block out your diary.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
