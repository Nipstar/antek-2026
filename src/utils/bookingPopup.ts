// Shared booking-popup event + trigger. Kept out of the component file so that
// file only exports a component (keeps React Fast Refresh happy).

export const BOOKING_POPUP_EVENT = 'antek:open-booking-popup'

export function openBookingPopup(source?: string) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(BOOKING_POPUP_EVENT, { detail: { source } }))
}
