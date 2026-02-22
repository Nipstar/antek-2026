export function Head() {
  return (
    <>
      <title>Workflow Automation for UK Businesses | Save 10-20 Hours a Week</title>
      <meta
        name="description"
        content="We automate the admin that's burying you. CRM updates, email follow-ups, invoicing, data entry — all handled automatically with n8n. Based in Hampshire."
      />
      <link rel="canonical" href="https://www.antekautomation.com/services/workflow-automation" />

      {/* Open Graph */}
      <meta property="og:title" content="Workflow Automation for UK Businesses | Save 10-20 Hours a Week" />
      <meta
        property="og:description"
        content="We automate the admin that's burying you. CRM updates, email follow-ups, invoicing, data entry — all handled automatically with n8n. Based in Hampshire."
      />
      <meta property="og:url" content="https://www.antekautomation.com/services/workflow-automation" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Workflow Automation for UK Businesses | Save 10-20 Hours a Week" />
      <meta
        name="twitter:description"
        content="We automate the admin that's burying you. CRM updates, email follow-ups, invoicing, data entry — all handled automatically with n8n. Based in Hampshire."
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
                name: 'Workflow Automation',
                item: 'https://www.antekautomation.com/services/workflow-automation',
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
            name: 'Workflow Automation',
            description:
              'Custom n8n workflow automation for UK businesses. We automate CRM updates, email follow-ups, invoicing, and data entry to save you 10-20 hours a week.',
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
            serviceType: 'Workflow Automation',
            url: 'https://www.antekautomation.com/services/workflow-automation',
          }),
        }}
      />
    </>
  )
}
