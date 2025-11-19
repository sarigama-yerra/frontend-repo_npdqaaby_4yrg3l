import { useState } from 'react'

export default function DemoForm(){
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = new FormData(e.currentTarget)
    const payload = {
      full_name: form.get('full_name'),
      work_email: form.get('work_email'),
      company_name: form.get('company_name'),
      role_title: form.get('role_title') || undefined,
      industry: form.get('industry'),
      primary_use_case: form.get('primary_use_case') || undefined,
      preferred_time_zone: form.get('preferred_time_zone') || undefined,
      message: form.get('message') || undefined,
      consent: form.get('consent') === 'on'
    }

    if (!payload.consent){
      setLoading(false)
      setError('Please accept the consent to proceed.')
      return
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/demo-requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) {
        const data = await res.json().catch(()=>({detail:'Unknown error'}))
        throw new Error(Array.isArray(data.detail)? data.detail[0].msg : data.detail)
      }
      setSuccess(true)
      e.currentTarget.reset()
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success){
    return (
      <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 text-emerald-300">
        <p className="text-lg font-semibold">Thank you! We’ve received your request and will reach out shortly to schedule your demo.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="rounded-md bg-red-500/10 border border-red-500/40 p-3 text-red-200 text-sm">{error}</div>}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-slate-300 text-sm mb-1">Full Name*</label>
          <input required name="full_name" className="w-full rounded-lg bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
        </div>
        <div>
          <label className="block text-slate-300 text-sm mb-1">Work Email*</label>
          <input required type="email" name="work_email" className="w-full rounded-lg bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
        </div>
        <div>
          <label className="block text-slate-300 text-sm mb-1">Company Name*</label>
          <input required name="company_name" className="w-full rounded-lg bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
        </div>
        <div>
          <label className="block text-slate-300 text-sm mb-1">Role / Title</label>
          <input name="role_title" className="w-full rounded-lg bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
        </div>
        <div>
          <label className="block text-slate-300 text-sm mb-1">Industry</label>
          <select name="industry" className="w-full rounded-lg bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400/60">
            {['Banking','Law Firm','Fintech','Corporate','Other'].map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-slate-300 text-sm mb-1">Preferred Time Zone</label>
          <select name="preferred_time_zone" className="w-full rounded-lg bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400/60">
            {['UTC', 'UTC-5 (EST)', 'UTC-8 (PST)', 'UTC+1 (CET)', 'UTC+5:30 (IST)', 'UTC+8 (SGT)'].map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-slate-300 text-sm mb-1">Primary Use Case</label>
        <input name="primary_use_case" className="w-full rounded-lg bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
      </div>
      <div>
        <label className="block text-slate-300 text-sm mb-1">Message / Notes</label>
        <textarea name="message" rows="4" className="w-full rounded-lg bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
      </div>
      <label className="flex items-start gap-2 text-slate-300 text-sm">
        <input type="checkbox" name="consent" className="mt-1.5 h-4 w-4 rounded border-white/20 bg-slate-900/60" required />
        <span>I agree to be contacted by Bank Verify Ledger regarding this inquiry.</span>
      </label>
      <button disabled={loading} type="submit" className="w-full md:w-auto px-6 py-3 rounded-lg bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition-colors shadow-[0_0_0_6px_rgba(16,185,129,0.15)] disabled:opacity-60">
        {loading? 'Submitting...' : 'Request My Demo'}
      </button>
    </form>
  )
}
