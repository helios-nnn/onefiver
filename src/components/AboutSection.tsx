export function AboutSection() {
  const stats = [
    { value: '2+', label: 'Divisions' },
    { value: 'MU', label: 'Based in Mauritius' },
    { value: '∞', label: 'Global Reach' },
    { value: '100%', label: 'Client Focus' },
  ]

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-[#2e5fad]" />
              <span className="text-[#2e5fad] text-xs font-semibold uppercase tracking-widest">About One Five Ltd</span>
            </div>
            <h2
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0f2040] mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Specialized Solutions,
              <br />
              <span className="text-[#2e5fad]">Trusted Expertise</span>
            </h2>
            <p className="text-[#475569] text-base lg:text-lg leading-relaxed mb-5">
              One Five Ltd is a Mauritius-based firm delivering specialized services across two distinct but complementary domains — cutting-edge IT & technology solutions and transformative global education consultancy.
            </p>
            <p className="text-[#475569] text-base leading-relaxed mb-8">
              Founded on principles of reliability, integrity, and client-centric service, we operate at the intersection of technology and human potential. Whether you need robust IT infrastructure or a clear pathway to international education, our expert team is here to guide you with precision and care.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-[#0f2040] hover:bg-[#162d55] text-white font-semibold text-sm rounded-lg transition-colors duration-200"
              >
                Work With Us
              </a>
              <a
                href="#it-solutions"
                className="px-6 py-3 bg-transparent border border-[#cbd5e1] hover:border-[#2e5fad] text-[#0f2040] hover:text-[#2e5fad] font-semibold text-sm rounded-lg transition-colors duration-200"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Right: Stats + Values */}
          <div className="flex-1 w-full">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#0f2040] mb-1">{stat.value}</div>
                  <div className="text-[#64748b] text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="bg-[#0f2040] rounded-2xl p-6 lg:p-8">
              <h3 className="text-white font-semibold text-base mb-4">Our Core Values</h3>
              <ul className="space-y-3">
                {[
                  { icon: '⚡', title: 'Reliability', desc: 'Dependable delivery across every engagement' },
                  { icon: '🎯', title: 'Precision', desc: 'Meticulous attention to technical and client detail' },
                  { icon: '🌍', title: 'Global Perspective', desc: 'Local roots with an international outlook' },
                ].map((v) => (
                  <li key={v.title} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{v.icon}</span>
                    <div>
                      <span className="text-white font-medium text-sm">{v.title}</span>
                      <span className="text-[#7aa3d9] text-sm"> — {v.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
