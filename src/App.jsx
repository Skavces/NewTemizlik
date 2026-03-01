import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import WhyUs from './components/sections/WhyUs'
import Process from './components/sections/Process'
import Referanslar from './components/sections/Referanslar'
import SSS from './components/sections/SSS'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen theme-transition overflow-x-hidden" style={{ backgroundColor: 'var(--bg-body)' }}>
        <Navbar />
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Referanslar />
        <SSS />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  )
}

export default App
