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
            areaServed: {
              '@type': 'City',
              name: 'Leeds',
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
    </>
  );
}
