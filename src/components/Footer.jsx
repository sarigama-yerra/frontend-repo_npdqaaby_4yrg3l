export default function Footer(){
  return (
    <footer className="relative border-t border-white/10 py-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-white font-semibold">Bank Verify Ledger</p>
            <p className="text-sm">BVL – Bank-grade verification for the digital era.</p>
            <p className="text-sm mt-2">contact@bankverifyledger.com · London, UK</p>
          </div>
          <div className="md:text-right space-x-4 text-sm">
            <a href="#" className="hover:text-white">About</a>
            <a href="#how" className="hover:text-white">How It Works</a>
            <a href="#" className="hover:text-white">API</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
        <div className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Bank Verify Ledger. All rights reserved.</div>
      </div>
    </footer>
  )
}
