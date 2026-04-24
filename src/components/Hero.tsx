export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-16 lg:pt-20 overflow-hidden bg-[#0a1628]">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2040] to-[#0a1628]" />

      {/* Top bar label */}
      <div className="relative z-10 flex justify-center pt-10 pb-6 px-4">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
          <span className="text-[#b3ccec] text-xs font-medium tracking-wider uppercase">
            Mauritius-Based · Global Reach
          </span>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 gap-0 lg:gap-8">
        {/* IT Division Card */}
        <div className="flex-1 flex flex-col justify-center lg:border-r border-white/10 lg:pr-8 py-10 lg:py-20">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-md bg-[#2e5fad]/30 border border-[#2e5fad]/50 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#7aa3d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
              </svg>
            </div>
            <span className="text-[#7aa3d9] text-xs font-semibold uppercase tracking-widest">IT & Tech Solutions</span>
          </div>
          <h1
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tech
            <br />
            <span className="text-[#4a7cc7]">Excellence</span>
          </h1>
          <p className="text-[#7aa3d9] text-base lg:text-lg leading-relaxed mb-8 max-w-md">
            Enterprise-grade IT equipment supply, hardware consultancy, and precision inventory reporting. Reliability and expertise at the core of every solution.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['PCs & Laptops', 'Servers', 'Hardware Consultancy', 'Inventory Reports'].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full bg-[#2e5fad]/20 border border-[#2e5fad]/40 text-[#7aa3d9] text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
          <a
            href="#it-solutions"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2e5fad] hover:bg-[#264d91] text-white font-semibold text-sm rounded-lg transition-colors duration-200 w-fit"
          >
            Explore IT Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Divider for mobile */}
        <div className="lg:hidden border-t border-white/10 mx-0" />

        {/* Education Division Card */}
        <div className="flex-1 flex flex-col justify-center lg:pl-8 py-10 lg:py-20">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-md bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest">Global Education Agency</span>
          </div>
          <h1
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Educational
            <br />
            <span className="text-[#c9a84c]">Pathways</span>
          </h1>
          <p className="text-[#7aa3d9] text-base lg:text-lg leading-relaxed mb-8 max-w-md">
            Bridging ambitions and opportunities. Guiding international students to Mauritius and Mauritian students to world-class universities abroad.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['Study in Mauritius', 'Study Abroad', 'University Placement', 'Visa Guidance'].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#d4b96a] text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
          <a
            href="#education"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a84c] hover:bg-[#b8963e] text-[#0a1628] font-semibold text-sm rounded-lg transition-colors duration-200 w-fit"
          >
            Explore Education Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <a href="#about" className="flex flex-col items-center gap-1 text-[#4a7cc7] hover:text-white transition-colors duration-200">
          <span className="text-xs font-medium tracking-wide">Learn More</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
