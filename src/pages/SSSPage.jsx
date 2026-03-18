import { Helmet } from 'react-helmet-async'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import PageHero from '../components/ui/PageHero'
import SSS from '../components/sections/SSS'

export default function SSSPage() {
  return (
    <>
      <Helmet>
        <title>Sıkça Sorulan Sorular | GES Panel Temizliği SSS | New Temizlik</title>
        <meta name="description" content="Güneş paneli temizliği, GES bakım hizmetleri ve temizlik robotu hakkında merak edilen soruların cevapları. New Temizlik SSS sayfası." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.newtemizlik.com/sss" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.newtemizlik.com/sss" />
        <meta property="og:title" content="Sıkça Sorulan Sorular | GES Panel Temizliği SSS | New Temizlik" />
        <meta property="og:description" content="Güneş paneli temizliği, GES bakım hizmetleri ve temizlik robotu hakkında merak edilen soruların cevapları. New Temizlik SSS sayfası." />
        <meta property="og:image" content="https://www.newtemizlik.com/logo.png" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sıkça Sorulan Sorular | GES Panel Temizliği SSS | New Temizlik" />
        <meta name="twitter:description" content="Güneş paneli temizliği, GES bakım hizmetleri ve temizlik robotu hakkında merak edilen soruların cevapları. New Temizlik SSS sayfası." />
        <meta name="twitter:image" content="https://www.newtemizlik.com/logo.png" />
      </Helmet>

      <Navbar />

      <PageHero
        title="Sıkça Sorulan Sorular"
        image="solar-panel.png"
        breadcrumbs={[
          { label: 'Ana Sayfa', path: '/' },
          { label: 'S.S.S' },
        ]}
      />

      <SSS />

      <Footer />
      <WhatsAppButton />
    </>
  )
}
