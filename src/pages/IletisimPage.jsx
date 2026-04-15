import { Helmet } from 'react-helmet-async'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import PageHero from '../components/ui/PageHero'
import Contact from '../components/sections/Contact'

export default function IletisimPage() {
  return (
    <>
      <Helmet>
        <title>İletişim | Ücretsiz GES Temizlik Keşfi | New Temizlik</title>
        <meta name="description" content="New Temizlik ile iletişime geçin. Soma ve çevresindeki GES santralleriniz için ücretsiz keşif ve teklif almak üzere bizi arayın veya formu doldurun." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.newtemizlik.com/iletisim" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.newtemizlik.com/iletisim" />
        <meta property="og:title" content="İletişim | Ücretsiz GES Temizlik Keşfi | New Temizlik" />
        <meta property="og:description" content="New Temizlik ile iletişime geçin. Soma ve çevresindeki GES santralleriniz için ücretsiz keşif ve teklif almak üzere bizi arayın veya formu doldurun." />
        <meta property="og:image" content="https://www.newtemizlik.com/logo.png" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="New Temizlik" />
        <meta property="og:image:alt" content="New Temizlik - GES temizlik hizmetleri iletişim logosu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="İletişim | Ücretsiz GES Temizlik Keşfi | New Temizlik" />
        <meta name="twitter:description" content="New Temizlik ile iletişime geçin. Soma ve çevresindeki GES santralleriniz için ücretsiz keşif ve teklif almak üzere bizi arayın veya formu doldurun." />
        <meta name="twitter:image" content="https://www.newtemizlik.com/logo.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.newtemizlik.com/" },
            { "@type": "ListItem", "position": 2, "name": "İletişim", "item": "https://www.newtemizlik.com/iletisim" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "New Temizlik İletişim",
          "url": "https://www.newtemizlik.com/iletisim",
          "description": "New Temizlik GES temizlik ve bakım hizmetleri için iletişim sayfası. Ücretsiz saha keşfi ve teklif.",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "New Temizlik",
            "telephone": "+905304738793",
            "url": "https://www.newtemizlik.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Soma",
              "addressRegion": "Manisa",
              "postalCode": "45500",
              "addressCountry": "TR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 39.185,
              "longitude": 27.607
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            ]
          }
        })}</script>
      </Helmet>

      <Navbar />

      <PageHero
        title="İletişim"
        image="solar-panel.png"
        breadcrumbs={[
          { label: 'Ana Sayfa', path: '/' },
          { label: 'İletişim' },
        ]}
      />

      <Contact />

      <Footer />
      <WhatsAppButton />
    </>
  )
}
