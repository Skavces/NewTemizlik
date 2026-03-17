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
        <title>İletişim | New Temizlik</title>
        <meta name="description" content="New Temizlik ile iletişime geçin. Ücretsiz keşif ve teklif için bizi arayın veya form doldurun." />
        <meta name="robots" content="index, follow" />
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
