'use client'

import { useState } from 'react'

// ─── ContactForm ──────────────────────────────────────────────────────────────
//
// Simple form that composes a mailto: link on submit, opening the user's
// email client. No server required; works universally.

type FormState = 'idle' | 'submitting' | 'sent' | 'error'

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [state, setState] = useState<FormState>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')

    const { name, email, subject, message } = form
    const body = encodeURIComponent(
      `Dear Yuriy,\n\n${message}\n\n---\nSent by: ${name}\nReply to: ${email}`,
    )
    const mailtoUrl = `mailto:yuriy@rubanov.com?subject=${encodeURIComponent(subject)}&body=${body}`

    try {
      window.location.href = mailtoUrl
      // Small delay so mailto can open before we update state
      setTimeout(() => setState('sent'), 500)
    } catch {
      setState('error')
    }
  }

  const inputBase =
    'w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 hover:border-zinc-300'

  if (state === 'sent') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-100 bg-emerald-50 px-8 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-7 w-7 text-emerald-600">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <h3 className="text-base font-bold text-zinc-900">Message composed!</h3>
          <p className="mt-1.5 text-sm text-zinc-500">
            Your email client has opened with the message pre-filled.
            Please send it to complete your enquiry.
          </p>
        </div>
        <button
          onClick={() => { setState('idle'); setForm({ name: '', email: '', subject: '', message: '' }) }}
          className="mt-2 text-sm font-medium text-zinc-500 underline underline-offset-2 hover:text-zinc-700"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Row: Name + Email */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold text-zinc-700">
            Your Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            className={inputBase}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-zinc-700">
            Your Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            value={form.email}
            onChange={handleChange}
            className={inputBase}
          />
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-xs font-semibold text-zinc-700">
          Subject <span className="text-red-400">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className={`${inputBase} cursor-pointer`}
        >
          <option value="" disabled>Select a topic…</option>
          <option value="Traffic Forecasting Enquiry">Traffic Forecasting</option>
          <option value="Airport Master Plan Enquiry">Airport Master Plan</option>
          <option value="Feasibility Study Enquiry">Feasibility Study</option>
          <option value="Capacity Analysis Enquiry">Capacity Analysis</option>
          <option value="Strategic Development Enquiry">Strategic Development</option>
          <option value="Project Management Enquiry">Project Management</option>
          <option value="IFP Design Enquiry">IFP / Airspace Design</option>
          <option value="Expert Review / Second Opinion">Expert Review / Second Opinion</option>
          <option value="General Enquiry">General Enquiry</option>
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold text-zinc-700">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Please describe your project, airport, timeline and any specific requirements…"
          value={form.message}
          onChange={handleChange}
          className={`${inputBase} resize-none`}
        />
      </div>

      {/* Privacy note */}
      <p className="text-xs text-zinc-400">
        By submitting this form your email client will open with the message pre-filled
        addressed to{' '}
        <a href="mailto:yuriy@rubanov.com" className="font-medium text-zinc-600 hover:underline">
          yuriy@rubanov.com
        </a>
        . No data is stored on this website.
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={state === 'submitting'}
        className="mt-1 flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
        style={{
          background: 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)',
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
          <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {state === 'submitting' ? 'Opening email…' : 'Send Message'}
      </button>

      {state === 'error' && (
        <p className="text-center text-xs text-red-500">
          Could not open your email client. Please write directly to{' '}
          <a href="mailto:yuriy@rubanov.com" className="underline">yuriy@rubanov.com</a>.
        </p>
      )}
    </form>
  )
}
