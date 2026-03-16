import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Panel Temizlik Hizmeti',
    description:
      'Özel ekipmanlar ve uygun temizlik yöntemleri kullanarak güneş panellerinin yüzey temizliğini gerçekleştiriyoruz. Düzenli temizlik, panel veriminin korunmasına ve üretim kayıplarının azaltılmasına yardımcı olur.',
    img: 'endustriyel-gunes-paneli-yikama.jpeg',
    alt: 'GES sahasında profesyonel güneş paneli temizlik çalışması',
  },
  {
    title: 'Panel Bakım & Onarım İzleme',
    description:
      'Santral üretim verilerini inceleyerek performans düşüşlerini tespit ediyoruz. Planlı bakım ve kontroller ile sistemin düzenli ve verimli çalışmasına destek oluyoruz.',
    img: 'soma-gunes-enerjisi-santrali-uzman-bakim.webp',
    alt: 'Güneş enerjisi santralinde bakım ve performans kontrol çalışması',
  },
  {
    title: 'Temizlik Robot Makina Satışı',
    description:
      'Büyük ölçekli güneş enerji santralleri için panel temizlik robotları sunuyoruz. Otomatik temizlik sistemleri ile bakım süreçleri hızlanır ve iş gücü ihtiyacı azalır.',
    img: 'soma-ges-otonom-temizlik-robotu.jpeg',
    alt: 'GES sahasında kullanılan panel temizlik robotu',
  },
]

export default function Services() {
  return (
    <section
      id="hizmetler"
      className="scroll-mt-16 md:scroll-mt-20 py-20 md:py-28"
      style={{ background: 'var(--bg-alt)' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section header */}
        <div className="text-center mb-14">
          <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7FBF3A', display: 'block', marginBottom: '10px' }}>
            Hizmetlerimiz
          </span>
          <h2 className="section-heading" style={{ fontSize: 'clamp(26px, 4vw, 38px)' }}>
            GES Bakım ve Panel Temizlik Hizmetleri
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginTop: '14px', maxWidth: '560px', margin: '14px auto 0', lineHeight: 1.7 }}>
            Güneş enerji santrallerinde panel temizliği, bakım ve performans takibi hizmetleri sunuyoruz.
          </p>
          <div style={{ width: '50px', height: '3px', background: '#7FBF3A', margin: '16px auto 0' }} />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {services.map((service, i) => (
            <div
              key={i}
              className="section-card overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden" style={{ borderRadius: '10px 10px 0 0', aspectRatio: '16/10' }}>
                <img
                  src={`${import.meta.env.BASE_URL}${service.img}`}
                  alt={service.alt}
                  title={service.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ display: 'block' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '22px', fontWeight: 700, letterSpacing: '0.03em', color: 'var(--text-primary)', marginBottom: '10px' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)', flex: 1 }}>
                  {service.description}
                </p>
                <a
                  href="#iletisim"
                  className="inline-flex items-center gap-2 mt-6 font-semibold transition-colors duration-200"
                  style={{ fontSize: '13px', color: '#7FBF3A', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#6aaa2e')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#7FBF3A')}
                >
                  Detaylı Bilgi
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
