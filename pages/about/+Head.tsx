export function Head() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.antekautomation.com/#founder',
    name: 'Andy Norman',
    jobTitle: 'Founder & Director',
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://www.antekautomation.com/#organization',
      name: 'Antek Automation',
      url: 'https://www.antekautomation.com',
    },
    sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
    knowsAbout: [
      'AI automation',
      'AI chatbots',
      'Voice AI',
      'Workflow automation',
      'Business process automation',
      'Conversational AI',
    ],
  };

  const breadcrumbSchema = {
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
        name: 'About',
        item: 'https://www.antekautomation.com/about',
      },
    ],
  };

  return (
    <>
      <title>About Antek Automation | AI Automation Agency UK</title>
      <meta
        name="description"
        content="Meet Andy Norman, founder of Antek Automation. 30+ years in technology, Certified Retell AI Partner, building AI voice agents, chatbots & workflow automation for UK businesses from Andover, Hampshire."
      />
      <link rel="canonical" href="https://www.antekautomation.com/about" />

      {/* Open Graph */}
      <meta property="og:title" content="About Antek Automation | AI Automation Agency UK" />
      <meta
        property="og:description"
        content="Meet Andy Norman, founder of Antek Automation. 30+ years in technology, Certified Retell AI Partner, building AI voice agents, chatbots & workflow automation for UK businesses from Andover, Hampshire."
      />
      <meta property="og:url" content="https://www.antekautomation.com/about" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />

      {/* Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
