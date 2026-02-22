export function Head() {
  return (
    <>
      <title>AI Automation Glasgow | Voice Agents &amp; Chatbots</title>
      <meta name="description" content="AI automation for Glasgow businesses. Voice agents, chatbots & workflow automation. UK-wide service. Free consultation." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/glasgow" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Glasgow | Voice Agents & Chatbots" />
      <meta property="og:description" content="AI automation for Glasgow businesses. Voice agents, chatbots & workflow automation. UK-wide service. Free consultation." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/glasgow" />
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
            telephone: '+44-1234-567890',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Glasgow',
              addressRegion: 'Scotland',
              addressCountry: 'GB',
            },
            areaServed: {
              '@type': 'City',
              name: 'Glasgow',
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
