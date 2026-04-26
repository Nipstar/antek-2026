interface QuickRecapProps {
  items: string[]
}

export function QuickRecap({ items }: QuickRecapProps) {
  return (
    <section className="border-b-3 border-charcoal bg-soft-sage py-10 md:py-12">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="font-black text-xl uppercase tracking-tight-lg text-charcoal mb-5">
          Quick Recap
        </h2>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-charcoal leading-normal">
              <span className="text-terracotta font-black text-lg leading-none mt-0.5 shrink-0">&bull;</span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
