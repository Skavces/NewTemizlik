import { Helmet } from 'react-helmet-async'
import BlogArticleLayout from '../../components/ui/BlogArticleLayout'

const relatedPosts = [
  { title: 'Kirli Güneş Paneli Ne Kadar Verim Kaybettirir?', href: '/blog/kirli-gunes-paneli-verim-kaybi' },
  { title: 'GES\'te Hotspot Nedir ve Nasıl Tespit Edilir?', href: '/blog/ges-hotspot-nedir' },
  { title: 'Otonom Robot mu, Manuel Temizlik mi?', href: '/blog/otonom-robot-mu-manuel-temizlik-mi' },
]

export default function PanelTemizligiNeSiklikla() {
  return (
    <>
      <Helmet>
        <title>Güneş Paneli Temizliği Ne Zaman Yapılmalı? Mevsimlik Rehber | New Temizlik</title>
        <meta name="description" content="Güneş paneli temizliğinin ne zaman ve ne sıklıkla yapılması gerektiğini öğrenin. İlkbahar, yaz, sonbahar ve kış için mevsimlik temizlik takvimi rehberi." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.newtemizlik.com/blog/gunes-paneli-temizligi-ne-zaman-yapilmali" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.newtemizlik.com/blog/gunes-paneli-temizligi-ne-zaman-yapilmali" />
        <meta property="og:title" content="Güneş Paneli Temizliği Ne Zaman Yapılmalı? Mevsimlik Rehber" />
        <meta property="og:description" content="Güneş paneli temizliğinin ne zaman ve ne sıklıkla yapılması gerektiğini öğrenin. İlkbahar, yaz, sonbahar ve kış için mevsimlik temizlik takvimi rehberi." />
        <meta property="og:image" content="https://www.newtemizlik.com/endustriyel-gunes-paneli-yikama.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="800" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Güneş Paneli Temizliği Ne Zaman Yapılmalı? Mevsimlik Rehber" />
        <meta name="twitter:description" content="Güneş paneli temizliğinin ne zaman ve ne sıklıkla yapılması gerektiğini öğrenin. İlkbahar, yaz, sonbahar ve kış için mevsimlik temizlik takvimi rehberi." />
        <meta name="twitter:image" content="https://www.newtemizlik.com/endustriyel-gunes-paneli-yikama.jpeg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Güneş Paneli Temizliği Ne Zaman Yapılmalı? Mevsimlik Rehber",
          "description": "Güneş paneli temizliğinin ne zaman ve ne sıklıkla yapılması gerektiğini öğrenin. İlkbahar, yaz, sonbahar ve kış için mevsimlik temizlik takvimi rehberi.",
          "image": "https://www.newtemizlik.com/endustriyel-gunes-paneli-yikama.jpeg",
          "datePublished": "2026-04-14",
          "dateModified": "2026-04-14",
          "author": { "@type": "Organization", "name": "New Temizlik", "url": "https://www.newtemizlik.com" },
          "publisher": {
            "@type": "Organization",
            "name": "New Temizlik",
            "logo": { "@type": "ImageObject", "url": "https://www.newtemizlik.com/logo.png" }
          },
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.newtemizlik.com/blog/gunes-paneli-temizligi-ne-zaman-yapilmali" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.newtemizlik.com/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.newtemizlik.com/blog" },
            { "@type": "ListItem", "position": 3, "name": "Güneş Paneli Temizliği Ne Zaman Yapılmalı?", "item": "https://www.newtemizlik.com/blog/gunes-paneli-temizligi-ne-zaman-yapilmali" }
          ]
        })}</script>
      </Helmet>

      <BlogArticleLayout
        title="Güneş Paneli Temizliği Ne Zaman Yapılmalı? Mevsimlik Rehber"
        date="14 Nisan 2026"
        readTime="6"
        relatedPosts={relatedPosts}
      >
        <p>
          Güneş panellerinin temizlik sıklığı, santralinizin bulunduğu coğrafyaya, çevresel kirlilik düzeyine ve yıllık üretim hedeflerinize göre değişir. Yanlış zamanda ya da çok seyrek yapılan temizlik, beklenenden çok daha büyük üretim kayıplarına yol açabilir.
        </p>
        <p>
          Bu rehberde mevsimlik temizlik takvimini ve Türkiye'deki farklı bölgeler için özel koşulları ele alıyoruz.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '36px', marginBottom: '12px', fontFamily: "'Rajdhani', sans-serif" }}>
          Genel Kural: Yılda En Az 2–4 Kez
        </h2>
        <p>
          Uluslararası GES işletme standartlarına göre güneş panellerinin yılda en az <strong style={{ color: 'var(--text-primary)' }}>2 kez</strong> profesyonel temizlikten geçirilmesi önerilmektedir. Ancak Türkiye'nin büyük bölümünde, özellikle Ege, Marmara ve İç Anadolu'daki tarımsal ve sanayi bölgelerinde bu sayı 3–4'e çıkmaktadır.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '36px', marginBottom: '12px', fontFamily: "'Rajdhani', sans-serif" }}>
          Mevsime Göre Temizlik Takvimi
        </h2>

        <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#7FBF3A', marginTop: '24px', marginBottom: '8px' }}>
          İlkbahar (Mart–Mayıs): En Kritik Temizlik
        </h3>
        <p>
          Kış boyunca biriken toz, is ve çamur kalıntıları güneşlerin uzadığı ilkbaharda panellerin üzerinde yoğun bir tabaka oluşturur. Aynı dönemde tarım ilaçlamaları ve çiçek poleni de panellere yapışır. Mevsimlik en önemli temizlik budur; zira yıllık üretimin önemli bir bölümü Nisan–Haziran arasında gerçekleşir.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#7FBF3A', marginTop: '24px', marginBottom: '8px' }}>
          Yaz (Haziran–Ağustos): Sıcak Bölgeler için Ek Temizlik
        </h3>
        <p>
          Ege, Akdeniz ve İç Anadolu'da yaz aylarındaki yüksek sıcaklıklar, kuruyan toprak tozunu panellere taşır. Tarımsal sulama ve hasat dönemi de kirlilik yükünü artırır. Büyük kapasiteli santraller için yaz ortasında ek bir temizlik hem üretimi hem de panel sağlığını korur.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#7FBF3A', marginTop: '24px', marginBottom: '8px' }}>
          Sonbahar (Eylül–Kasım): Kış Öncesi Hazırlık
        </h3>
        <p>
          Hasat sonrası saman tozu, yaprak ve nem birikimi sonbahar temizliğini zorunlu kılar. Kış yağışlarından önce yapılan bir temizlik, panellerin nem ve buz döngüsüne karşı daha dirençli olmasını sağlar. Aynı zamanda bu dönemde yapılan termal kamera taraması, kışa girerken hotspot'ların tespit edilmesini mümkün kılar.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#7FBF3A', marginTop: '24px', marginBottom: '8px' }}>
          Kış (Aralık–Şubat): Kar ve Buzlanma Sonrası
        </h3>
        <p>
          Kar ve buzun çökmesinin ardından panel yüzeylerinde kalıntılar oluşabilir. Kış güneşinin az olduğu bu dönemde üretim zaten düşük olsa da panel yüzeylerinin temiz tutulması, ilkbaharın ilk güneşli günlerinden tam kapasite yararlanılmasını sağlar.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '36px', marginBottom: '12px', fontFamily: "'Rajdhani', sans-serif" }}>
          Soma ve Sanayi Bölgelerine Özel Durum
        </h2>
        <p>
          Soma gibi termik santral ve maden ocaklarının yakınındaki GES sahalarında tablo farklıdır. Kömür tozu, silis ve is partiküllerinin birikmesi yüzünden bu bölgelerdeki paneller ulusal ortalamanın 1,5–2 katı hızla kirlenir. Bu durumdaki sahalar için yılda <strong style={{ color: 'var(--text-primary)' }}>4–6 temizlik</strong> teknik ve ekonomik açıdan en verimli stratejidir.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '36px', marginBottom: '12px', fontFamily: "'Rajdhani', sans-serif" }}>
          Temizlik Zamanını Belirleyen Sinyaller
        </h2>
        <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>İnvertör verisinde açıklanamayan üretim düşüşü (%5 ve üzeri)</li>
          <li>Panel yüzeyinde gözle görülür kir, toz veya kuş pisliği birikimi</li>
          <li>Bitişik panellerle karşılaştırıldığında tek bir dizide belirgin düşük üretim</li>
          <li>Yoğun tarım ilacı uygulaması veya hasat dönemi sonrası</li>
          <li>Uzun süreli kuru ve rüzgârlı hava döneminden çıkış</li>
        </ul>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '36px', marginBottom: '12px', fontFamily: "'Rajdhani', sans-serif" }}>
          Sonuç
        </h2>
        <p>
          Güneş paneli temizliği tek seferlik bir bakım değil, santralinizin verimini korumak için sürekli takip edilmesi gereken bir operasyondur. Doğru zamanda yapılan profesyonel temizlik, yıllık üretim kaybını en aza indirerek yatırım dönüşünüzü maksimuma çıkarır.
        </p>
        <p>
          New Temizlik olarak santralinizin bölgesi ve kapasitesine göre özelleştirilmiş yıllık temizlik takvimi hazırlıyoruz. Ücretsiz saha değerlendirmesi için bize ulaşın.
        </p>
      </BlogArticleLayout>
    </>
  )
}
