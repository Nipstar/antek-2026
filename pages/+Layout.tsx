import { Suspense, lazy, useEffect, useState } from 'react'
import { Navigation } from '../src/components/Navigation'
import { Footer } from '../src/components/Footer'
import { initializeGoogleAnalytics, trackPageView } from '../src/utils/analytics'
import '../src/index.css'

const ChatbotWidget = lazy(() =>
  import('../src/components/ChatbotWidget').then((m) => ({ default: m.ChatbotWidget }))
)

export function Layout({ children }: { children: React.ReactNode }) {
  const [chatbotReady, setChatbotReady] = useState(false)

  useEffect(() => {
    const gtagId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID
    if (gtagId) {
      initializeGoogleAnalytics(gtagId)
    }
    trackPageView(window.location.pathname || '/')
  }, [])

  // Defer ChatbotWidget mount until browser is idle or after a short delay,
  // or on first user interaction (whichever comes first). This keeps the
  // chatbot JS off the critical path and improves LCP/TBT scores.
  useEffect(() => {
    let cancelled = false
    const mount = () => {
      if (cancelled) return
      setChatbotReady(true)
    }

    const events: Array<keyof WindowEventMap> = ['pointerdown', 'keydown', 'scroll', 'touchstart']
    const onInteract = () => {
      mount()
      events.forEach((e) => window.removeEventListener(e, onInteract))
    }
    events.forEach((e) => window.addEventListener(e, onInteract, { once: true, passive: true }))

    const ric = (window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }).requestIdleCallback
    const cic = (window as unknown as {
      cancelIdleCallback?: (id: number) => void
    }).cancelIdleCallback

    let idleId: number | undefined
    let timeoutId: number | undefined
    if (ric) {
      idleId = ric(mount, { timeout: 3000 })
    } else {
      timeoutId = window.setTimeout(mount, 2500)
    }

    return () => {
      cancelled = true
      events.forEach((e) => window.removeEventListener(e, onInteract))
      if (idleId !== undefined && cic) cic(idleId)
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
    }
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
      {chatbotReady && (
        <Suspense fallback={null}>
          <ChatbotWidget />
        </Suspense>
      )}
    </div>
  )
}
