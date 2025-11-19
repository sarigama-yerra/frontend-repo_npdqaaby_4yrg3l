import { motion } from 'framer-motion'
import { Shield, Lock } from 'lucide-react'
import NeonLedgerGraphic from './NeonLedgerGraphic'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const badges = [
    { label: 'ISO/IEC 27001–aligned', hint: 'Information Security Management', icon: Shield },
    { label: 'SOC 2–ready', hint: 'Security, availability, confidentiality', icon: Shield },
    { label: 'GDPR by design', hint: 'Data protection in the EU', icon: Lock },
    { label: 'PSD2 / Open Banking aware', hint: 'Secure API and consent standards', icon: Shield },
    { label: 'eIDAS trust-services friendly', hint: 'Electronic identification and trust', icon: Shield },
    { label: 'AML / KYC controls support', hint: 'Anti-money laundering & identity', icon: Lock }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  }

  const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
  }

  return (
    <section id="top" className="relative pt-28">
      <div className="absolute inset-0 opacity-60" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(16,185,129,0.25),transparent)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_20%,rgba(125,211,252,0.20),transparent)]"/>
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

      {/* Security & Compliance badges */}
      <div className="mt-16">
        <div className="text-center">
          <h2 className="text-white text-lg font-semibold tracking-wide">Security & Compliance Ready</h2>
          <p className="mt-2 text-slate-400 text-sm max-w-3xl mx-auto">
            Designed to support modern information security, data protection, and financial compliance frameworks.
          </p>
        </div>

        <motion.div
          className="mt-6 max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {badges.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.label}
                variants={item}
                className="group relative select-none cursor-default"
              >
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 backdrop-blur-md border border-emerald-400/30 text-slate-200 text-xs shadow-[inset_0_0_0_1px_rgba(125,211,252,0.06)] transition-all hover:-translate-y-0.5 hover:border-emerald-400/60 hover:shadow-[0_0_0_3px_rgba(125,211,252,0.12),inset_0_0_0_1px_rgba(125,211,252,0.1)]">
                  <Icon className="h-3.5 w-3.5 text-emerald-300" />
                  <span className="font-medium tracking-wide">{b.label}</span>
                </div>
                {/* Tooltip line */}
                <div className="absolute left-1/2 -bottom-5 -translate-x-1/2 text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {b.hint}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
