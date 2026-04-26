import { Button } from './Button'

interface PricingCardProps {
  id: string
  name: string
  tagline: string
  price: string
  setupNote?: string
  bullets: string[]
  integrations?: string
  cta: string
  ctaHref: string
  featured?: boolean
  billingLabel?: string
}

export function PricingCard({
  id,
  name,
  tagline,
  price,
  setupNote,
  bullets,
  integrations,
  cta,
  ctaHref,
  featured = false,
  billingLabel,
}: PricingCardProps) {
  return (
    <div
      id={id}
      className={`border-3 border-charcoal p-8 md:p-10 ${featured ? 'bg-warm-beige shadow-brutal' : 'bg-white shadow-brutal-sm'}`}
    >
      {featured && (
        <div className="inline-block border-3 border-charcoal bg-terracotta px-4 py-1 mb-6">
          <span className="font-black uppercase text-xs text-off-white">Most Popular</span>
        </div>
      )}
      <h3 className="font-black text-2xl uppercase tracking-tight-lg text-charcoal mb-2">{name}</h3>
      <p className="text-charcoal text-base leading-normal mb-6">{tagline}</p>

      <div className="mb-6">
        <span className="font-black text-5xl text-terracotta">{price}</span>
        {billingLabel && (
          <span className="text-mid-gray text-sm ml-1">{billingLabel}</span>
        )}
        {setupNote && (
          <p className="text-mid-gray text-sm mt-1">{setupNote}</p>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3 text-charcoal text-sm leading-normal">
            <span className="text-terracotta font-black text-lg leading-none mt-0.5 shrink-0">&bull;</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {integrations && (
        <p className="text-xs text-mid-gray border-t-3 border-charcoal pt-4 mb-6">
          <span className="font-black uppercase">Integrations: </span>{integrations}
        </p>
      )}

      <a href={ctaHref}>
        <Button variant={featured ? 'primary' : 'secondary'} className="w-full text-center">
          {cta}
        </Button>
      </a>
    </div>
  )
}
