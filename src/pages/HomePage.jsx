import { Helmet } from 'react-helmet-async'
import Navbar from '../components/sections/Navbar'
import Hero from '../components/sections/Hero'
import KirProblemleri from '../components/sections/KirProblemleri'
import WhyUs from '../components/sections/WhyUs'
import Process from '../components/sections/Process'
import Referanslar from '../components/sections/Referanslar'
import Footer from '../components/sections/Footer'
import WhatsAppButton from '../components/ui/WhatsAppButton'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Endüstriyel GES Temizliği ve Otonom Robot Teknolojileri | New Temizlik</title>
        <meta name="description" content="Soma ve çevresinde endüstriyel GES santralleri için minimum verim kaybı, maksimum enerji üretimi sağlayan otonom ve profesyonel mühendislik çözümleri." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Navbar />
      <Hero />
      <KirProblemleri />
      <WhyUs />
      <Process />
      <Referanslar />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
