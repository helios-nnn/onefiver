const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'PCs & Laptops',
    desc: 'Supply of enterprise-grade desktop and laptop computers from leading global manufacturers, configured to your specifications.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: 'Servers & Infrastructure',
    desc: 'Rack servers, blade systems, and network infrastructure tailored for SMEs, enterprises, and data centres.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Inventory Reporting',
    desc: 'Detailed technical inventory assessments and reporting, giving organizations a clear, auditable picture of their hardware assets.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Hardware Consultancy',
    desc: 'Expert guidance on hardware procurement strategies, lifecycle management, and technology roadmaps aligned with your business goals.',
  },
]

const process = [
  { step: '01', title: 'Requirements Assessment', desc: 'We analyze your current IT landscape and future needs.' },
  { step: '02', title: 'Solution Design', desc: 'Custom hardware and infrastructure proposals with full specifications.' },
  { step: '03', title: 'Supply & Delivery', desc: 'Reliable procurement and delivery of verified equipment.' },
  { step: '04', title: 'Reporting & Support', desc: 'Detailed inventory documentation and ongoing technical support.' },
]

export function ITDivision() {
  return (
    <section id="it-solutions" className="py-20 lg:py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-[#2e5fad]" />
            <span className="text-[#2e5fad] text-xs font-semibold uppercase tracking-widest">Division One</span>
            <div className="w-8 h-[2px] bg-[#2e5fad]" />
          </div>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0f2040] mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            IT & Tech Solutions
          </h2>
          <p className="text-[#475569] text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            We supply, consult, and report on technology hardware with a commitment to reliability that businesses can count on.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-white border border-[#e2e8f0] rounded-2xl p-7 hover:border-[#2e5fad]/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#dce8f6] text-[#2e5fad] flex items-center justify-center mb-4 group-hover:bg-[#2e5fad] group-hover:text-white transition-colors duration-300">
                {svc.icon}
              </div>
              <h3 className="text-[#0f2040] font-bold text-lg mb-2">{svc.title}</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-[#0f2040] rounded-3xl p-8 lg:p-12">
          <h3
            className="text-white text-2xl lg:text-3xl font-bold mb-2 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Process
          </h3>
          <p className="text-[#7aa3d9] text-sm text-center mb-10">A structured approach to every IT engagement</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, idx) => (
              <div key={p.step} className="relative">
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[calc(100%+12px)] w-8 h-[2px] bg-[#264d91]" />
                )}
                <div className="text-[#4a7cc7] text-xs font-bold tracking-widest mb-3">{p.step}</div>
                <h4 className="text-white font-semibold text-sm mb-2">{p.title}</h4>
                <p className="text-[#7aa3d9] text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#2e5fad] hover:bg-[#264d91] text-white font-semibold text-sm rounded-lg transition-colors duration-200"
            >
              Request IT Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
