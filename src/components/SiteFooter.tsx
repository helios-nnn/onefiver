export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0a1628] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#2e5fad] flex items-center justify-center font-bold text-white text-sm tracking-tight">
                15
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">One Five Ltd</div>
                <div className="text-[#4a7cc7] text-[10px] uppercase tracking-widest leading-none">onefive.solutions</div>
              </div>
            </div>
            <p className="text-[#64748b] text-sm leading-relaxed mb-4">
              A Mauritius-based firm delivering specialized IT solutions and global education consultancy services.
            </p>
            <div className="text-[#64748b] text-sm">
              <div className="flex items-center gap-2 mb-1.5">
                <svg className="w-4 h-4 text-[#4a7cc7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Mauritius
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#4a7cc7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                onefive.solutions
              </div>
            </div>
          </div>

          {/* IT Division */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">IT & Tech Solutions</h3>
            <ul className="space-y-2.5">
              {['PC & Laptop Supply', 'Server Infrastructure', 'Hardware Consultancy', 'Inventory Reporting', 'IT Inquiry'].map((item) => (
                <li key={item}>
                  <a href="#it-solutions" className="text-[#64748b] hover:text-[#7aa3d9] text-sm transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Education Division */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Global Education</h3>
            <ul className="space-y-2.5">
              {['Study in Mauritius', 'Study Abroad', 'University Placement', 'Scholarship Guidance', 'Student Consultancy'].map((item) => (
                <li key={item}>
                  <a href="#education" className="text-[#64748b] hover:text-[#d4b96a] text-sm transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <div className="text-[#64748b] text-xs uppercase tracking-wide mb-0.5">IT Inquiries</div>
                <a href="#contact" className="text-[#7aa3d9] text-sm hover:text-white transition-colors">
                  Submit IT Inquiry →
                </a>
              </li>
              <li>
                <div className="text-[#64748b] text-xs uppercase tracking-wide mb-0.5">Student Consultancy</div>
                <a href="#contact" className="text-[#d4b96a] text-sm hover:text-white transition-colors">
                  Book a Consultation →
                </a>
              </li>
              <li>
                <div className="text-[#64748b] text-xs uppercase tracking-wide mb-0.5">Response Time</div>
                <div className="text-[#94a3b8] text-sm">Within 1 business day</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#475569] text-xs">
            © {year} One Five Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-[#475569] text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            Mauritius · IT Solutions · Education Agency
          </div>
        </div>
      </div>
    </footer>
  )
}
