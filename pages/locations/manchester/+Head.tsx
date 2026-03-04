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
            areaServed: {
              '@type': 'City',
              name: 'Manchester',
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
