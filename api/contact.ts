// Vercel Serverless Function — contact form gateway.
//
// Verifies the Google reCAPTCHA v2 token server-side, then forwards the
// (token-stripped) form data to the n8n contact webhook. Keeping the secret
// and the webhook URL server-side means the browser never sees either.
//
// Required env (set in Vercel project settings):
//   RECAPTCHA_SECRET_KEY  — reCAPTCHA v2 secret key (server-side only, no VITE_ prefix)
//   CONTACT_WEBHOOK_URL   — n8n webhook the submission is forwarded to
//
// The matching public site key is exposed to the browser as VITE_RECAPTCHA_SITE_KEY.

const SITEVERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify'

function json(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

export async function POST(request: Request): Promise<Response> {
  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return json({ error: 'Invalid JSON body' }, 400)
  }

  const { recaptchaToken, ...formData } = body as {
    recaptchaToken?: unknown
  } & Record<string, unknown>

  const secret = process.env.RECAPTCHA_SECRET_KEY
  if (secret) {
    if (typeof recaptchaToken !== 'string' || !recaptchaToken) {
      return json({ error: 'Missing reCAPTCHA token' }, 400)
    }

    const params = new URLSearchParams()
    params.append('secret', secret)
    params.append('response', recaptchaToken)
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    if (clientIp) params.append('remoteip', clientIp)

    let verification: { success?: boolean }
    try {
      const res = await fetch(SITEVERIFY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params,
      })
      verification = (await res.json()) as { success?: boolean }
    } catch {
      return json({ error: 'reCAPTCHA verification unavailable' }, 502)
    }

    if (!verification.success) {
      return json({ error: 'reCAPTCHA challenge failed' }, 403)
    }
  } else if (process.env.VERCEL_ENV === 'production') {
    // Fail closed: never accept an unverified submission in production.
    return json({ error: 'Server misconfigured' }, 500)
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL
  if (!webhook) {
    return json({ error: 'Server misconfigured' }, 500)
  }

  try {
    const forwarded = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    if (!forwarded.ok) {
      return json({ error: 'Upstream webhook error' }, 502)
    }
  } catch {
    return json({ error: 'Failed to reach webhook' }, 502)
  }

  return json({ ok: true }, 200)
}
