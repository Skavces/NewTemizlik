import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import PageHero from '../components/ui/PageHero'

const features = [
  'İnvertör verisi ile sıcak nokta (hotspot) tespiti',
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
        <meta name="description" content="GES santrallerinde proaktif bakım, termal analiz ve performans izleme hizmetleri. Hotspot tespiti ve invertör kontrolüyle verim kayıplarını ve arızaları erkenden önlüyoruz." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.newtemizlik.com/hizmetlerimiz/panel-bakim" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.newtemizlik.com/hizmetlerimiz/panel-bakim" />
        <meta property="og:title" content="GES Panel Bakım ve Onarım İzleme Hizmeti | New Temizlik" />
        <meta property="og:description" content="GES santrallerinde proaktif bakım, termal analiz ve performans izleme hizmetleri. Hotspot tespiti ve invertör kontrolüyle verim kayıplarını ve arızaları erkenden önlüyoruz." />
        <meta property="og:image" content="https://www.newtemizlik.com/ges-bakim-onarim-termal-analiz.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="800" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GES Panel Bakım ve Onarım İzleme Hizmeti | New Temizlik" />
        <meta name="twitter:description" content="GES santrallerinde proaktif bakım, termal analiz ve performans izleme hizmetleri. Hotspot tespiti ve invertör kontrolüyle verim kayıplarını ve arızaları erkenden önlüyoruz." />
        <meta name="twitter:image" content="https://www.newtemizlik.com/ges-bakim-onarim-termal-analiz.jpeg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.newtemizlik.com/" },
            { "@type": "ListItem", "position": 2, "name": "Hizmetlerimiz", "item": "https://www.newtemizlik.com/hizmetlerimiz" },
            { "@type": "ListItem", "position": 3, "name": "Panel Bakım & Onarım İzleme", "item": "https://www.newtemizlik.com/hizmetlerimiz/panel-bakim" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "GES bakımı ne zaman yapılmalı?",
              "acceptedAnswer": { "@type": "Answer", "text": "Güneş enerji santrallerinde bakım, yılda en az iki kez — ilkbahar ve sonbahar dönemlerinde — yapılmalıdır. Üretim verilerinde ani düşüşler veya invertör alarmları yaşandığında ise beklemeden teknik müdahale talep edilmelidir. New Temizlik olarak yıllık bakım sözleşmesi kapsamında düzenli periyodik kontrol sağlıyoruz." }
            },
            {
              "@type": "Question",
              "name": "Hotspot nedir ve GES'e zararı nedir?",
              "acceptedAnswer": { "@type": "Answer", "text": "Hotspot (sıcak nokta), bir güneş panelinde hasarlı veya gölgeli hücrenin aşırı ısınmasıyla oluşan bölgesel sıcaklık yükselmesidir. Tespit edilmezse panel kalıcı olarak hasar görür, yangın riski oluşabilir ve komşu paneller de etkilenebilir. Termal kamera analizi ile hotspot'lar gözle görülmeden erken aşamada belirlenir." }
            },
            {
              "@type": "Question",
              "name": "Yıllık bakım sözleşmesi neleri kapsar?",
              "acceptedAnswer": { "@type": "Answer", "text": "New Temizlik'in yıllık GES bakım sözleşmesi; periyodik performans izleme, invertör ve DC kablo hat kontrolleri, sigorta ve montaj noktası denetimleri, termal kamera analizi, dijital raporlama ve arıza durumlarında öncelikli müdahale garantisini kapsamaktadır." }
            },
            {
              "@type": "Question",
              "name": "GES bakımı yapılmazsa ne olur?",
              "acceptedAnswer": { "@type": "Answer", "text": "Düzenli bakım yapılmayan GES santrallerinde invertör arızaları, panel degradasyonu, bağlantı noktalarında korozyon ve hotspot kaynaklı yangın riskleri ortaya çıkabilir. Proaktif bakımla bu sorunların büyük çoğunluğu ortaya çıkmadan önlenir, santralin ömrü uzar." }
            }
          ]
        })}</script>
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
                tespit ediyoruz. İnvertör kontrolleri ve
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

      {/* SSS */}
      <section style={{ background: 'var(--bg-alt)', padding: '80px 0' }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7FBF3A', display: 'block', marginBottom: '10px' }}>
              Merak Edilenler
            </span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 3.5vw, 34px)' }}>
              GES Bakım ve İzleme Hakkında SSS
            </h2>
            <div style={{ width: '50px', height: '3px', background: '#7FBF3A', margin: '16px auto 0' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                q: 'GES bakımı ne zaman yapılmalı?',
                a: 'Güneş enerji santrallerinde bakım, yılda en az iki kez — ilkbahar ve sonbahar dönemlerinde — yapılmalıdır. Üretim verilerinde ani düşüşler veya invertör alarmları yaşandığında ise beklemeden teknik müdahale talep edilmelidir. New Temizlik olarak yıllık bakım sözleşmesi kapsamında düzenli periyodik kontrol sağlıyoruz.',
              },
              {
                q: 'Hotspot nedir ve GES\'e zararı nedir?',
                a: 'Hotspot (sıcak nokta), bir güneş panelinde hasarlı veya gölgeli hücrenin aşırı ısınmasıyla oluşan bölgesel sıcaklık yükselmesidir. Tespit edilmezse panel kalıcı olarak hasar görür, yangın riski oluşabilir ve komşu paneller de etkilenebilir. Termal kamera analizi ile hotspot\'lar gözle görülmeden erken aşamada belirlenir.',
              },
              {
                q: 'Yıllık bakım sözleşmesi neleri kapsar?',
                a: 'New Temizlik\'in yıllık GES bakım sözleşmesi; periyodik performans izleme, invertör ve DC kablo hat kontrolleri, sigorta ve montaj noktası denetimleri, termal kamera analizi, dijital raporlama ve arıza durumlarında öncelikli müdahale garantisini kapsamaktadır.',
              },
              {
                q: 'GES bakımı yapılmazsa ne olur?',
                a: 'Düzenli bakım yapılmayan GES santrallerinde invertör arızaları, panel degradasyonu, bağlantı noktalarında korozyon ve hotspot kaynaklı yangın riskleri ortaya çıkabilir. Proaktif bakımla bu sorunların büyük çoğunluğu ortaya çıkmadan önlenir, santralin ömrü uzar.',
              },
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--bg-card)', borderRadius: '12px', padding: '24px 28px', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '10px' }}>{item.q}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>{item.a}</p>
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
