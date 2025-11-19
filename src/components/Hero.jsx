import NeonLedgerGraphic from './NeonLedgerGraphic'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="top" className="relative pt-28">
      <div className="absolute inset-0 opacity-60" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(16,185,129,0.25),transparent)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_20%,rgba(34,197,94,0.2),transparent)]"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Turn bank documents into verifiable digital certificates.
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            BVL adds cryptographic seals, QR verification and tamper-evident design to Proof-of-Funds and other bank documents, so anyone can verify them in seconds.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={()=>scrollTo('#demo')} className="px-6 py-3 rounded-lg bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition-colors shadow-[0_0_0_6px_rgba(16,185,129,0.15)]">
              Book a Live Demo
            </button>
            <button onClick={()=>scrollTo('#how')} className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">
              Learn How It Works
            </button>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-xl">
            <NeonLedgerGraphic />
          </div>
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-500/20 via-transparent to-transparent blur-xl pointer-events-none"/>
        </div>
      </div>

      <div className="mt-14 text-center">
        <p className="text-slate-400 text-sm uppercase tracking-widest">Built for forward-thinking banks, fintechs and legal teams.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 opacity-70">
          {[1,2,3,4,5,6].map((i)=>(
            <div key={i} className="h-10 w-36 rounded-md border border-white/10 bg-white/5 grid place-items-center text-slate-500 text-xs">
              Logo placeholder – Bank / Fintech
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
