import { HeroSection } from '../sections/HeroSection'
import { StatsSection } from '../sections/StatsSection'
import { ProblemaSection } from '../sections/ProblemaSection'
import { ServiciosSection } from '../sections/ServiciosSection'
import { NosotrosSection } from '../sections/NosotrosSection'
import { ProcesoSection } from '../sections/ProcesoSection'
import { QuizTeaserSection } from '../sections/QuizTeaserSection'
import { AsiTrabajamosSection } from '../sections/AsiTrabajamosSection'
import { CTAFinalSection } from '../sections/CTAFinalSection'

interface LandingPageProps {
  onBookDemo: () => void
  onOpenQuiz: () => void
}

export function LandingPage({ onBookDemo, onOpenQuiz }: LandingPageProps) {
  return (
    <>
      <HeroSection onBookDemo={onBookDemo} />
      <StatsSection />
      <ProblemaSection />
      <ServiciosSection />
      <NosotrosSection />
      <ProcesoSection />
      <QuizTeaserSection onOpenQuiz={onOpenQuiz} />
      <AsiTrabajamosSection />
      <CTAFinalSection onBookDemo={onBookDemo} />
    </>
  )
}
