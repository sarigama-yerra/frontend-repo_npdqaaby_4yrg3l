import { FileText, ShieldCheck, CheckCircle2 } from 'lucide-react'

export default function HowItWorks(){
  const steps = [
    {
      title: 'Issue & Timestamp',
      desc: 'Institution issues/uploads a document. BVL creates a cryptographic fingerprint and timestamp.',
      icon: FileText
    },
    {
      title: 'Seal & Secure',
      desc: 'BVL applies a digital seal, QR code and security ribbon over sensitive fields.',
      icon: ShieldCheck
    },
    {
      title: 'Verify in Seconds',
      desc: 'Verifiers scan the QR or enter the certificate ID to confirm it’s VALID and unchanged.',
      icon: CheckCircle2
    }
  ]

  return (
    <section id="how" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, idx)=>{
            const Icon = s.icon
            return (
              <div key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-emerald-400/40 transition-all">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent blur-lg pointer-events-none"/>
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-emerald-500/20 border border-emerald-400/30 grid place-items-center text-emerald-400">
                    <Icon size={22}/>
                  </div>
                  <div className="text-5xl font-extrabold text-emerald-400/60">{idx+1}</div>
                </div>
                <h3 className="mt-4 text-white font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-slate-300 text-sm leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
