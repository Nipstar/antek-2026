export function Head() {
  return (
    <>
      <title>AI Automation Basingstoke | Voice Agents &amp; Chatbots | Antek</title>
      <meta name="description" content="Stop losing Basingstoke jobs to missed calls. AI voice agents, chatbots and automation, built by a founder just up the A303 in Andover. Book a free call." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/basingstoke" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Basingstoke | Voice Agents & Chatbots | Antek" />
      <meta property="og:description" content="Stop losing Basingstoke jobs to missed calls. AI voice agents, chatbots and automation, built by a founder just up the A303 in Andover. Book a free call." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/basingstoke" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Basingstoke | Voice Agents & Chatbots | Antek" />
      <meta name="twitter:description" content="Stop losing Basingstoke jobs to missed calls. AI voice agents, chatbots and automation, built by a founder just up the A303 in Andover. Book a free call." />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
              { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.antekautomation.com/locations' },
              { '@type': 'ListItem', position: 3, name: 'Basingstoke', item: 'https://www.antekautomation.com/locations/basingstoke' },
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
            name: 'Antek Automation Basingstoke',
            url: 'https://www.antekautomation.com/locations/basingstoke',
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
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 51.2667,
              longitude: -1.0876,
            },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'h2', '.text-lg'],
            },
            areaServed: {
              '@type': 'City',
              name: 'Basingstoke',
              sameAs: ['https://en.wikipedia.org/wiki/Basingstoke', 'https://www.wikidata.org/wiki/Q810196'],
              containedInPlace: {
                '@type': 'AdministrativeArea',
                name: 'Hampshire',
                sameAs: ['https://en.wikipedia.org/wiki/Hampshire', 'https://www.wikidata.org/wiki/Q23204'],
              },
            },
            makesOffer: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Voice Agents' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Chatbots' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workflow Automation' } },
            ],
          }),
        }}
      />

      {/* Service Schema — WHO (Antek/Andy) → WHAT (voice agents, chatbots, automation) → WHERE (Basingstoke, Hampshire) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Automation Basingstoke',
            serviceType: 'AI automation',
            url: 'https://www.antekautomation.com/locations/basingstoke',
            provider: {
              '@type': 'Organization',
              name: 'Antek Automation',
              url: 'https://www.antekautomation.com/',
              knowsAbout: [
                'AI voice agents',
                'AI chatbots',
                'Workflow automation',
                'Business process automation',
                'Lead capture',
              ],
              founder: { '@type': 'Person', name: 'Andy Norman' },
            },
            areaServed: {
              '@type': 'City',
              name: 'Basingstoke',
              sameAs: ['https://en.wikipedia.org/wiki/Basingstoke', 'https://www.wikidata.org/wiki/Q810196'],
              containedInPlace: {
                '@type': 'AdministrativeArea',
                name: 'Hampshire',
                sameAs: ['https://en.wikipedia.org/wiki/Hampshire', 'https://www.wikidata.org/wiki/Q23204'],
              },
            },
          }),
        }}
      />

      {/* ImageObject Schema — with contentLocation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageObject',
            url: 'https://www.antekautomation.com/og-image.png',
            contentUrl: 'https://www.antekautomation.com/og-image.png',
            caption: 'Antek Automation — AI automation for Basingstoke businesses',
            contentLocation: {
              '@type': 'City',
              name: 'Basingstoke',
              sameAs: ['https://en.wikipedia.org/wiki/Basingstoke', 'https://www.wikidata.org/wiki/Q810196'],
            },
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
                name: 'Do you actually cover Basingstoke, or just Andover?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Both. Andover is our base, but we work with Basingstoke businesses every week — we’re only 20 minutes up the A303. The AI runs in the cloud, so your voice agent answers Basingstoke calls exactly the same whether we’re next door or up the road.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need to be in Basingstoke for this to work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Not at all. The whole thing runs remotely — setup, testing and support all happen over video call. Your AI voice agent doesn’t need a desk in Basing View to answer your phone. Most clients are set up without us ever stepping into their office.',
                },
              },
              {
                '@type': 'Question',
                name: 'What kind of Basingstoke businesses do you work with?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Trades and service firms across Chineham, Old Basing, Hatch Warren and the rest, plus the office-based businesses around Basing View, Chineham Business Park and Houndmills. If your team answers phones or chases admin every week, it’s a fit.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can we meet in person?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes — we’re 20 minutes away in Andover, just up the A303, so a face-to-face is easy if you’d prefer to kick things off over a coffee. Most people are happy on video, but the option’s there.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does it cost and how quickly can I start?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI voice agents and chatbots start from £57/month, and most are live within 24–48 hours of you forwarding your number or giving us website access. For a Basingstoke trade missing even a few calls a week, it usually pays for itself almost immediately.',
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
