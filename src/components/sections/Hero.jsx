import { useState, useEffect, useCallback } from 'react'
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import BlurText from '../reactbits/BlurText'
import GradientText from '../reactbits/GradientText'
import AnimatedContent from '../reactbits/AnimatedContent'


const base = import.meta.env.BASE_URL

const mediaItems = [
  { type: 'video', src: `${base}media-7.mp4` },
  { type: 'image', src: `${base}media-1.jpeg` },
  { type: 'image', src: `${base}media-2.jpeg` },
  { type: 'video', src: `${base}media-3.mp4` },
  { type: 'video', src: `${base}media-4.mp4` },
  { type: 'video', src: `${base}media-5.mp4` },
  { type: 'video', src: `${base}media-6.mp4` },
]

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  duration: `${6 + Math.random() * 8}s`,
  delay: `${Math.random() * 5}s`,
  size: `${2 + Math.random() * 3}px`,
  opacity: 0.2 + Math.random() * 0.4,
}))

function ParticleField() {
  return (
    <div className="hero-particles">
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning])

  const next = useCallback(() => {
    goTo((current + 1) % mediaItems.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + mediaItems.length) % mediaItems.length)
  }, [current, goTo])

  useEffect(() => {
    if (mediaItems[current].type === 'video') return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [current, next])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden theme-transition"
    >
      {/* Full-screen background media */}
      <div className="absolute inset-0 z-0">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-600 ease-in-out
              ${index === current
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
              }`}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={`Proje ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                muted
                playsInline
                autoPlay={index === current}
                onEnded={() => {
                  if (index === current) next()
                }}
                ref={(el) => {
                  if (el) {
                    if (index === current) {
                      el.currentTime = 0
                      el.play().catch(() => {})
                    } else {
                      el.pause()
                    }
                  }
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-1 bg-black/55" />

      {/* Particles */}
      <div className="relative z-2">
        <ParticleField />
      </div>

      <div className="relative z-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        {/* Text – centered */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <BlurText
            text="Profesyonel Temizlik Çözümleri"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-white drop-shadow-lg"
            delay={120}
            animateBy="words"
          />

          <AnimatedContent distance={30} duration={0.8} delay={0.6}>
            <p className="text-lg md:text-xl mb-4 leading-relaxed">
              <GradientText
                colors={['#1F6EC7', '#7FBF3A', '#1F6EC7', '#7FBF3A']}
                animationSpeed={4}
                className="text-lg md:text-xl font-semibold"
              >
                Güneş Paneli • Robotik Çözümler • Endüstriyel Bakım
              </GradientText>
            </p>
          </AnimatedContent>

          <AnimatedContent distance={20} duration={0.6} delay={0.8}>
            <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto text-white/80 drop-shadow">
              Güneş paneli temizliğinden robotik çözümlere, endüstriyel bakım hizmetlerinden izleme sistemlerine kadar
              kapsamlı ve güvenilir temizlik hizmetleri sunuyoruz.
            </p>
          </AnimatedContent>

          <AnimatedContent distance={20} duration={0.6} delay={1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="#iletisim"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-xl
                  bg-linear-to-r from-primary to-primary-dark text-white font-semibold text-lg
                  shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40
                  hover:-translate-y-1 transition-all duration-300"
              >
                Teklif Al
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#hizmetler"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg
                  hover:-translate-y-1 transition-all duration-300
                  border border-white/30 text-white/90 hover:bg-white/10"
              >
                Hizmetleri İncele
              </a>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={15} duration={0.5} delay={1.2}>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/60">
              {[
                { label: '500+ Proje', color: 'bg-accent' },
                { label: '10+ Yıl Deneyim', color: 'bg-primary' },
                { label: '%100 Memnuniyet', color: 'bg-accent' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${item.color}`} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </div>

      {/* Prev/Next arrows – positioned on the section */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200 cursor-pointer border border-white/15"
        aria-label="Önceki"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200 cursor-pointer border border-white/15"
        aria-label="Sonraki"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-4 flex gap-2.5">
        {mediaItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer
              ${index === current
                ? 'w-10 bg-linear-to-r from-primary to-accent'
                : 'w-2.5 bg-white/30 hover:bg-white/50'
              }`}
            aria-label={`Medya ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <a href="#hizmetler" className="absolute bottom-6 left-1/2 -translate-x-1/2 z-4 flex flex-col items-center gap-1 text-white/60 hover:text-accent transition-colors" aria-label="Aşağı kaydır">
        <span className="text-xs font-medium">Keşfet</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  )
}
