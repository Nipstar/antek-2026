interface ResourceLink {
  text: string
  url: string
  context: string
}

interface ResourcesComplianceProps {
  links: ResourceLink[]
}

export function ResourcesCompliance({ links }: ResourcesComplianceProps) {
  return (
    <section className="py-12 border-b-3 border-charcoal">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h3 className="font-black text-sm uppercase tracking-tight-lg text-charcoal mb-5">
          Resources &amp; Compliance
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-3 border-charcoal bg-white p-4 shadow-brutal-xs hover:shadow-brutal-sm hover:-translate-y-0.5 transition-all"
            >
              <span className="font-black text-charcoal text-sm block mb-1 underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">
                {link.text}
              </span>
              <span className="text-mid-gray text-xs">{link.context}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
