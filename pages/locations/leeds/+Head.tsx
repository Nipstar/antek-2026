export function Head() {
  return (
    <>
      <title>AI Automation Leeds | Voice Agents &amp; Chatbots</title>
      <meta name="description" content="AI automation for Leeds businesses. Voice agents, chatbots & workflow automation for solicitors, trades & service firms across West Yorkshire. Free consultation." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/leeds" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Leeds | Voice Agents & Chatbots" />
      <meta property="og:description" content="AI automation for Leeds businesses. Voice agents, chatbots & workflow automation for solicitors, trades & service firms across West Yorkshire. Free consultation." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/leeds" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Leeds | Voice Agents & Chatbots" />
      <meta name="twitter:description" content="AI automation for Leeds businesses. Voice agents, chatbots & workflow automation for solicitors, trades & service firms across West Yorkshire. Free consultation." />

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
                name: 'Leeds',
                item: 'https://www.antekautomation.com/locations/leeds',
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
            name: 'Antek Automation Leeds',
            url: 'https://www.antekautomation.com/locations/leeds',
            telephone: '+44-3330-389960',
            founder: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Leeds',
              addressRegion: 'West Yorkshire',
              addressCountry: 'GB',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 53.8008,
              longitude: -1.5491,
            },
            areaServed: {
              '@type': 'City',
              name: 'Leeds',
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
                name: 'Do I need a Leeds-based agency for AI automation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "No. AI runs on cloud infrastructure — it works identically whether the builder is in Leeds or Hampshire. What matters is the quality of the build, the reliability of the support, and whether you can get hold of someone when you need them. We deliver on all three, and you deal directly with the founder.",
                },
              },
              {
                '@type': 'Question',
                name: 'What types of Leeds businesses do you work with?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Professional services (solicitors, accountants, consultants), trades (plumbers, electricians, builders), dental and medical practices, cleaning companies, estate agents, and hospitality businesses. If you take calls, book appointments, or chase invoices — we can automate it.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you cover all of West Yorkshire?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes — Leeds, Bradford, Wakefield, Huddersfield, Halifax, and everywhere in between. The AI doesn't care about postcodes. It answers your calls and books your appointments whether the caller's in LS1 or HD1.",
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can you set things up?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most voice agents and chatbots are live within 5-7 working days from our first call. Workflow automation depends on complexity but typically 1-2 weeks. Everything is set up remotely over video call — no need to block out a day for meetings.',
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
