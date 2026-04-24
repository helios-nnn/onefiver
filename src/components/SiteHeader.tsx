import { useState } from 'react'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#it-solutions', label: 'IT Solutions' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f2040]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#2e5fad] flex items-center justify-center font-bold text-white text-sm tracking-tight">
              15
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-tight tracking-wide">
                One Five Ltd
              </div>
              <div className="text-[#7aa3d9] text-[10px] uppercase tracking-widest leading-none">
                onefive.solutions
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#b3ccec] hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2.5 bg-[#2e5fad] hover:bg-[#264d91] text-white text-sm font-semibold rounded-lg transition-colors duration-200"
            >
              Get In Touch
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 rounded-md"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-3 text-[#b3ccec] hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 block px-5 py-2.5 bg-[#2e5fad] hover:bg-[#264d91] text-white text-sm font-semibold rounded-lg transition-colors duration-200 text-center"
            >
              Get In Touch
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
