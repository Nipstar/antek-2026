import { useEffect, useState } from 'react'
import { CalBooking } from './CalBooking'
import { trackEvent } from '../utils/analytics'

const SESSION_KEY = 'antek_booking_popup_seen'
const SUPPRESS_PATHS = ['/contact', '/ai-receptionist']

export function BookingPopupCTA() {
  const [open, setOpen] = useState(false)
  const [reason, setReason] = useState<'exit-intent' | 'engaged' | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    // Suppress on conversion pages
    if (SUPPRESS_PATHS.some((p) => window.location.pathname.startsWith(p))) return
    // Once per session
    try {
      if (sessionStorage.getItem(SESSION_KEY) === '1') return
    } catch {}

    const isDesktop = window.matchMedia('(min-width: 768px)').matches
    let exitHandler: ((e: MouseEvent) => void) | null = null
    let scrollTimerId: number | null = null
    let engagedTimerId: number | null = null
    let scrolled = false

    const trigger = (r: 'exit-intent' | 'engaged') => {
      try {
        sessionStorage.setItem(SESSION_KEY, '1')
      } catch {}
      setReason(r)
      setOpen(true)
      trackEvent('booking_popup_shown', {
        event_category: 'conversion',
        trigger: r,
        page_path: window.location.pathname,
      })
      cleanup()
    }

    const onScroll = () => {
      const pct = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight
      if (pct > 0.5 && !scrolled) {
        scrolled = true
        // Start 30s engaged timer only after meaningful scroll
        engagedTimerId = window.setTimeout(() => trigger('engaged'), 30_000)
      }
    }

    if (isDesktop) {
      exitHandler = (e: MouseEvent) => {
        if (e.clientY <= 0) trigger('exit-intent')
      }
      document.addEventListener('mouseout', exitHandler)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    // Safety net: 60s on page without trigger → still show
    scrollTimerId = window.setTimeout(() => {
      if (!scrolled) trigger('engaged')
    }, 60_000)

    function cleanup() {
      if (exitHandler) document.removeEventListener('mouseout', exitHandler)
      window.removeEventListener('scroll', onScroll)
      if (scrollTimerId !== null) window.clearTimeout(scrollTimerId)
      if (engagedTimerId !== null) window.clearTimeout(engagedTimerId)
    }
    return cleanup
  }, [])

  // Lock body scroll + ESC close while open
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss('esc')
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const dismiss = (how: 'esc' | 'backdrop' | 'close') => {
    trackEvent('booking_popup_dismissed', {
      event_category: 'conversion',
      method: how,
      trigger: reason || 'unknown',
    })
    setOpen(false)
  }

  const engage = () => {
    trackEvent('booking_popup_engaged', {
      event_category: 'conversion',
      trigger: reason || 'unknown',
    })
  }

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book a free 30-minute discovery call"
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-charcoal/70 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss('backdrop')
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-warm-beige border-3 border-charcoal shadow-brutal">
        <button
          type="button"
          aria-label="Close booking popup"
          onClick={() => dismiss('close')}
          className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center font-black text-charcoal bg-off-white border-3 border-charcoal hover:bg-terracotta hover:text-off-white transition-colors"
        >
          &times;
        </button>
        <div className="px-6 pt-8 pb-2 md:px-10 md:pt-10">
          <p className="text-xs uppercase tracking-wide text-terracotta font-black mb-2">
            Before you go
          </p>
          <h2 className="font-black text-2xl md:text-3xl uppercase tracking-tight-lg text-charcoal mb-3 pr-12">
            Book a free 30-min discovery call
          </h2>
          <p className="text-sm md:text-base text-charcoal/80 mb-5">
            We&rsquo;ll look at where AI can save you time + win you more business. No sales pitch.
            Replies within 1 hour Mon&ndash;Fri.
          </p>
        </div>
        <div className="px-3 pb-3 md:px-6 md:pb-6" onClick={engage}>
          <CalBooking
            namespace="popup"
            className="w-full min-h-[520px] border-3 border-charcoal bg-white"
          />
        </div>
      </div>
    </div>
  )
}
