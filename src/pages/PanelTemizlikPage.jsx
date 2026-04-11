import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import PageHero from '../components/ui/PageHero'

const features = [
  'Su israfı yapmadan, kontrollü su kullanımıyla leke bırakmayan temizlik',
  'Panel yüzeyine zarar vermeyen yumuşak fırça sistemleri',
  'Saha büyüklüğüne göre optimize edilmiş ekip ve ekipman',
  'Temizlik öncesi ve sonrası üretim karşılaştırma raporu',
  'Mevsimsel tozlanma verilerine göre planlı temizlik takvimi',
  'ISG standartlarına uygun güvenli saha operasyonu',
]

export default function PanelTemizlikPage() {
  return (
    <>
      <Helmet>
        <title>Güneş Paneli Temizliği | GES Solar Panel Yıkama Hizmeti | New Temizlik</title>
        <meta name="description" content="Profesyonel güneş paneli temizliği ve GES solar panel yıkama hizmeti. Su israfı yapmadan, özel ekipmanlarla verim kaybını önlüyor, üretim raporuyla sonucu belgeliyoruz." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.newtemizlik.com/hizmetlerimiz/panel-temizlik" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.newtemizlik.com/hizmetlerimiz/panel-temizlik" />
        <meta property="og:title" content="Güneş Paneli Temizliği | GES Solar Panel Yıkama Hizmeti | New Temizlik" />
        <meta property="og:description" content="Profesyonel güneş paneli temizliği ve GES solar panel yıkama hizmeti. Su israfı yapmadan, özel ekipmanlarla verim kaybını önlüyor, üretim raporuyla sonucu belgeliyoruz." />
        <meta property="og:image" content="https://www.newtemizlik.com/endustriyel-gunes-paneli-yikama.jpeg" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Güneş Paneli Temizliği | GES Solar Panel Yıkama Hizmeti | New Temizlik" />
        <meta name="twitter:description" content="Profesyonel güneş paneli temizliği ve GES solar panel yıkama hizmeti. Su israfı yapmadan, özel ekipmanlarla verim kaybını önlüyor, üretim raporuyla sonucu belgeliyoruz." />
        <meta name="twitter:image" content="https://www.newtemizlik.com/endustriyel-gunes-paneli-yikama.jpeg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Güneş panelleri ne sıklıkla temizlenmeli?",
              "acceptedAnswer": { "@type": "Answer", "text": "GES santrallerinde panel temizliği, bölgenin iklim koşullarına ve çevresel kirlilik düzeyine göre değişmekle birlikte genellikle yılda 2-4 kez önerilmektedir. Manisa, İzmir ve İç Anadolu gibi toz yoğunluğu yüksek bölgelerde mevsim geçişlerinde yapılan temizlikler verim artışını maksimuma çıkarır." }
            },
            {
              "@type": "Question",
              "name": "Kirli güneş paneli ne kadar verim kaybına yol açar?",
              "acceptedAnswer": { "@type": "Answer", "text": "Araştırmalar, temizlenmemiş güneş panellerinin toz, kir ve kuş pisliği birikimi nedeniyle %15 ile %30 arasında verim kaybına uğradığını göstermektedir. Endüstriyel bölgelerin yakınındaki GES sahalarında bu kayıp daha da yüksek olabilmektedir." }
            },
            {
              "@type": "Question",
              "name": "Panel temizliği sırasında sistem kapatılmalı mı?",
              "acceptedAnswer": { "@type": "Answer", "text": "Güvenli bir GES panel temizliği için sistem DC tarafı itibarıyla devre dışı bırakılmalıdır. New Temizlik ekiplerimiz ISG standartlarına uygun olarak tüm güvenlik protokollerini eksiksiz uygular; sistem kapatma ve açma işlemleri de hizmet kapsamına dahildir." }
            },
            {
              "@type": "Question",
              "name": "Hangi temizlik yöntemini kullanıyorsunuz?",
              "acceptedAnswer": { "@type": "Answer", "text": "Panel yüzeyine zarar vermemek için yumuşak fırça sistemleri ve kontrollü saf su kullanıyoruz. Kimyasal kullanmıyor, yüksek basınçlı su ile panel yüzeyini aşındırmıyoruz. Temizlik sonrası leke bırakmayan deiyonize su tercih edilmektedir." }
            }
          ]
        })}</script>
      </Helmet>

      <Navbar />

      <PageHero
        title="Panel Temizlik Hizmeti"
        image="solar-panel.png"
        breadcrumbs={[
          { label: 'Ana Sayfa', path: '/' },
          { label: 'Hizmetlerimiz', path: '/hizmetlerimiz' },
          { label: 'Panel Temizlik Hizmeti' },
        ]}
      />

      {/* Ana içerik */}
      <section style={{ background: 'var(--bg-body)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="w-full lg:w-1/2 overflow-hidden" style={{ borderRadius: '16px', aspectRatio: '4/3' }}>
              <img
                src={`${import.meta.env.BASE_URL}endustriyel-gunes-paneli-yikama.jpeg`}
                alt="GES sahasında profesyonel güneş paneli temizlik çalışması"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7FBF3A', display: 'block', marginBottom: '12px' }}>
                Hizmet Detayı
              </span>
              <h2 className="section-heading" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', marginBottom: '18px' }}>
                Profesyonel Panel Temizliği
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'var(--text-secondary)', marginBottom: '16px' }}>
                Güneş panelleri zamanla toz, kir, kuş pisliği ve endüstriyel kirleticilerin birikmesiyle
                ciddi verim kayıplarına uğrar. Yapılan araştırmalar, temizlenmemiş panellerin
                <strong style={{ color: 'var(--text-primary)' }}> %30'a kadar</strong> daha az enerji ürettiğini göstermektedir.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'var(--text-secondary)', marginBottom: '28px' }}>
                New Temizlik olarak su israfı yapmadan, saha koşullarına göre optimize edilmiş
                özel ekipmanlarla panellerinizin yüzeyini fabrika çıkışı temizliğine
                kavuşturuyoruz. Leke bırakmadan, panel yüzeyine en ufak zarar vermeden.
              </p>

              <div
                style={{ padding: '14px 20px', background: 'rgba(127,191,58,0.08)', borderLeft: '3px solid #7FBF3A', borderRadius: '0 8px 8px 0', marginBottom: '28px' }}
              >
                <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '22px', fontWeight: 700, color: '#7FBF3A' }}>%30'a kadar</span>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', marginLeft: '10px' }}>verim artışı sağlıyoruz</span>
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
              Güneş Paneli Temizliği Hakkında SSS
            </h2>
            <div style={{ width: '50px', height: '3px', background: '#7FBF3A', margin: '16px auto 0' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                q: 'Güneş panelleri ne sıklıkla temizlenmeli?',
                a: 'GES santrallerinde panel temizliği, bölgenin iklim koşullarına ve çevresel kirlilik düzeyine göre değişmekle birlikte genellikle yılda 2–4 kez önerilmektedir. Manisa, İzmir ve İç Anadolu gibi toz yoğunluğu yüksek bölgelerde mevsim geçişlerinde yapılan temizlikler verim artışını maksimuma çıkarır.',
              },
              {
                q: 'Kirli güneş paneli ne kadar verim kaybına yol açar?',
                a: 'Araştırmalar, temizlenmemiş güneş panellerinin toz, kir ve kuş pisliği birikimi nedeniyle %15 ile %30 arasında verim kaybına uğradığını göstermektedir. Endüstriyel bölgelerin yakınındaki GES sahalarında bu kayıp daha da yüksek olabilmektedir.',
              },
              {
                q: 'Panel temizliği sırasında sistem kapatılmalı mı?',
                a: 'Güvenli bir GES panel temizliği için sistem DC tarafı itibarıyla devre dışı bırakılmalıdır. New Temizlik ekiplerimiz ISG standartlarına uygun olarak tüm güvenlik protokollerini eksiksiz uygular; sistem kapatma ve açma işlemleri de hizmet kapsamına dahildir.',
              },
              {
                q: 'Hangi temizlik yöntemini kullanıyorsunuz?',
                a: 'Panel yüzeyine zarar vermemek için yumuşak fırça sistemleri ve kontrollü saf su kullanıyoruz. Kimyasal kullanmıyor, yüksek basınçlı su ile panel yüzeyini aşındırmıyoruz. Temizlik sonrası leke bırakmayan deiyonize su tercih edilmektedir.',
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
