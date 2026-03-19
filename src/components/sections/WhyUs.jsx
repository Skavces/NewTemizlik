import { Zap, ShieldCheck, Wrench, CalendarCheck, Award, HeadphonesIcon, ArrowRight } from 'lucide-react'

const features = [
  { icon: Zap,             title: 'Veri Odaklı ROI Analizi',     desc: 'GES yıllık temizlik öncesi ve sonrası üretim artışını inverter verileriyle raporluyoruz.' },
  { icon: ShieldCheck,     title: 'ISG & Otonom Teknoloji',       desc: 'Sahada riskleri sıfıra indiren otonom temizlik robotlarımızla uluslararası İş Güvenliği standartlarındayız.' },
  { icon: Wrench,          title: 'Su İsrafı Yapmıyoruz',         desc: 'Minimum su tüketimiyle maksimum temizlik sağlayan yöntemlerimizle çevreye duyarlı hizmet veriyoruz.' },
  { icon: CalendarCheck,   title: 'Periyodik Bakım Planı',        desc: 'Mevsimsel tozlanma verilerine göre optimize edilmiş yıllık bakım sözleşmeleri sunuyoruz.' },
  { icon: Award,           title: 'Sertifikalı Uzman Kadrosu',    desc: 'Sadece temizlik değil, GES performans analizi. Her projede detaylı verim raporu teslim edilir.' },
  { icon: HeadphonesIcon,  title: '7/24 Kesintisiz İzleme',       desc: 'Olası arıza veya verim düşüklüğünde anında müdahale için sistemlerinizi sürekli izliyoruz.' },
]

function ServiceCard({ f }) {
  return (
    <div
      style={{
        background: 'var(--bg-card)',
        borderRadius: '10px',
        padding: '24px 22px 20px',
        boxShadow: 'var(--shadow-sm)',
        borderBottom: '4px solid transparent',
        transition: 'box-shadow 0.3s ease, margin-top 0.3s ease, margin-bottom 0.3s ease, border-bottom-color 0.3s ease',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 15px 50px var(--shadow-color)'
        e.currentTarget.style.marginTop = '-12px'
        e.currentTarget.style.marginBottom = '12px'
        e.currentTarget.style.borderBottomColor = '#7FBF3A'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
        e.currentTarget.style.marginTop = '0'
        e.currentTarget.style.marginBottom = '0'
        e.currentTarget.style.borderBottomColor = 'transparent'
      }}
    >
      {/* Icon */}
      <div style={{
        width: '60px', height: '60px', borderRadius: '8px',
        background: '#edf7db',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '16px', flexShrink: 0,
      }}>
        <f.icon style={{ width: '28px', height: '28px', color: '#7FBF3A' }} />
      </div>

      <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '19px', fontWeight: 700, letterSpacing: '0.03em', color: 'var(--text-primary)', marginBottom: '8px' }}>
        {f.title}
      </h3>

      <p style={{ fontSize: '13.5px', lineHeight: 1.7, color: 'var(--text-secondary)', margin: '0 0 16px', flex: 1 }}>
        {f.desc}
      </p>

      <a
        href="#iletisim"
        style={{ fontSize: '13.5px', fontWeight: 600, color: '#7FBF3A', textDecoration: 'none' }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
        onMouseLeave={e => (e.currentTarget.style.color = '#7FBF3A')}
      >
        Detaylı Bilgi »
      </a>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section id="hakkimizda" className="scroll-mt-16 md:scroll-mt-20 py-20 md:py-28" style={{ background: 'var(--bg-body)' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Desktop: 4-col grid ── */}
        <div
          className="hidden md:grid"
          style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}
        >
          {/* Intro cell — row 1 col 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: '16px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7FBF3A', display: 'block', marginBottom: '8px' }}>
              New Temizlik
            </span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', lineHeight: 1.2, marginBottom: '16px' }}>
              Neden Sıradan Bir Temizlik Firması Değiliz?
            </h2>
            <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '0' }}>
              GES santrallerinde enerji verimliliğini artırmak ve sürdürülebilirliği sağlamak adına profesyonel temizlik ve bakım çözümleri sunuyoruz.
            </p>
          </div>

          {/* Cards 1–3 */}
          <ServiceCard f={features[0]} />
          <ServiceCard f={features[1]} />
          <ServiceCard f={features[2]} />

          {/* Cards 4–6 */}
          <ServiceCard f={features[3]} />
          <ServiceCard f={features[4]} />
          <ServiceCard f={features[5]} />

          {/* CTA cell */}
          <div
            style={{
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            <h3 className="section-heading" style={{ fontSize: 'clamp(20px, 2vw, 28px)', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Veriminizin Olduğu Her Yerdeyiz
            </h3>
            <a
              href="/hizmetlerimiz"
              className="inline-flex items-center gap-2"
              style={{
                background: '#7FBF3A',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 600,
                padding: '11px 20px',
                borderRadius: '9999px',
                textDecoration: 'none',
                alignSelf: 'flex-start',
                letterSpacing: '0.04em',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#6aaa2e')}
              onMouseLeave={e => (e.currentTarget.style.background = '#7FBF3A')}
            >
              <ArrowRight size={14} /> Hizmetlerimiz
            </a>
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="md:hidden">
          <div style={{ marginBottom: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7FBF3A', display: 'block', marginBottom: '8px' }}>
              New Temizlik
            </span>
            <h2 className="section-heading" style={{ fontSize: '28px', lineHeight: 1.2, marginBottom: '12px' }}>
              Neden Sıradan Bir Temizlik Firması Değiliz?
            </h2>
            <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
              GES santrallerinde enerji verimliliğini artırmak adına profesyonel temizlik ve bakım çözümleri sunuyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => <ServiceCard key={i} f={f} />)}
          </div>
        </div>

      </div>
    </section>
  )
}
