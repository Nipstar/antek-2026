// Ambient types for the Google reCAPTCHA v2 (explicit render) widget loaded
// via https://www.google.com/recaptcha/api.js?render=explicit on the contact page.
interface ReCaptchaV2 {
  render: (
    container: HTMLElement | string,
    parameters: { sitekey: string; theme?: 'light' | 'dark'; size?: 'normal' | 'compact' },
  ) => number
  getResponse: (widgetId?: number) => string
  reset: (widgetId?: number) => void
  ready?: (callback: () => void) => void
}

interface Window {
  grecaptcha?: ReCaptchaV2
}
