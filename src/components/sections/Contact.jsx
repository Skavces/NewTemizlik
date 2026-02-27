import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import AnimatedContent from '../reactbits/AnimatedContent'
import GradientText from '../reactbits/GradientText'
import { useTheme } from '../../context/useTheme'

const contactInfo = [
  { icon: MapPin, label: 'Adres', value: 'Atatürk Mah. İzgin Sk. No:4 Soma/Manisa' },
  { icon: Phone, label: 'Telefon', value: '+90 536 883 1994' },
  { icon: Mail, label: 'E-posta', value: 'info@newgruptemizlik.com.tr' },
  { icon: Clock, label: 'Çalışma Saatleri', value: 'Pzt – Cmt: 09:00 – 18:00, Pazar: Kapalı' },
]

export default function Contact() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="iletisim" className="relative min-h-screen flex flex-col justify-center py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] ${isDark ? 'bg-primary/5' : 'bg-primary/3'}`} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <AnimatedContent distance={40} duration={0.7}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
              style={{ background: 'var(--badge-bg)', border: '1px solid var(--badge-border)' }}>
              <span className="text-primary text-sm font-medium">İletişim</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              <GradientText colors={isDark ? ['#fff', '#1F6EC7', '#fff'] : ['#0f172a', '#1F6EC7', '#0f172a']} animationSpeed={6}>
                Bize Ulaşın
              </GradientText>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Projeleriniz ve detaylı bilgi için iletişim kanallarımızdan bize ulaşabilirsiniz.
            </p>
            <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-primary to-accent mx-auto" />
          </div>
        </AnimatedContent>

        <div className="max-w-5xl mx-auto">
          <AnimatedContent distance={50} duration={0.7} delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Info */}
              <div className="space-y-4 flex flex-col justify-center">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 rounded-2xl theme-card transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-faint)' }}>{item.label}</p>
                      <p className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-full min-h-[350px]" style={{ border: '1px solid var(--border-subtle)' }}>
                <iframe
                  title="Soma, Manisa Harita"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.5!2d27.6033488!3d39.1871673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b761223baac18d%3A0xec7d0d10a31330b9!2zQXRhdMO8cmssIMSwemdpbiBTay4gTm86NCwgNDU1MTAgU29tYS9NYW5pc2E!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}
