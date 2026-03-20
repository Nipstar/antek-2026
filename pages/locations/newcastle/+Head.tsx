export function Head() {
  return (
    <>
      <title>AI Automation Newcastle | Voice Agents &amp; Chatbots</title>
      <meta name="description" content="AI automation for Newcastle businesses. Never miss a call from Jesmond to Gateshead. Voice agents, chatbots & workflow automation. Free consultation." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/newcastle" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Newcastle | Voice Agents & Chatbots" />
      <meta property="og:description" content="AI automation for Newcastle businesses. Never miss a call from Jesmond to Gateshead. Voice agents, chatbots & workflow automation. Free consultation." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/newcastle" />
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
                name: 'Newcastle',
                item: 'https://www.antekautomation.com/locations/newcastle',
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
            name: 'Antek Automation Newcastle',
            url: 'https://www.antekautomation.com/locations/newcastle',
            telephone: '+44-3330-389960',
            founder: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Newcastle upon Tyne',
              addressRegion: 'Tyne and Wear',
              addressCountry: 'GB',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 54.9783,
              longitude: -1.6174,
            },
            areaServed: {
              '@type': 'City',
              name: 'Newcastle upon Tyne',
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
                name: 'Can the AI handle Geordie accents?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes, pet. Modern speech recognition handles Geordie and North East accents accurately — we test with real Newcastle callers during setup. The AI's own voice is configurable too, so it matches the tone of your business.",
                },
              },
              {
                '@type': 'Question',
                name: 'Do you cover Gateshead, Sunderland, and Durham too?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes — Newcastle, Gateshead, Sunderland, Durham, North and South Tyneside, and Northumberland. The AI runs on cloud infrastructure, so it works identically regardless of postcode.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why use a southern agency for my North East business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Because AI doesn't care about the North-South divide — it cares about being built properly. You get the same quality at better value, direct access to the founder, and support that's a phone call away. No Grey Street office rent baked into your invoice. Newcastle businesses value fair pricing and straight talking — that's exactly what you get.",
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can you get my AI live?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Most voice agents and chatbots are live within 5-7 working days. Workflow automation typically 1-2 weeks depending on how many tools we're connecting. Everything is done remotely over video call — nee need to clear your diary.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
