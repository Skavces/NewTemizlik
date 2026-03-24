import { Helmet } from 'react-helmet-async'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import PageHero from '../components/ui/PageHero'

const references = [
  { name: 'Albayrak', logo: 'albayrak.png' },
  { name: 'Bizim Yem', logo: 'bizimyem.png', scale: 1.4 },
  { name: 'Gezgin Enerji', logo: 'gezginenerji.png', scale: 1.4 },
  { name: 'Halkbank', logo: 'halkbank.png' },
  { name: 'La Bella', logo: 'labella.png' },
  { name: 'Mert Civata', logo: 'mert-civata-logo.png' },
  { name: 'Saloni', logo: 'saloni.png' },
  { name: 'Sun Tekstil', logo: 'suntekstil.png' },
  { name: 'Wolfex', logo: 'wolfex.png' },
  { name: 'Hasan Atak', logo: 'hasanatak.webp' },
  { name: 'Renel Enerji', logo: 'renel-enerji.png', scale: 1.3 },
]

export default function ReferanslarPage() {
  return (
    <>
      <Helmet>
        <title>Referanslarımız | Güvenilir GES Temizlik Hizmeti | New Temizlik</title>
        <meta name="description" content="New Temizlik olarak hizmet verdiğimiz kurumsal referanslarımız. Halkbank, Albayrak, Gezgin Enerji ve daha birçok sektör lideri firma ile çalışıyoruz." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.newtemizlik.com/referanslarimiz" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.newtemizlik.com/referanslarimiz" />
        <meta property="og:title" content="Referanslarımız | Güvenilir GES Temizlik Hizmeti | New Temizlik" />
        <meta property="og:description" content="New Temizlik olarak hizmet verdiğimiz kurumsal referanslarımız. Halkbank, Albayrak, Gezgin Enerji ve daha birçok sektör lideri firma ile çalışıyoruz." />
        <meta property="og:image" content="https://www.newtemizlik.com/logo.png" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Referanslarımız | Güvenilir GES Temizlik Hizmeti | New Temizlik" />
        <meta name="twitter:description" content="New Temizlik olarak hizmet verdiğimiz kurumsal referanslarımız. Halkbank, Albayrak, Gezgin Enerji ve daha birçok sektör lideri firma ile çalışıyoruz." />
        <meta name="twitter:image" content="https://www.newtemizlik.com/logo.png" />
      </Helmet>

      <Navbar />

      <PageHero
        title="Referanslarımız"
        image="solar-panel.png"
        breadcrumbs={[
          { label: 'Ana Sayfa', path: '/' },
          { label: 'Referanslarımız' },
        ]}
      />

      <section style={{ background: 'var(--bg-body)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7FBF3A', display: 'block', marginBottom: '10px' }}>
              Referanslar
            </span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(26px, 4vw, 38px)' }}>
              Bize Güvenen Markalar
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginTop: '14px', maxWidth: '480px', margin: '14px auto 0', lineHeight: 1.7 }}>
              Sektörün öncü firmalarıyla birlikte çalışarak güvenilir hizmet anlayışımızı kanıtlıyoruz.
            </p>
            <div style={{ width: '50px', height: '3px', background: '#7FBF3A', margin: '16px auto 0' }} />
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-5 sm:px-8">
          {[references.slice(0, 5), references.slice(5)].map((row, rowIdx) => (
            <div
              key={rowIdx}
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: rowIdx === 0 ? '20px' : 0 }}
            >
              {row.map((ref) => (
                <div
                  key={ref.name}
                  className="section-card flex items-center justify-center p-5"
                  style={{ aspectRatio: '4/3', width: 'calc((100% - 5 * 20px) / 6)', minWidth: '140px' }}
                  title={ref.name}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${ref.logo}`}
                    alt={`${ref.name} Logosu`}
                    loading="lazy"
                    decoding="async"
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                    style={{ width: '90%', height: '90%', transform: ref.scale ? `scale(${ref.scale})` : undefined }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
