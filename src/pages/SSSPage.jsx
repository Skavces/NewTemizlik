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
        <title>Sıkça Sorulan Sorular | New Temizlik</title>
        <meta name="description" content="GES panel temizliği ve bakımı hakkında sıkça sorulan sorular ve cevapları." />
        <meta name="robots" content="index, follow" />
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
