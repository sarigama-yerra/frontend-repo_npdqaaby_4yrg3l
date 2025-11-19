import { Database, ScanLine, QrCode, Shield, Globe2, FileCheck2 } from 'lucide-react'

export default function Features(){
  const features = [
    { title: 'Immutable Audit Trail', desc: 'Every certificate has a verifiable history and status (issued, revoked, expired).', icon: Database },
    { title: 'Anti-Tampering Design', desc: 'Security strip & layout make edits obvious.', icon: Shield },
    { title: 'Instant Remote Verification', desc: 'Scan QR or use ID from anywhere, 24/7.', icon: QrCode },
    { title: 'Privacy by Design', desc: 'Ledger never stores full sensitive data, only fingerprints and minimal fields.', icon: ScanLine },
    { title: 'API-Ready', desc: 'Issue and manage certificates via API from core banking or legal systems.', icon: Globe2 },
    { title: 'Enterprise-Grade Compliance', desc: 'Designed for auditors, regulators and cross-border deals.', icon: FileCheck2 },
  ]

  return (
    <section id="features" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Key Features</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-emerald-400/40 transition-all">
                <div className="h-11 w-11 rounded-xl bg-emerald-500/20 border border-emerald-400/30 grid place-items-center text-emerald-400">
                  <Icon size={22}/>
                </div>
                <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
                <p className="mt-2 text-slate-300 text-sm leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
