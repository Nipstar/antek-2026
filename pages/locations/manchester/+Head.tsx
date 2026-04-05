export function Head() {
  return (
    <>
      <title>AI Automation Manchester | Voice Agents &amp; Chatbots</title>
      <meta name="description" content="AI automation for Manchester businesses. Voice agents, chatbots & workflow automation so you never miss a lead — Salford to Stockport. Free consultation." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/manchester" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Manchester | Voice Agents & Chatbots" />
      <meta property="og:description" content="AI automation for Manchester businesses. Voice agents, chatbots & workflow automation so you never miss a lead — Salford to Stockport. Free consultation." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/manchester" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Manchester | Voice Agents & Chatbots" />
      <meta name="twitter:description" content="AI automation for Manchester businesses. Voice agents, chatbots & workflow automation so you never miss a lead — Salford to Stockport. Free consultation." />

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
                name: 'Manchester',
                item: 'https://www.antekautomation.com/locations/manchester',
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
            name: 'Antek Automation Manchester',
            url: 'https://www.antekautomation.com/locations/manchester',
            telephone: '+44-3330-389960',
            founder: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Manchester',
              addressRegion: 'Greater Manchester',
              addressCountry: 'GB',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 53.4808,
              longitude: -2.2426,
            },
            areaServed: {
              '@type': 'City',
              name: 'Manchester',
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
                name: 'Do I need a Manchester-based agency?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "No. AI automation runs on cloud infrastructure — it doesn't matter whether the person who built it is in Salford or Southampton. What matters is that it works, that it's built properly, and that you can get hold of someone when you need support. We tick all three boxes.",
                },
              },
              {
                '@type': 'Question',
                name: 'How does your pricing compare to Manchester agencies?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Lower, because we don't have Northern Quarter office rent or a team of twelve. You get the same technology, the same quality build, and direct access to the founder — at a price that makes sense for Manchester SMEs, not enterprise budgets.",
                },
              },
              {
                '@type': 'Question',
                name: 'Can the AI voice agent handle Manchester accents?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes. Modern speech recognition handles regional accents extremely well — we test with real Manchester callers during setup. The voice agent's own voice is configurable too, so it matches the tone of your business.",
                },
              },
              {
                '@type': 'Question',
                name: 'Do you cover all of Greater Manchester?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "All ten boroughs: Manchester, Salford, Trafford, Stockport, Tameside, Oldham, Rochdale, Bury, Bolton, and Wigan. The AI doesn't care about postcodes — it works anywhere.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
