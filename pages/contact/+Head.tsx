export function Head() {
  return (
    <>
      <title>Contact Antek Automation | Book a Free Chat</title>
      <meta name="description" content="Get in touch with Andy at Antek Automation. Book a free 15-minute chat about AI voice agents, chatbots or workflow automation for your business." />
      <link rel="canonical" href="https://www.antekautomation.com/contact" />

      {/* Open Graph */}
      <meta property="og:title" content="Contact Antek Automation | Book a Free Chat" />
      <meta property="og:description" content="Get in touch with Andy at Antek Automation. Book a free 15-minute chat about AI voice agents, chatbots or workflow automation for your business." />
      <meta property="og:url" content="https://www.antekautomation.com/contact" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Contact Antek Automation | Book a Free Chat" />
      <meta name="twitter:description" content="Get in touch with Andy at Antek Automation. Book a free 15-minute chat about AI voice agents, chatbots or workflow automation for your business." />

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
                name: 'Contact',
                item: 'https://www.antekautomation.com/contact',
              },
            ],
          }),
        }}
      />
    </>
  );
}
