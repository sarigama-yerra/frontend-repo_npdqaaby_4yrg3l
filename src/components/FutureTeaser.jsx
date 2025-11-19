export default function FutureTeaser(){
  const cards = [
    { title: 'How it works', desc: 'Flow from issuance to verification.', tag: 'Coming Soon' },
    { title: 'API & Integrations', desc: 'Connect your core systems easily.', tag: 'Coming Soon' },
    { title: 'Security', desc: 'Deep-dive into crypto & compliance.', tag: 'Coming Soon' },
    { title: 'Resources', desc: 'Guides, templates and case studies.', tag: 'Coming Soon' },
  ]

  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c)=>(
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-emerald-400/40 transition-all">
              <div className="text-slate-300 text-xs mb-2">{c.tag}</div>
              <h3 className="text-white font-semibold">{c.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
