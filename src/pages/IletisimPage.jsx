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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="İletişim | Ücretsiz GES Temizlik Keşfi | New Temizlik" />
        <meta name="twitter:description" content="New Temizlik ile iletişime geçin. Soma ve çevresindeki GES santralleriniz için ücretsiz keşif ve teklif almak üzere bizi arayın veya formu doldurun." />
        <meta name="twitter:image" content="https://www.newtemizlik.com/logo.png" />
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
