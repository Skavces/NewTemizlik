import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import PageHero from '../components/ui/PageHero'

const productPhotos = [
  { src: 'ges-panel-temizlik-robotu-saha-uygulamasi.jpeg',         alt: 'GES panel temizlik robotu saha uygulaması' },
  { src: 'ges-panel-temizlik-robotu-saha-calismasi.jpeg',          alt: 'GES panel temizlik robotu saha çalışması' },
  { src: 'ges-otonom-temizlik-robotu-ray-sistemi.jpeg',            alt: 'GES otonom temizlik robotu ray sistemi' },
  { src: 'leopardust-ges-panel-temizlik-robotu-saha.jpeg',         alt: 'LeopardDust GES panel temizlik robotu sahada' },
  { src: 'gunes-enerjisi-santrali-otomatik-ray-temizlik-sistemi.jpeg', alt: 'Güneş enerjisi santrali otomatik ray temizlik sistemi' },
  { src: 'gunes-paneli-manuel-temizlik-fircasi-makinasi.jpeg',     alt: 'Güneş paneli manuel temizlik fırçası makinası' },
  { src: 'gunes-paneli-cift-diskli-elektrikli-temizlik-fircasi.jpeg', alt: 'Güneş paneli çift diskli elektrikli temizlik fırçası' },
  { src: 'gunes-paneli-uzatmali-cift-fircali-temizlik-makinasi.jpeg', alt: 'Güneş paneli uzatmalı çift fırçalı temizlik makinası' },
  { src: 'gunes-paneli-elektrikli-temizlik-fircasi-seri-uretim.jpeg', alt: 'Güneş paneli elektrikli temizlik fırçası seri üretim' },
  { src: 'ges-panel-temizlik-makinasi-cesitleri.jpeg',             alt: 'GES panel temizlik makinası çeşitleri' },
  { src: 'gunes-paneli-sulama-temizlik-boru-sistemi.jpeg',         alt: 'Güneş paneli sulama temizlik boru sistemi' },
  { src: 'ges-temizlik-robotu-urun-aksesuarlari.jpeg',             alt: 'GES temizlik robotu ürün aksesuarları' },
  { src: 'ges-temizlik-robotu-uzaktan-kumandali-ozellikler.jpeg',  alt: 'GES temizlik robotu uzaktan kumandalı özellikler' },
]

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
        <title>GES Panel Temizlik Robotu ve Makina Satışı | New Temizlik</title>
        <meta name="description" content="Büyük ölçekli GES santralleri için otonom panel temizlik robotları ve makinaları. Su tüketimini minimize eden, IoT destekli, uzaktan yönetilebilen sistemler." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.newtemizlik.com/hizmetlerimiz/robot-satisi" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.newtemizlik.com/hizmetlerimiz/robot-satisi" />
        <meta property="og:title" content="GES Panel Temizlik Robotu ve Makina Satışı | New Temizlik" />
        <meta property="og:description" content="Büyük ölçekli GES santralleri için otonom panel temizlik robotları ve makinaları. Su tüketimini minimize eden, IoT destekli, uzaktan yönetilebilen sistemler." />
        <meta property="og:image" content="https://www.newtemizlik.com/soma-ges-otonom-temizlik-robotu.jpeg" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GES Panel Temizlik Robotu ve Makina Satışı | New Temizlik" />
        <meta name="twitter:description" content="Büyük ölçekli GES santralleri için otonom panel temizlik robotları ve makinaları. Su tüketimini minimize eden, IoT destekli, uzaktan yönetilebilen sistemler." />
        <meta name="twitter:image" content="https://www.newtemizlik.com/soma-ges-otonom-temizlik-robotu.jpeg" />
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

      {/* ── Ürün Fotoğrafları ── */}
      <section style={{ background: 'var(--bg-alt)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7FBF3A', display: 'block', marginBottom: '10px' }}>
              Ürün Galerisi
            </span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 3.5vw, 34px)' }}>
              Ürünlerimizin Fotoğrafları
            </h2>
            <div style={{ width: '50px', height: '3px', background: '#7FBF3A', margin: '16px auto 0' }} />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {productPhotos.map((photo, i) => (
              <div
                key={i}
                style={{ borderRadius: '10px', overflow: 'hidden', width: 'calc(25% - 9px)', minWidth: '160px', aspectRatio: '1/1', background: 'var(--bg-card)', flexShrink: 0 }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${photo.src}`}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300"
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
