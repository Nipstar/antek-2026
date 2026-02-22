import { Suspense, lazy, useEffect } from 'react'
import { Navigation } from '../src/components/Navigation'
import { Footer } from '../src/components/Footer'
import { initializeGoogleAnalytics, trackPageView } from '../src/utils/analytics'
import '../src/index.css'

const ChatbotWidget = lazy(() =>
  import('../src/components/ChatbotWidget').then((m) => ({ default: m.ChatbotWidget }))
)

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const gtagId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID
    if (gtagId) {
      initializeGoogleAnalytics(gtagId)
    }
    trackPageView(window.location.pathname || '/')
  }, [])

  return (
    <div className="min-h-screen bg-off-white">
      {/* Meta Pixel noscript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1430686008694674&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <Suspense fallback={null}>
        <ChatbotWidget />
      </Suspense>
    </div>
  )
}
