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
            areaServed: {
              '@type': 'City',
              name: 'Birmingham',
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
