export function Head() {
  return (
    <>
      <title>AI Automation Andover | Voice Agents, Chatbots &amp; Workflow Automation</title>
      <meta name="description" content="Andover's AI automation agency. Voice agents, chatbots & workflow automation for local businesses. We're local, we're straight-talking, and we deliver results." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/andover" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Andover | Voice Agents, Chatbots & Workflow Automation" />
      <meta property="og:description" content="Andover's AI automation agency. Voice agents, chatbots & workflow automation for local businesses. We're local, we're straight-talking, and we deliver results." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/andover" />
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
                name: 'Andover',
                item: 'https://www.antekautomation.com/locations/andover',
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
            name: 'Antek Automation Andover',
            url: 'https://www.antekautomation.com/locations/andover',
            telephone: '+44-3330-389960',
            founder: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Andover',
              addressRegion: 'Hampshire',
              addressCountry: 'GB',
            },
            areaServed: {
              '@type': 'City',
              name: 'Andover',
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
