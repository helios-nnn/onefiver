import { useState } from 'react'

type FormFields = {
  name: string
  email: string
  phone: string
  inquiryType: string
  subject: string
  message: string
}

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

export function ContactSection() {
  const [fields, setFields] = useState<FormFields>({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!fields.inquiryType) {
      setError('Please select an inquiry type.')
      return
    }
    setLoading(true)
    try {
      await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left info panel */}
          <div className="lg:w-2/5">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-[#2e5fad]" />
              <span className="text-[#2e5fad] text-xs font-semibold uppercase tracking-widest">Contact Us</span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#0f2040] mb-5 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Let's Start a
              <br />
              <span className="text-[#2e5fad]">Conversation</span>
            </h2>
            <p className="text-[#475569] text-base leading-relaxed mb-8">
              Whether you have an IT requirement or an educational ambition, our team is ready to help. Fill in the form and we'll be in touch within one business day.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#dce8f6] text-[#2e5fad] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#0f2040] font-semibold text-sm">Location</div>
                  <div className="text-[#64748b] text-sm mt-0.5">Mauritius</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#dce8f6] text-[#2e5fad] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#0f2040] font-semibold text-sm">Website</div>
                  <div className="text-[#64748b] text-sm mt-0.5">onefive.solutions</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#dce8f6] text-[#2e5fad] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#0f2040] font-semibold text-sm">Response Time</div>
                  <div className="text-[#64748b] text-sm mt-0.5">Within 1 business day</div>
                </div>
              </div>
            </div>

            {/* Division quick links */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-[#2e5fad]/20 bg-white p-4">
                <div className="text-[#2e5fad] font-semibold text-xs uppercase tracking-wide mb-1">IT Inquiry</div>
                <div className="text-[#64748b] text-xs">Hardware, servers, consultancy</div>
              </div>
              <div className="rounded-xl border border-[#c9a84c]/30 bg-white p-4">
                <div className="text-[#b8963e] font-semibold text-xs uppercase tracking-wide mb-1">Student Consultancy</div>
                <div className="text-[#64748b] text-xs">Study in MU or abroad</div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-3xl border border-[#e2e8f0] p-7 lg:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[#0f2040] font-bold text-xl mb-2">Message Received</h3>
                  <p className="text-[#64748b] text-sm max-w-xs mx-auto">
                    Thank you for reaching out. A member of our team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Hidden fields for Netlify */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="hidden">
                    <input name="bot-field" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-[#0f2040] text-sm font-medium mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={fields.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#0f2040] placeholder-[#94a3b8] focus:outline-none focus:border-[#2e5fad] focus:ring-2 focus:ring-[#2e5fad]/10 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[#0f2040] text-sm font-medium mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={fields.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#0f2040] placeholder-[#94a3b8] focus:outline-none focus:border-[#2e5fad] focus:ring-2 focus:ring-[#2e5fad]/10 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-[#0f2040] text-sm font-medium mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={fields.phone}
                        onChange={handleChange}
                        placeholder="+230 5000 0000"
                        className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#0f2040] placeholder-[#94a3b8] focus:outline-none focus:border-[#2e5fad] focus:ring-2 focus:ring-[#2e5fad]/10 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[#0f2040] text-sm font-medium mb-1.5">
                        Inquiry Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="inquiryType"
                        value={fields.inquiryType}
                        onChange={handleChange}
                        className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#0f2040] bg-white focus:outline-none focus:border-[#2e5fad] focus:ring-2 focus:ring-[#2e5fad]/10 transition appearance-none"
                      >
                        <option value="" disabled>Select type...</option>
                        <option value="IT Inquiry">IT Inquiry</option>
                        <option value="Student Consultancy">Student Consultancy</option>
                        <option value="General">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-[#0f2040] text-sm font-medium mb-1.5">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={fields.subject}
                      onChange={handleChange}
                      placeholder="Brief description of your inquiry"
                      className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#0f2040] placeholder-[#94a3b8] focus:outline-none focus:border-[#2e5fad] focus:ring-2 focus:ring-[#2e5fad]/10 transition"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#0f2040] text-sm font-medium mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={fields.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your requirement or question..."
                      className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#0f2040] placeholder-[#94a3b8] focus:outline-none focus:border-[#2e5fad] focus:ring-2 focus:ring-[#2e5fad]/10 transition resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-[#0f2040] hover:bg-[#162d55] disabled:opacity-50 text-white font-semibold text-sm rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-[#94a3b8] text-xs text-center mt-4">
                    We respect your privacy and will never share your details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
