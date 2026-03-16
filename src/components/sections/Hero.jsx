import { useState, useEffect, useCallback, useRef } from 'react'
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, FolderCheck, CalendarDays, ThumbsUp, Users, Sun } from 'lucide-react'

const infoStats = [
  { icon: FolderCheck,  num: '195+', label: 'Tamamlanan Proje',    desc: 'Türkiye genelinde başarıyla teslim edilen GES projeleri.' },
  { icon: CalendarDays, num: '5+',   label: 'Yıllık Saha Deneyimi', desc: 'Güneş enerji santrallerinde kesintisiz saha tecrübesi.' },
  { icon: ThumbsUp,     num: '%95',  label: 'Müşteri Memnuniyeti',  desc: 'Hizmet sonrası müşteri memnuniyet oranımız.' },
  { icon: Users,        num: '17+',  label: 'Uzman Personel',       desc: 'Sertifikalı mühendis ve teknik uzmanlardan oluşan kadro.' },
]

const base = import.meta.env.BASE_URL

const mediaItems = [
  {
    type: 'video',
    src: `${base}otonom-panel-yikama-robotu-test.mp4`,
    alt: 'Soma GES otonom panel yıkama robotu saha testi ve performans analizi',
  },
  {
    type: 'video',
    src: `${base}soma-endustriyel-temizlik-makinesi.mp4`,
    alt: 'Endüstriyel güneş santralleri için yapay zeka destekli otonom temizlik makinesi',
  },
  {
    type: 'video',
    src: `${base}ges-temizlik-referans-uygulamasi-1.mp4`,
    alt: 'Türkiye geneli güneş enerjisi santralleri verimlilik artırıcı profesyonel temizlik referansı',
  },
]


export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const videoRefs = useRef([])

  const goTo = useCallback(
    (index) => {
      if (transitioning) return
      setTransitioning(true)
      setCurrent(index)
      setTimeout(() => setTransitioning(false), 600)
    },
    [transitioning]
  )

  const next = useCallback(() => goTo((current + 1) % mediaItems.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + mediaItems.length) % mediaItems.length), [current, goTo])

  useEffect(() => {
    if (mediaItems[current].type === 'video') return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [current, next])

  useEffect(() => {
    videoRefs.current.forEach((el, i) => {
      if (!el) return
      if (i === current) {
        el.currentTime = 0
        el.play().catch(() => {})
      } else {
        el.pause()
      }
    })
  }, [current])

  return (
    <section
      className="relative w-full"
      style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}
    >
      {/* Background videos */}
      <div className="absolute inset-0 z-0">
        {mediaItems.map((item, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{ opacity: i === current ? 1 : 0, transition: 'opacity 0.7s ease-in-out' }}
          >
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
            ) : (
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                src={item.src}
                aria-label={item.alt}
                title={item.alt}
                className="w-full h-full object-cover"
                muted playsInline
                preload={i === current ? 'auto' : 'metadata'}
                onEnded={() => { if (i === current) next() }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.25) 100%)' }} />

      {/* Bottom gradient for controls */}
      <div className="absolute bottom-0 left-0 right-0 z-[1]" style={{ height: '200px', background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)' }} />

      {/* Main content */}
      <div className="relative z-[2] flex-1 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-28 md:py-36 w-full">
          <div style={{ maxWidth: '620px' }}>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2" style={{ background: 'rgba(127,191,58,0.15)', border: '1px solid rgba(127,191,58,0.35)', borderRadius: '9999px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7FBF3A', display: 'block', flexShrink: 0 }} />
              <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7FBF3A' }}>
                GES Temizlik &amp; Bakım Çözümleri
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: 'clamp(36px, 7vw, 88px)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '0.03em',
                color: '#ffffff',
                margin: '0 0 20px',
              }}
            >
              Güneş Paneli<br />
              <span style={{ color: '#7FBF3A' }}>Profesyonel</span><br />
              Temizliği
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(14px, 1.2vw, 16px)',
                fontWeight: 400,
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.65)',
                maxWidth: '480px',
                marginBottom: '36px',
              }}
            >
              Otonom robotlar ve termal analiz destekli profesyonel bakım hizmetleri ile
              GES sahalarında maksimum verim. Kirli panel kayıplarını sıfıra indirin.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#iletisim"
                className="inline-flex items-center gap-2.5 transition-all duration-200"
                style={{
                  padding: '13px 28px',
                  background: '#7FBF3A',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  borderRadius: '9999px',
                  boxShadow: '0 4px 20px rgba(127,191,58,0.4)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#6aaa2e'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(127,191,58,0.5)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#7FBF3A'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(127,191,58,0.4)' }}
              >
                Ücretsiz Keşif Talep Et
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#hizmetler"
                className="inline-flex items-center gap-2 transition-all duration-200"
                style={{
                  padding: '13px 24px',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '14px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255,255,255,0.25)',
                  backdropFilter: 'blur(4px)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}
              >
                Hizmetleri Keşfet
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Prev arrow — left edge, vertically centered */}
      <button
        onClick={prev}
        aria-label="Önceki"
        className="hidden md:flex absolute z-[3] items-center justify-center transition-all duration-200 cursor-pointer"
        style={{ left: '16px', top: '50%', transform: 'translateY(-50%)', width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)', background: 'rgba(0,0,0,0.35)', color: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)' }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#7FBF3A'; e.currentTarget.style.borderColor = '#7FBF3A'; e.currentTarget.style.color = '#fff' }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.35)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Next arrow — right edge, vertically centered */}
      <button
        onClick={next}
        aria-label="Sonraki"
        className="hidden md:flex absolute z-[3] items-center justify-center transition-all duration-200 cursor-pointer"
        style={{ right: '16px', top: '50%', transform: 'translateY(-50%)', width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)', background: 'rgba(0,0,0,0.35)', color: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)' }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#7FBF3A'; e.currentTarget.style.borderColor = '#7FBF3A'; e.currentTarget.style.color = '#fff' }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.35)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators — bottom center */}
      <div
        className="absolute z-[3] flex items-center gap-2 bottom-[300px] md:bottom-[120px]"
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      >
        {mediaItems.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Medya ${i + 1}`}
            className="h-1.5 cursor-pointer border-none p-0 transition-all duration-300"
            style={{ borderRadius: '9999px', width: i === current ? '28px' : '7px', background: i === current ? '#7FBF3A' : 'rgba(255,255,255,0.4)' }}
          />
        ))}
      </div>

      {/* Floating info card — straddles hero & next section */}
      <div className="relative z-[5]" style={{ marginBottom: '-56px' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Desktop */}
          <div
            className="hidden md:flex"
            style={{ background: 'var(--bg-card)', borderRadius: '16px', boxShadow: '0 8px 40px rgba(0,0,0,0.18)', overflow: 'hidden' }}
          >
            {/* Left intro cell */}
            <div style={{ padding: '28px 28px', minWidth: '220px', maxWidth: '240px', borderRight: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
              <Sun style={{ position: 'absolute', right: '-16px', bottom: '-16px', width: '90px', height: '90px', color: '#7FBF3A', opacity: 0.07 }} />
              <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '19px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.25, marginBottom: '10px' }}>
                Enerji Veriminizi Zirveye Taşıyın!
              </h3>
              <p style={{ fontSize: '13.5px', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>
                Kirli paneller enerji üretim verimliliğini %30 azaltmaktadır.
              </p>
            </div>

            {/* Stat columns */}
            {infoStats.map((s, i) => (
              <div
                key={i}
                style={{ flex: 1, padding: '28px 22px', borderRight: i < infoStats.length - 1 ? '1px solid var(--border-subtle)' : 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}
              >
                <s.icon style={{ width: '28px', height: '28px', color: '#7FBF3A', strokeWidth: 1.5, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 'clamp(26px, 2.5vw, 34px)', fontWeight: 700, color: '#7FBF3A', lineHeight: 1 }}>
                  {s.num}
                </span>
                <h4 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', margin: 0, letterSpacing: '0.02em' }}>
                  {s.label}
                </h4>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: 2×2 grid */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            {infoStats.map((s, i) => (
              <div
                key={i}
                style={{ background: 'var(--bg-card)', borderRadius: '12px', padding: '18px 16px', boxShadow: '0 4px 20px rgba(0,0,0,0.14)', borderBottom: '3px solid #7FBF3A', display: 'flex', flexDirection: 'column', gap: '4px' }}
              >
                <s.icon style={{ width: '22px', height: '22px', color: '#7FBF3A', strokeWidth: 1.5 }} />
                <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '28px', fontWeight: 700, color: '#7FBF3A', lineHeight: 1 }}>
                  {s.num}
                </span>
                <h4 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                  {s.label}
                </h4>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}
