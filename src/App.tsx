import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StickyHeader } from './components/StickyHeader'
import { BookingModal } from './components/BookingModal'
import { QuizModal } from './components/QuizModal'
import { WhatsAppButton } from './components/WhatsAppButton'
import { ScrollToHash } from './components/ScrollToHash'
import { LandingPage } from './pages/LandingPage'
import { NoticiasListPage } from './pages/NoticiasListPage'
import { NoticiaArticlePage } from './pages/NoticiaArticlePage'

function App() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [quizOpen, setQuizOpen] = useState(false)

  const openBooking = () => {
    setQuizOpen(false)
    setBookingOpen(true)
  }

  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="relative">
        <StickyHeader onBookDemo={openBooking} />

        <main>
          <Routes>
            <Route path="/" element={<LandingPage onBookDemo={openBooking} onOpenQuiz={() => setQuizOpen(true)} />} />
            <Route path="/noticias" element={<NoticiasListPage />} />
            <Route path="/noticias/:slug" element={<NoticiaArticlePage />} />
          </Routes>
        </main>

        <footer className="border-t border-border-hairline px-5 py-10 text-center sm:px-8">
          <p className="font-mono text-xs uppercase tracking-wide text-text-tertiary">
            Digital_Market_35 — agencia de IA para pymes
          </p>
        </footer>

        <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
        <QuizModal open={quizOpen} onClose={() => setQuizOpen(false)} onBookDemo={openBooking} />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}

export default App
