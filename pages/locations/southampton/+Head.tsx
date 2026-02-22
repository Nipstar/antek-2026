export function Head() {
  return (
    <>
      <title>AI Automation Southampton | Voice Agents &amp; Chatbots</title>
      <meta name="description" content="AI automation for Southampton businesses. Voice agents, chatbots & workflow automation. Local Hampshire agency. Free consultation." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/southampton" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Southampton | Voice Agents & Chatbots" />
      <meta property="og:description" content="AI automation for Southampton businesses. Voice agents, chatbots & workflow automation. Local Hampshire agency. Free consultation." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/southampton" />
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
                name: 'Southampton',
                item: 'https://www.antekautomation.com/locations/southampton',
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
            name: 'Antek Automation Southampton',
            url: 'https://www.antekautomation.com/locations/southampton',
            telephone: '+44-1234-567890',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Southampton',
              addressRegion: 'Hampshire',
              addressCountry: 'GB',
            },
            areaServed: {
              '@type': 'City',
              name: 'Southampton',
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
