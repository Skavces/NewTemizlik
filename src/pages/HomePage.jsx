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
        <meta name="description" content="Soma ve Türkiye genelinde endüstriyel GES ve güneş paneli temizliği. Solar panel yıkama, bakım izleme ve otonom temizlik robotu ile verim kaybını önlüyoruz." />
        <meta name="keywords" content="soma ges temizliği, güneş paneli temizliği, panel temizliği, ges temizliği, solar panel yıkama, türkiye geneli ges temizliği, manisa ges temizliği" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.newtemizlik.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.newtemizlik.com/" />
        <meta property="og:title" content="Soma GES Temizliği | Güneş Paneli ve Solar Panel Yıkama | New Temizlik" />
        <meta property="og:description" content="Soma ve Türkiye genelinde endüstriyel GES ve güneş paneli temizliği. Solar panel yıkama, bakım izleme ve otonom temizlik robotu ile verim kaybını önlüyoruz." />
        <meta property="og:image" content="https://www.newtemizlik.com/logo.png" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soma GES Temizliği | Güneş Paneli ve Solar Panel Yıkama | New Temizlik" />
        <meta name="twitter:description" content="Soma ve Türkiye genelinde endüstriyel GES ve güneş paneli temizliği. Solar panel yıkama, bakım izleme ve otonom temizlik robotu ile verim kaybını önlüyoruz." />
        <meta name="twitter:image" content="https://www.newtemizlik.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "New Temizlik",
          "description": "Soma ve Türkiye genelinde profesyonel GES panel temizliği, güneş paneli yıkama, solar panel bakım ve otonom temizlik robotu hizmetleri.",
          "url": "https://www.newtemizlik.com",
          "telephone": "+905304738793",
          "image": "https://www.newtemizlik.com/logo.png",
          "logo": "https://www.newtemizlik.com/logo.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Soma",
            "addressRegion": "Manisa",
            "addressCountry": "TR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 39.185,
            "longitude": 27.607
          },
          "areaServed": [
            { "@type": "City", "name": "Soma" },
            { "@type": "City", "name": "Akhisar" },
            { "@type": "City", "name": "Kırkağaç" },
            { "@type": "AdministrativeArea", "name": "Manisa" },
            { "@type": "AdministrativeArea", "name": "İzmir" },
            { "@type": "AdministrativeArea", "name": "Balıkesir" },
            { "@type": "AdministrativeArea", "name": "Kütahya" },
            { "@type": "Country", "name": "Türkiye" }
          ],
          "knowsAbout": [
            "GES Temizliği",
            "Güneş Paneli Temizliği",
            "Solar Panel Yıkama",
            "Panel Temizliği",
            "GES Bakım",
            "Otonom Panel Temizlik Robotu",
            "Fotovoltaik Panel Temizliği"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "GES Temizlik ve Bakım Hizmetleri",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GES Panel Temizliği", "url": "https://www.newtemizlik.com/hizmetlerimiz/panel-temizlik" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GES Panel Bakımı", "url": "https://www.newtemizlik.com/hizmetlerimiz/panel-bakim" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Otonom Temizlik Robotu Satışı", "url": "https://www.newtemizlik.com/hizmetlerimiz/robot-satisi" } }
            ]
          }
        })}</script>
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
