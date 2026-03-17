import { Helmet } from 'react-helmet-async'
import { ArrowRight, Target, Eye, Leaf, Users, ShieldCheck, Award } from 'lucide-react'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import PageHero from '../components/ui/PageHero'

const stats = [
  { value: '3 GWh', label: 'Kurumsal Referans' },
  { value: '100+', label: 'Yıkama Noktası' },
  { value: '81 İlde', label: 'Aktif Hizmet' },
  { value: '5+ Yıl', label: 'Sektör Deneyimi' },
]

const values = [
  {
    icon: Target,
    title: 'Sonuç Odaklılık',
    desc: 'Her projede ölçülebilir verim artışı hedefliyoruz. İşin sonunda üretim verisi konuşur.',
  },
  {
    icon: Leaf,
    title: 'Çevresel Sorumluluk',
    desc: 'Minimum su tüketimi ve su israfı yapmayan yöntemlerimizle çevreye duyarlı hizmet veriyoruz.',
  },
  {
    icon: ShieldCheck,
    title: 'Güvenlik Önce',
    desc: 'Tüm operasyonlarımız uluslararası İSG standartlarında ve tam sigorta kapsamında yürütülür.',
  },
  {
    icon: Users,
    title: 'Uzman Kadro',
    desc: 'Elektrik mühendisleri ve sertifikalı saha teknisyenlerinden oluşan deneyimli ekibimiz.',
  },
  {
    icon: Award,
    title: 'Kalite Güvencesi',
    desc: 'Tüm hizmetlerimiz firmamızın kalite garantisi altında, belgelenmiş süreçlerle sunulur.',
  },
  {
    icon: Eye,
    title: 'Şeffaf Raporlama',
    desc: 'Temizlik öncesi ve sonrası üretim karşılaştırması içeren detaylı raporlar sunuyoruz.',
  },
]

const collageImages = [
  { src: 'endustriyel-gunes-paneli-yikama.jpeg', alt: 'Endüstriyel güneş paneli yıkama' },
  { src: 'soma-ges-otonom-temizlik-robotu.jpeg', alt: 'Otonom temizlik robotu' },
  { src: 'ges-bakim-onarim-termal-analiz.jpeg', alt: 'Termal analiz ve bakım' },
  { src: 'soma-gunes-enerjisi-santrali-uzman-bakim.webp', alt: 'Uzman GES bakımı' },
]

export default function KurumsalPage() {
  return (
    <>
      <Helmet>
        <title>Kurumsal | New Temizlik — GES Temizlik ve Bakım Çözümleri</title>
        <meta name="description" content="New Temizlik hakkında: misyon, vizyon, değerlerimiz ve kurumsal kimliğimiz. Soma merkezli endüstriyel GES temizlik ve bakım hizmetleri." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />

      <PageHero
        title="Kurumsal"
        image="solar-panel.png"
        breadcrumbs={[
          { label: 'Ana Sayfa', path: '/' },
          { label: 'Kurumsal' },
        ]}
      />

      {/* ── Hakkımızda + Collage ── */}
      <section style={{ background: 'var(--bg-body)', padding: '90px 0' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left — text */}
            <div className="w-full lg:w-1/2">
              <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7FBF3A', display: 'block', marginBottom: '12px' }}>
                Biz Kimiz
              </span>
              <h2 className="section-heading" style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: 1.18, marginBottom: '20px' }}>
                Neden Sıradan Bir <br /> Temizlik Firması Değiliz?
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'var(--text-secondary)', marginBottom: '16px' }}>
                Güneş enerjisi; doğru bakımla yapıldığında en kârlı yatırımlardan biridir. New Temizlik olarak
                yalnızca panel yüzeyini temizlemiyoruz — sahayı bir mühendislik gözüyle inceliyor,
                verim kaynaklarını tespit ediyor ve çözüm üretiyoruz.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'var(--text-secondary)', marginBottom: '32px' }}>
                Başta Soma ve Manisa olmak üzere Ege ve İç Anadolu genelindeki yüzlerce GES sahasında
                edindiğimiz tecrübeyle, güneş paneli temizliğini bir maliyet değil; sürdürülebilir
                bir yatırım kalemi olarak konumlandırıyoruz.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-5">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '20px 22px',
                      background: 'var(--bg-card)',
                      borderRadius: '10px',
                      boxShadow: 'var(--shadow-sm)',
                      borderLeft: '3px solid #7FBF3A',
                    }}
                  >
                    <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, color: '#7FBF3A', lineHeight: 1, marginBottom: '4px' }}>
                      {s.value}
                    </p>
                    <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — collage */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-3" style={{ height: '480px' }}>
                <div className="flex flex-col gap-3">
                  <div className="overflow-hidden" style={{ borderRadius: '12px', flex: 1 }}>
                    <img
                      src={`${import.meta.env.BASE_URL}${collageImages[0].src}`}
                      alt={collageImages[0].alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500"
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                  <div className="overflow-hidden" style={{ borderRadius: '12px', flex: 1 }}>
                    <img
                      src={`${import.meta.env.BASE_URL}${collageImages[1].src}`}
                      alt={collageImages[1].alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500"
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="overflow-hidden" style={{ borderRadius: '12px', flex: 2 }}>
                    <img
                      src={`${import.meta.env.BASE_URL}${collageImages[2].src}`}
                      alt={collageImages[2].alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500"
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                  <div className="overflow-hidden" style={{ borderRadius: '12px', flex: 1 }}>
                    <img
                      src={`${import.meta.env.BASE_URL}${collageImages[3].src}`}
                      alt={collageImages[3].alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500"
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Misyon & Vizyon ── */}
      <section style={{ background: 'var(--bg-alt)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Misyon */}
            <div
              style={{
                background: 'var(--bg-card)',
                borderRadius: '14px',
                padding: '40px 36px',
                boxShadow: 'var(--shadow-sm)',
                borderTop: '4px solid #7FBF3A',
              }}
            >
              <div
                style={{
                  width: '52px', height: '52px', borderRadius: '12px',
                  background: 'rgba(127,191,58,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Target size={24} style={{ color: '#7FBF3A' }} />
              </div>
              <h2 className="section-heading" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', marginBottom: '14px' }}>
                Misyonumuz
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'var(--text-secondary)' }}>
                Güneş enerjisi santrallerini maksimum kapasitede çalıştırmak için
                bilim temelli, teknolojiyle desteklenmiş temizlik ve bakım çözümleri sunmak;
                müşterilerimizin yatırım getirisini artırırken çevresel sürdürülebilirliğe katkı sağlamak.
              </p>
            </div>

            {/* Vizyon */}
            <div
              style={{
                background: '#1a2332',
                borderRadius: '14px',
                padding: '40px 36px',
                borderTop: '4px solid #7FBF3A',
              }}
            >
              <div
                style={{
                  width: '52px', height: '52px', borderRadius: '12px',
                  background: 'rgba(127,191,58,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Eye size={24} style={{ color: '#7FBF3A' }} />
              </div>
              <h2 className="section-heading" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', marginBottom: '14px', color: '#f0ede6' }}>
                Vizyonumuz
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'rgba(240,237,230,0.7)' }}>
                Türkiye'nin yenilenebilir enerji dönüşümünde güvenilir mühendislik ortağı olmak;
                otonom teknolojiler ve veri analitiğiyle GES bakım sektörünü yeniden tanımlamak
                ve 81 ilde erişilebilir bir hizmet ağı kurmak.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Değerlerimiz ── */}
      <section style={{ background: 'var(--bg-body)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7FBF3A', display: 'block', marginBottom: '10px' }}>
              Kurumsal Değerler
            </span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>
              Çalışma Prensibimiz
            </h2>
            <div style={{ width: '50px', height: '3px', background: '#7FBF3A', margin: '16px auto 0' }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="section-card"
                style={{
                  padding: '28px 26px',
                  borderBottom: '4px solid transparent',
                  transition: 'box-shadow 0.3s, margin-top 0.3s, margin-bottom 0.3s, border-bottom-color 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 15px 50px var(--shadow-color)'
                  e.currentTarget.style.marginTop = '-8px'
                  e.currentTarget.style.marginBottom = '8px'
                  e.currentTarget.style.borderBottomColor = '#7FBF3A'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
                  e.currentTarget.style.marginTop = '0'
                  e.currentTarget.style.marginBottom = '0'
                  e.currentTarget.style.borderBottomColor = 'transparent'
                }}
              >
                <div
                  style={{
                    width: '52px', height: '52px', borderRadius: '10px',
                    background: '#edf7db',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <v.icon size={22} style={{ color: '#7FBF3A' }} />
                </div>
                <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '19px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px', letterSpacing: '0.02em' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--bg-alt)', padding: '80px 0' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', marginBottom: '16px' }}>
            Projenizi Birlikte Değerlendirelim
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '36px' }}>
            GES sahanız için ücretsiz keşif ve detaylı teklif almak üzere uzman ekibimizle iletişime geçin.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+905304738793"
              style={{
                padding: '13px 30px',
                background: '#7FBF3A',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '9999px',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                boxShadow: '0 4px 15px rgba(127,191,58,0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Hemen Ara
            </a>
            <a
              href="mailto:info@newgruptemizlik.com.tr"
              style={{
                padding: '13px 30px',
                background: 'transparent',
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '9999px',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                border: '1.5px solid var(--border-subtle)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              E-posta Gönder <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
