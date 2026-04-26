const products = [
  { name: 'AI Voice Assistant', href: '/pricing#ai-voice-assistant' },
  { name: 'AI Chatbot', href: '/pricing#ai-chatbot' },
  { name: 'Workflow Automation', href: '/pricing#workflow-automation' },
  { name: 'GEO Audit', href: '/pricing#geo-audit' },
  { name: 'AI Receptionist', href: '/pricing#ai-receptionist' },
]

const rows: { label: string; values: string[] }[] = [
  {
    label: 'Starting price',
    values: ['from £97/month (3 tiers)', '£57/month', 'from £250', 'from £247', 'from £97/month (3 tiers)'],
  },
  {
    label: 'Setup fee',
    values: ['£249', '£149', 'Included', 'Included', '£249'],
  },
  {
    label: 'Time to live',
    values: ['24–48 hours', '24–48 hours', '1–14 days', '24 hours', '24–48 hours'],
  },
  {
    label: 'Best for',
    values: [
      'Businesses that miss calls',
      'Websites losing leads out-of-hours',
      'Admin-heavy operations',
      'AI search visibility',
      'Service businesses with high call volume',
    ],
  },
  {
    label: 'Common integrations',
    values: [
      'Google Calendar, Outlook, Calendly',
      'HubSpot, Google Calendar, Calendly',
      'Google Workspace, Xero, HubSpot, Stripe, 400+ more',
      '—',
      'Most CRMs, calendars, field service tools',
    ],
  },
]

export function PricingComparisonTable() {
  return (
    <div>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-3 border-charcoal text-left text-sm">
          <thead>
            <tr className="bg-charcoal text-off-white">
              <th className="p-4 font-black uppercase border-r-3 border-off-white/20 w-36"></th>
              {products.map((p) => (
                <th key={p.href} className="p-4 font-black uppercase border-r-3 border-off-white/20 last:border-r-0">
                  <a href={p.href} className="hover:text-terracotta transition-colors">
                    {p.name}
                  </a>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={row.label} className={`border-t-3 border-charcoal ${ri % 2 === 0 ? 'bg-white' : 'bg-peach'}`}>
                <td className="p-4 font-black text-charcoal border-r-3 border-charcoal uppercase text-xs">{row.label}</td>
                {row.values.map((val, vi) => (
                  <td key={vi} className="p-4 text-charcoal border-r-3 border-charcoal last:border-r-0">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="md:hidden space-y-6">
        {products.map((product, pi) => (
          <div key={product.href} className="border-3 border-charcoal bg-white">
            <div className="bg-charcoal text-off-white px-6 py-4">
              <a href={product.href} className="font-black uppercase text-sm hover:text-terracotta transition-colors">
                {product.name}
              </a>
            </div>
            {rows.map((row, ri) => (
              <div key={row.label} className={`px-6 py-4 flex gap-4 border-t-3 border-charcoal ${ri % 2 === 0 ? 'bg-white' : 'bg-peach'}`}>
                <span className="font-black uppercase text-xs text-charcoal w-28 shrink-0">{row.label}</span>
                <span className="text-charcoal text-sm">{row.values[pi]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
