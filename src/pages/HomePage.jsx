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
        <title>Soma GES Temizliği | Güneş Paneli ve Solar Panel Yıkama | New Temizlik</title>
        <meta name="description" content="Soma ve çevresinde endüstriyel GES ve güneş paneli temizliği. Solar panel yıkama, bakım izleme ve otonom temizlik robotu ile verim kaybını önlüyoruz." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.newtemizlik.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.newtemizlik.com/" />
        <meta property="og:title" content="Soma GES Temizliği | Güneş Paneli ve Solar Panel Yıkama | New Temizlik" />
        <meta property="og:description" content="Soma ve çevresinde endüstriyel GES ve güneş paneli temizliği. Solar panel yıkama, bakım izleme ve otonom temizlik robotu ile verim kaybını önlüyoruz." />
        <meta property="og:image" content="https://www.newtemizlik.com/logo.png" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soma GES Temizliği | Güneş Paneli ve Solar Panel Yıkama | New Temizlik" />
        <meta name="twitter:description" content="Soma ve çevresinde endüstriyel GES ve güneş paneli temizliği. Solar panel yıkama, bakım izleme ve otonom temizlik robotu ile verim kaybını önlüyoruz." />
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
