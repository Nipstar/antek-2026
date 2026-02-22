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
            telephone: '+44-1234-567890',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'London',
              addressRegion: 'Greater London',
              addressCountry: 'GB',
            },
            areaServed: {
              '@type': 'City',
              name: 'London',
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
