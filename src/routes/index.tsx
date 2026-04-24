import { createFileRoute } from '@tanstack/react-router'
import { SiteHeader } from '@/components/SiteHeader'
import { Hero } from '@/components/Hero'
import { AboutSection } from '@/components/AboutSection'
import { ITDivision } from '@/components/ITDivision'
import { EducationDivision } from '@/components/EducationDivision'
import { ContactSection } from '@/components/ContactSection'
import { SiteFooter } from '@/components/SiteFooter'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <ITDivision />
        <EducationDivision />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
