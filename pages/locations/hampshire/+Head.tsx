export function Head() {
  return (
    <>
      <title>AI Automation Services Hampshire | Voice Agents &amp; Chatbots</title>
      <meta name="description" content="Hampshire-based AI automation agency. We build voice agents, chatbots & workflow automation for local service businesses. Book a free 15-min chat with Andy." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/hampshire" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Services Hampshire | Voice Agents & Chatbots" />
      <meta property="og:description" content="Hampshire-based AI automation agency. We build voice agents, chatbots & workflow automation for local service businesses. Book a free 15-min chat with Andy." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/hampshire" />
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
                name: 'Hampshire',
                item: 'https://www.antekautomation.com/locations/hampshire',
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
            name: 'Antek Automation Hampshire',
            url: 'https://www.antekautomation.com/locations/hampshire',
            telephone: '+44-1234-567890',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Andover',
              addressRegion: 'Hampshire',
              addressCountry: 'GB',
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Hampshire',
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
