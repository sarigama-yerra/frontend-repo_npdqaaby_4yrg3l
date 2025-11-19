import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import WhoFor from './components/WhoFor'
import Security from './components/Security'
import DemoForm from './components/DemoForm'
import FutureTeaser from './components/FutureTeaser'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-400/30">
      <Navbar />

      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <WhoFor />
        <Security />

        {/* Demo Booking Section */}
        <section id="demo" className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">See BVL in action.</h2>
              <p className="mt-4 text-slate-300 leading-relaxed">Book a 30-minute demo to see how BVL can secure your Proof-of-Funds and bank documents, reduce fraud and make verification instant for your clients.</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-400 list-disc pl-5">
                <li>Live walkthrough of issuance and verification</li>
                <li>Security model and compliance overview</li>
                <li>Integration options for API and back office</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <DemoForm />
            </div>
          </div>
        </section>

        <FutureTeaser />
      </main>

      <Footer />
    </div>
  )
}

export default App
