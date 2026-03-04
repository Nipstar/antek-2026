export function Head() {
  return (
    <>
      <title>AI Voice Agents for UK Businesses | Never Miss a Call Again</title>
      <meta
        name="description"
        content="AI voice agents that answer calls 24/7, book appointments & qualify leads. Sounds natural, works with your calendar. Try a free demo. Based in Hampshire, UK."
      />
      <link rel="canonical" href="https://www.antekautomation.com/services/ai-voice-assistants" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Voice Agents for UK Businesses | Never Miss a Call Again" />
      <meta
        property="og:description"
        content="AI voice agents that answer calls 24/7, book appointments & qualify leads. Sounds natural, works with your calendar. Try a free demo. Based in Hampshire, UK."
      />
      <meta property="og:url" content="https://www.antekautomation.com/services/ai-voice-assistants" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AI Voice Agents for UK Businesses | Never Miss a Call Again" />
      <meta
        name="twitter:description"
        content="AI voice agents that answer calls 24/7, book appointments & qualify leads. Sounds natural, works with your calendar. Try a free demo. Based in Hampshire, UK."
      />

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
                name: 'Services',
                item: 'https://www.antekautomation.com/#services',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'AI Voice Assistants',
                item: 'https://www.antekautomation.com/services/ai-voice-assistants',
              },
            ],
          }),
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Voice Agents',
            description:
              'AI voice agents that answer calls 24/7, book appointments and qualify leads for UK businesses. Sounds natural, works with your calendar.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Antek Automation',
              url: 'https://www.antekautomation.com',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'Hampshire',
                addressCountry: 'GB',
              },
            },
            areaServed: {
              '@type': 'Country',
              name: 'United Kingdom',
            },
            serviceType: 'AI Voice Agent',
            url: 'https://www.antekautomation.com/services/ai-voice-assistants',
            author: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              jobTitle: 'Founder & Director',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
            },
          }),
        }}
      />
    </>
  )
}
