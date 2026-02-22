export function Head() {
  return (
    <>
      <title>AI Chatbots for UK Businesses | Capture Leads While You Sleep</title>
      <meta
        name="description"
        content="Custom-trained AI chatbots that answer customer questions, capture leads & book appointments on your website 24/7. Works on any platform. Try a demo."
      />
      <link rel="canonical" href="https://www.antekautomation.com/services/ai-chatbots" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Chatbots for UK Businesses | Capture Leads While You Sleep" />
      <meta
        property="og:description"
        content="Custom-trained AI chatbots that answer customer questions, capture leads & book appointments on your website 24/7. Works on any platform. Try a demo."
      />
      <meta property="og:url" content="https://www.antekautomation.com/services/ai-chatbots" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AI Chatbots for UK Businesses | Capture Leads While You Sleep" />
      <meta
        name="twitter:description"
        content="Custom-trained AI chatbots that answer customer questions, capture leads & book appointments on your website 24/7. Works on any platform. Try a demo."
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
                name: 'AI Chatbots',
                item: 'https://www.antekautomation.com/services/ai-chatbots',
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
            name: 'AI Chatbots',
            description:
              'Custom-trained AI chatbots that answer customer questions, capture leads and book appointments on your website 24/7 for UK businesses.',
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
            serviceType: 'AI Chatbot',
            url: 'https://www.antekautomation.com/services/ai-chatbots',
          }),
        }}
      />
    </>
  )
}
