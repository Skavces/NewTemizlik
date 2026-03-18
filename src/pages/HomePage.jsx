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
        <meta name="description" content="Soma ve çevresinde endüstriyel GES santralleri için minimum verim kaybı, maksimum enerji üretimi sağlayan otonom ve profesyonel temizlik çözümleri." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.newtemizlik.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.newtemizlik.com/" />
        <meta property="og:title" content="Endüstriyel GES Temizliği ve Otonom Robot Teknolojileri | New Temizlik" />
        <meta property="og:description" content="Soma ve çevresinde endüstriyel GES santralleri için minimum verim kaybı, maksimum enerji üretimi sağlayan otonom ve profesyonel temizlik çözümleri." />
        <meta property="og:image" content="https://www.newtemizlik.com/logo.png" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Endüstriyel GES Temizliği ve Otonom Robot Teknolojileri | New Temizlik" />
        <meta name="twitter:description" content="Soma ve çevresinde endüstriyel GES santralleri için minimum verim kaybı, maksimum enerji üretimi sağlayan otonom ve profesyonel temizlik çözümleri." />
        <meta name="twitter:image" content="https://www.newtemizlik.com/logo.png" />
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
