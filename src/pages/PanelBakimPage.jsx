import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import PageHero from '../components/ui/PageHero'

const features = [
  'Termal kamera ile sıcak nokta (hotspot) tespiti',
  'Invertör ve DC kablo hat kontrolü',
  'Sigorta, montaj ve bağlantı noktası kontrolleri',
  'Dijital raporlama ve periyodik bakım takvimi',
  'Üretim verisi analizi ile erken arıza tespiti',
  'Yıllık bakım sözleşmesiyle öncelikli müdahale garantisi',
]

export default function PanelBakimPage() {
  return (
    <>
      <Helmet>
        <title>GES Panel Bakım ve Onarım İzleme Hizmeti | New Temizlik</title>
        <meta name="description" content="GES santrallerinde proaktif bakım, termal kamera analizi ve performans izleme hizmetleri. Verim kayıplarını ve arızaları erkenden tespit ediyoruz." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.newtemizlik.com/hizmetlerimiz/panel-bakim" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.newtemizlik.com/hizmetlerimiz/panel-bakim" />
        <meta property="og:title" content="GES Panel Bakım ve Onarım İzleme Hizmeti | New Temizlik" />
        <meta property="og:description" content="GES santrallerinde proaktif bakım, termal kamera analizi ve performans izleme hizmetleri. Verim kayıplarını ve arızaları erkenden tespit ediyoruz." />
        <meta property="og:image" content="https://www.newtemizlik.com/ges-bakim-onarim-termal-analiz.jpeg" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GES Panel Bakım ve Onarım İzleme Hizmeti | New Temizlik" />
        <meta name="twitter:description" content="GES santrallerinde proaktif bakım, termal kamera analizi ve performans izleme hizmetleri. Verim kayıplarını ve arızaları erkenden tespit ediyoruz." />
        <meta name="twitter:image" content="https://www.newtemizlik.com/ges-bakim-onarim-termal-analiz.jpeg" />
      </Helmet>

      <Navbar />

      <PageHero
        title="Panel Bakım & Onarım İzleme"
        image="solar-panel.png"
        breadcrumbs={[
          { label: 'Ana Sayfa', path: '/' },
          { label: 'Hizmetlerimiz', path: '/hizmetlerimiz' },
          { label: 'Panel Bakım & Onarım İzleme' },
        ]}
      />

      <section style={{ background: 'var(--bg-body)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">

            <div className="w-full lg:w-1/2 overflow-hidden" style={{ borderRadius: '16px', aspectRatio: '4/3' }}>
              <img
                src={`${import.meta.env.BASE_URL}soma-gunes-enerjisi-santrali-uzman-bakim.webp`}
                alt="Güneş enerjisi santralinde bakım ve performans kontrol çalışması"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7FBF3A', display: 'block', marginBottom: '12px' }}>
                Hizmet Detayı
              </span>
              <h2 className="section-heading" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', marginBottom: '18px' }}>
                Proaktif Performans Yönetimi
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'var(--text-secondary)', marginBottom: '16px' }}>
                GES santrallerindeki verim kayıplarının büyük çoğunluğu erken müdahaleyle
                önlenebilir. Ancak sorunlar gözle görülür hale geldiğinde çoğunlukla
                aylarca kayıp yaşanmış olur.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'var(--text-secondary)', marginBottom: '28px' }}>
                Santral üretim verilerini sürekli izleyerek performans düşüşlerini anında
                tespit ediyoruz. Termal kamera taramaları, invertör kontrolleri ve
                elektrik ölçümleriyle sisteminizin tam kapasitede çalışmasını
                <strong style={{ color: 'var(--text-primary)' }}> proaktif bir yaklaşımla</strong> garanti ediyoruz.
              </p>

              <div
                style={{ padding: '14px 20px', background: 'rgba(127,191,58,0.08)', borderLeft: '3px solid #7FBF3A', borderRadius: '0 8px 8px 0', marginBottom: '28px' }}
              >
                <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '22px', fontWeight: 700, color: '#7FBF3A' }}>%15'e kadar</span>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', marginLeft: '10px' }}>kayıp önleme sağlıyoruz</span>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                {features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle size={16} style={{ color: '#7FBF3A', marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="tel:+905304738793"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '13px 28px', background: '#7FBF3A', color: '#fff',
                  fontSize: '14px', fontWeight: 600, borderRadius: '9999px',
                  textDecoration: 'none', letterSpacing: '0.04em',
                  boxShadow: '0 4px 15px rgba(127,191,58,0.3)',
                }}
              >
                Teklif Al <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
