export function Head() {
  return (
    <>
      <title>Privacy Policy | Antek Automation</title>
      <meta name="description" content="Privacy policy for Antek Automation. How we collect, use and protect your data. GDPR compliant." />
      <link rel="canonical" href="https://www.antekautomation.com/privacy-policy" />

      {/* Open Graph */}
      <meta property="og:title" content="Privacy Policy | Antek Automation" />
      <meta property="og:description" content="Privacy policy for Antek Automation. How we collect, use and protect your data. GDPR compliant." />
      <meta property="og:url" content="https://www.antekautomation.com/privacy-policy" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Privacy Policy | Antek Automation" />
      <meta name="twitter:description" content="Privacy policy for Antek Automation. How we collect, use and protect your data. GDPR compliant." />

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
                name: 'Privacy Policy',
                item: 'https://www.antekautomation.com/privacy-policy',
              },
            ],
          }),
        }}
      />
    </>
  );
}
