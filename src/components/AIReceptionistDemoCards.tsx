import { demoCalls } from '../data/aiReceptionist'

export function AIReceptionistDemoCards() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {demoCalls.map((demo) => (
          <div
            key={demo.id}
            className="bg-white border-3 border-charcoal shadow-brutal p-6 md:p-8 flex flex-col"
          >
            <p className="font-black text-xs uppercase tracking-wide text-terracotta mb-4">
              {demo.label}
            </p>
            <h3 className="font-black text-lg text-charcoal mb-5 leading-tight">{demo.title}</h3>
            <a
              href={`tel:${demo.phoneTel}`}
              className="font-black text-3xl md:text-4xl text-charcoal hover:text-terracotta transition-colors mb-4 tracking-tight-lg block"
            >
              {demo.phoneDisplay}
            </a>
            <p className="text-sm text-charcoal/70 italic mt-auto">Prompt: {demo.prompt}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-sm font-black uppercase tracking-wide text-charcoal/60">
        Available 24/7 &middot; Powered by Retell AI &middot; Demo Calls
      </p>
    </div>
  )
}
