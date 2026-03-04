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
            areaServed: {
              '@type': 'City',
              name: 'Liverpool',
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
