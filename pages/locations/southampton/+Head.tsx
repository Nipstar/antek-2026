export function Head() {
  return (
    <>
      <title>AI Automation Southampton | Voice Agents &amp; Chatbots</title>
      <meta name="description" content="AI automation for Southampton businesses. Voice agents, chatbots & workflow automation. Local Hampshire agency. Free consultation." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/southampton" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Southampton | Voice Agents & Chatbots" />
      <meta property="og:description" content="AI automation for Southampton businesses. Voice agents, chatbots & workflow automation. Local Hampshire agency. Free consultation." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/southampton" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Southampton | Voice Agents & Chatbots" />
      <meta name="twitter:description" content="AI automation for Southampton businesses. Voice agents, chatbots & workflow automation. Local Hampshire agency. Free consultation." />

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
                name: 'Southampton',
                item: 'https://www.antekautomation.com/locations/southampton',
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
            name: 'Antek Automation Southampton',
            url: 'https://www.antekautomation.com/locations/southampton',
            telephone: '+44-3330-389960',
            founder: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Southampton',
              addressRegion: 'Hampshire',
              addressCountry: 'GB',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 50.9097,
              longitude: -1.4044,
            },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'h2', '.text-lg'],
            },
            areaServed: {
              '@type': 'City',
              name: 'Southampton',
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

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: "You're based in Andover \u2014 why should I choose you over a Southampton agency?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "We're 30 minutes up the A3057 \u2014 closer than most London agencies that target Southampton businesses. More importantly, AI automation runs on cloud infrastructure. Your voice agent doesn't need a local office. What matters is the quality of the build and the speed of support, and we deliver both.",
                },
              },
              {
                '@type': 'Question',
                name: 'Do your AI voice agents work for hospitality businesses near the cruise terminals?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes. We've built voice agents that handle high-volume seasonal enquiries \u2014 exactly the pattern cruise terminal hospitality businesses deal with. The AI handles the peaks so your staff can focus on service.",
                },
              },
              {
                '@type': 'Question',
                name: 'Can your chatbot handle enquiries in multiple languages?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes. Southampton's diverse population and international port traffic means multilingual capability matters. Our chatbots can be configured to handle conversations in multiple languages.",
                },
              },
              {
                '@type': 'Question',
                name: "What's the typical ROI for a Southampton service business?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "A Southampton trades business missing just 5 calls per week at an average job value of \u00a3200 is losing \u00a34,000/month in potential revenue. Our AI voice agents start from \u00a3197/month \u2014 the maths speaks for itself.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
