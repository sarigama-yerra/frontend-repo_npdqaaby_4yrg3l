import { ShieldCheck, QrCode, ScanSearch, LockKeyhole } from 'lucide-react'

export default function Security(){
  const items = [
    { icon: QrCode, title: 'Dynamic QR verification' },
    { icon: ShieldCheck, title: 'Advanced seal & ribbon' },
    { icon: ScanSearch, title: 'Document change detection' },
    { icon: LockKeyhole, title: 'Multi-factor access for issuers' },
  ]

  return (
    <section id="security" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Security you can trust</h2>
              <p className="mt-4 text-slate-300 leading-relaxed">BVL is built with security and compliance at its core. Every certificate is sealed with cryptographic fingerprints and can be verified remotely without exposing sensitive data. Designed for auditors, regulators and cross-border transactions.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {items.map(({icon:Icon, title})=> (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center hover:border-emerald-400/40 transition-all">
                  <div className="h-11 w-11 mx-auto rounded-xl bg-emerald-500/20 border border-emerald-400/30 grid place-items-center text-emerald-400">
                    <Icon size={22}/>
                  </div>
                  <p className="mt-3 text-sm text-white font-medium">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
