import React, { useState } from 'react'

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const email = 'you@example.com'

  const copy = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Tertarik bekerja sama?</h2>
          <p className="mt-3 text-slate-600">Hubungi saya untuk kolaborasi, freelance, atau kesempatan kerja.</p>

          <div className="mt-6 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <p className="text-sm text-slate-500 mb-2">Email</p>
            <div className="flex items-center justify-between gap-3">
              <code className="text-slate-800">{email}</code>
              <button onClick={copy} className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-800">
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-500">Atau kirim DM via LinkedIn/GitHub.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
