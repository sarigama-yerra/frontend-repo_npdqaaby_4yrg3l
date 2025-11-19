export default function WhoFor(){
  const items = [
    { title: 'Banks & Financial Institutions', desc: 'Verifiable Proof-of-Funds, bank letters, confirmations.' },
    { title: 'Law Firms & Notaries', desc: 'Attach BVL verification to opinions, escrow instructions and closing docs.' },
    { title: 'Corporates & Family Offices', desc: 'Validate POFs and bank letters in high-value transactions.' },
  ]

  return (
    <section id="whofor" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Who it’s for</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it)=> (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-emerald-400/40 transition-all">
              <h3 className="text-white font-semibold">{it.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
