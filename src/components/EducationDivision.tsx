const pathways = [
  {
    direction: 'Study in Mauritius',
    subtitle: 'International Students → Mauritius',
    color: 'gold',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    desc: 'We guide international students through every step of the journey to Mauritius — one of Africa\'s premier education hubs — from institution selection to visa support.',
    services: [
      'University & college matching',
      'Application & enrollment support',
      'Scholarship guidance',
      'Visa & immigration documentation',
      'Pre-arrival orientation',
      'On-ground support services',
    ],
  },
  {
    direction: 'Study Abroad',
    subtitle: 'Mauritian Students → World',
    color: 'blue',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    desc: 'We help Mauritian students secure placements at leading universities worldwide, offering end-to-end support from course selection through to departure.',
    services: [
      'Global university placement',
      'Personal statement coaching',
      'Country-specific application strategies',
      'Scholarship & funding search',
      'Student visa assistance',
      'Accommodation & travel advice',
    ],
  },
]

const destinations = ['United Kingdom', 'Australia', 'Canada', 'France', 'South Africa', 'Germany', 'UAE', 'Mauritius']

export function EducationDivision() {
  return (
    <section id="education" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest">Division Two</span>
            <div className="w-8 h-[2px] bg-[#c9a84c]" />
          </div>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0f2040] mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Global Education Agency
          </h2>
          <p className="text-[#475569] text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Acting as a trusted bridge between students and world-class educational opportunities — wherever their ambitions lead.
          </p>
        </div>

        {/* Pathway cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {pathways.map((p) => (
            <div
              key={p.direction}
              className={`rounded-3xl overflow-hidden border ${
                p.color === 'gold'
                  ? 'border-[#c9a84c]/30 bg-gradient-to-br from-[#fdfbf4] to-[#fef9ec]'
                  : 'border-[#2e5fad]/20 bg-gradient-to-br from-[#f0f5fc] to-[#eef4fb]'
              }`}
            >
              <div className="p-8">
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      p.color === 'gold'
                        ? 'bg-[#c9a84c]/20 text-[#c9a84c]'
                        : 'bg-[#2e5fad]/20 text-[#2e5fad]'
                    }`}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div
                      className={`text-xs font-semibold uppercase tracking-widest mb-1 ${
                        p.color === 'gold' ? 'text-[#c9a84c]' : 'text-[#2e5fad]'
                      }`}
                    >
                      {p.subtitle}
                    </div>
                    <h3 className="text-[#0f2040] font-bold text-xl">{p.direction}</h3>
                  </div>
                </div>
                <p className="text-[#475569] text-sm leading-relaxed mb-6">{p.desc}</p>
                <ul className="space-y-2">
                  {p.services.map((svc) => (
                    <li key={svc} className="flex items-center gap-2.5 text-[#334155] text-sm">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${p.color === 'gold' ? 'text-[#c9a84c]' : 'text-[#2e5fad]'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {svc}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`px-8 py-4 border-t ${
                  p.color === 'gold' ? 'border-[#c9a84c]/20 bg-[#c9a84c]/5' : 'border-[#2e5fad]/10 bg-[#2e5fad]/5'
                }`}
              >
                <a
                  href="#contact"
                  className={`text-sm font-semibold flex items-center gap-1 ${
                    p.color === 'gold' ? 'text-[#b8963e]' : 'text-[#2e5fad]'
                  } hover:opacity-75 transition-opacity`}
                >
                  Start Your Application
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Destinations bar */}
        <div className="bg-[#0f2040] rounded-2xl p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-lg mb-1">Key Destinations</h3>
              <p className="text-[#7aa3d9] text-sm">Countries we actively support placements in</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {destinations.map((d) => (
                <span
                  key={d}
                  className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#b3ccec] text-xs font-medium"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
