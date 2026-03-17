import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import PageHero from '../components/ui/PageHero'

const features = [
  'Su israfı yapmadan minimum su tüketimiyle etkili temizlik',
  'Uzaktan izleme ve kontrol paneli (IoT entegrasyonu)',
  'Saha koşullarına göre özelleştirilebilir ray sistemleri',
  'Düşük işletme maliyeti ve yüksek temizlik kapasitesi',
  'Kurulum, operatör eğitimi ve 2 yıl teknik destek garantisi',
  'Büyük ölçekli sahalar için maliyet-etkin otomasyon çözümü',
]

export default function RobotSatisPage() {
  return (
    <>
      <Helmet>
        <title>Temizlik Robot & Makina Satışı | New Temizlik</title>
        <meta name="description" content="Büyük ölçekli GES santralleri için otonom panel temizlik robotları. Su tüketimini minimize eden, uzaktan yönetilebilen sistemler." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />

      <PageHero
        title="Temizlik Robot & Makina Satışı"
        image="solar-panel.png"
        breadcrumbs={[
          { label: 'Ana Sayfa', path: '/' },
          { label: 'Hizmetlerimiz', path: '/hizmetlerimiz' },
          { label: 'Robot & Makina Satışı' },
        ]}
      />

      <section style={{ background: 'var(--bg-body)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="w-full lg:w-1/2 overflow-hidden" style={{ borderRadius: '16px', aspectRatio: '4/3' }}>
              <img
                src={`${import.meta.env.BASE_URL}soma-ges-otonom-temizlik-robotu.jpeg`}
                alt="GES sahasında kullanılan otonom panel temizlik robotu"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7FBF3A', display: 'block', marginBottom: '12px' }}>
                Hizmet Detayı
              </span>
              <h2 className="section-heading" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', marginBottom: '18px' }}>
                Otonom Temizlik Teknolojileri
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'var(--text-secondary)', marginBottom: '16px' }}>
                Büyük ölçekli GES sahalarında geleneksel temizlik yöntemleri hem maliyetli
                hem de zaman alıcıdır. Otonom robot sistemlerimiz bu sorunu kökten çözüyor:
                daha az insan gücü, daha az su, daha fazla verim.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'var(--text-secondary)', marginBottom: '28px' }}>
                Saha geometrinize ve panel dizilimine göre özelleştirilen ray sistemi
                üzerinde hareket eden robotlarımız, uzaktan izlenebilir ve programlanabilir
                yapısıyla
                <strong style={{ color: 'var(--text-primary)' }}> 7/24 kesintisiz temizlik</strong> imkânı sunar.
              </p>

              <div
                style={{ padding: '14px 20px', background: 'rgba(127,191,58,0.08)', borderLeft: '3px solid #7FBF3A', borderRadius: '0 8px 8px 0', marginBottom: '28px' }}
              >
                <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '22px', fontWeight: 700, color: '#7FBF3A' }}>%60'a kadar</span>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', marginLeft: '10px' }}>iş gücü tasarrufu sağlıyoruz</span>
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
