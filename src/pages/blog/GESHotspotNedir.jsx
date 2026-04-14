import { Helmet } from 'react-helmet-async'
import BlogArticleLayout from '../../components/ui/BlogArticleLayout'

const relatedPosts = [
  { title: 'Güneş Paneli Temizliği Ne Zaman Yapılmalı?', href: '/blog/gunes-paneli-temizligi-ne-zaman-yapilmali' },
  { title: 'Kirli Güneş Paneli Ne Kadar Verim Kaybettirir?', href: '/blog/kirli-gunes-paneli-verim-kaybi' },
  { title: 'GES Panel Bakım & Onarım İzleme Hizmeti', href: '/hizmetlerimiz/panel-bakim' },
]

export default function GESHotspotNedir() {
  return (
    <>
      <Helmet>
        <title>GES'te Hotspot (Sıcak Nokta) Nedir ve Nasıl Tespit Edilir? | New Temizlik</title>
        <meta name="description" content="GES panellerinde hotspot (sıcak nokta) nedir, neden oluşur, ne gibi zararlara yol açar ve termal kamera ile nasıl tespit edilir? Kapsamlı teknik rehber." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.newtemizlik.com/blog/ges-hotspot-nedir" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.newtemizlik.com/blog/ges-hotspot-nedir" />
        <meta property="og:title" content="GES'te Hotspot (Sıcak Nokta) Nedir ve Nasıl Tespit Edilir?" />
        <meta property="og:description" content="GES panellerinde hotspot (sıcak nokta) nedir, neden oluşur, ne gibi zararlara yol açar ve termal kamera ile nasıl tespit edilir? Kapsamlı teknik rehber." />
        <meta property="og:image" content="https://www.newtemizlik.com/ges-bakim-onarim-termal-analiz.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="800" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GES'te Hotspot (Sıcak Nokta) Nedir ve Nasıl Tespit Edilir?" />
        <meta name="twitter:description" content="GES panellerinde hotspot (sıcak nokta) nedir, neden oluşur, ne gibi zararlara yol açar ve termal kamera ile nasıl tespit edilir? Kapsamlı teknik rehber." />
        <meta name="twitter:image" content="https://www.newtemizlik.com/ges-bakim-onarim-termal-analiz.jpeg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "GES'te Hotspot (Sıcak Nokta) Nedir ve Nasıl Tespit Edilir?",
          "description": "GES panellerinde hotspot (sıcak nokta) nedir, neden oluşur, ne gibi zararlara yol açar ve termal kamera ile nasıl tespit edilir? Kapsamlı teknik rehber.",
          "image": "https://www.newtemizlik.com/ges-bakim-onarim-termal-analiz.jpeg",
          "datePublished": "2026-04-14",
          "dateModified": "2026-04-14",
          "author": { "@type": "Organization", "name": "New Temizlik", "url": "https://www.newtemizlik.com" },
          "publisher": {
            "@type": "Organization",
            "name": "New Temizlik",
            "logo": { "@type": "ImageObject", "url": "https://www.newtemizlik.com/logo.png" }
          },
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.newtemizlik.com/blog/ges-hotspot-nedir" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.newtemizlik.com/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.newtemizlik.com/blog" },
            { "@type": "ListItem", "position": 3, "name": "GES'te Hotspot Nedir?", "item": "https://www.newtemizlik.com/blog/ges-hotspot-nedir" }
          ]
        })}</script>
      </Helmet>

      <BlogArticleLayout
        title="GES'te Hotspot (Sıcak Nokta) Nedir ve Nasıl Tespit Edilir?"
        date="14 Nisan 2026"
        readTime="7"
        relatedPosts={relatedPosts}
      >
        <p>
          Güneş enerji santrallerinin uzun vadeli sağlığını tehdit eden en ciddi sorunlardan biri <strong style={{ color: 'var(--text-primary)' }}>hotspot</strong>, yani sıcak nokta oluşumudur. Çoğu zaman çıplak gözle fark edilemeyen bu sorun, fark edilmeden ilerlediğinde ciddi verim kayıplarına, panel hasarına ve hatta yangın riskine yol açabilir.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '36px', marginBottom: '12px', fontFamily: "'Rajdhani', sans-serif" }}>
          Hotspot Nedir?
        </h2>
        <p>
          Hotspot, bir güneş panelinin belirli bir bölgesinde — genellikle tek bir fotovoltaik hücre veya birkaç hücreden oluşan küçük bir alanda — aşırı ısı birikmesidir. Normal çalışan bir güneş panelinde tüm hücreler aynı miktarda elektrik üretirken, bir hotspot bölgesinde o hücreler enerji üretmek yerine enerji <em>tüketir</em> ve bu enerji ısıya dönüşür.
        </p>
        <p>
          Bu bölgesel ısınma, etkilenen hücrenin sıcaklığının çevre hücrelerden 10–80°C daha yüksek olmasına neden olabilir. Termal kamera ile bakıldığında panelin üzerindeki parlak sıcak nokta hemen dikkat çeker.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '36px', marginBottom: '12px', fontFamily: "'Rajdhani', sans-serif" }}>
          Hotspot Neden Oluşur?
        </h2>
        <p>Birden fazla neden hotspot oluşumuna yol açabilir:</p>
        <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <li>
            <strong style={{ color: 'var(--text-primary)' }}>Kısmi gölgeleme:</strong> Bir kuş pisliği, yaprak ya da kirlilik tabakası panelin küçük bir bölgesini örttüğünde, o hücre grubunun akımı azalır ve dizi boyunca akan fazla akım ısıya dönüşür.
          </li>
          <li>
            <strong style={{ color: 'var(--text-primary)' }}>Hasarlı hücreler:</strong> Üretim hatası, taşıma sırasında oluşan mikro çatlaklar veya dolu hasarı, hücrenin doğru çalışmasını engeller.
          </li>
          <li>
            <strong style={{ color: 'var(--text-primary)' }}>Bağlantı sorunları:</strong> Devre dışı kalan bypass diyotları veya gevşeyen lehim bağlantıları, mevcut akımın alternatif yollardan geçmesine neden olur.
          </li>
          <li>
            <strong style={{ color: 'var(--text-primary)' }}>Kirlilik birikimi:</strong> Özellikle kömür tozu veya kuş pisliği gibi iletken olmayan yoğun kir, belirli hücrelerde gölgeleme etkisi yaratır.
          </li>
        </ul>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '36px', marginBottom: '12px', fontFamily: "'Rajdhani', sans-serif" }}>
          Hotspot'un Zararları
        </h2>
        <p>
          Hotspot uzun süre tespit edilmeden bırakıldığında hasarlar giderek büyür:
        </p>
        <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <li><strong style={{ color: 'var(--text-primary)' }}>Verim kaybı:</strong> Hotspot bulunan bir panel %10–30 daha az üretim yapabilir.</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Panel degradasyonu:</strong> Süregelen aşırı ısı, hücre içindeki kapsülleme maddesini sarartır ve yavaşça parçalar.</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Cam çatlağı:</strong> Termal genleşme ve büzülme döngüleri cam yüzeyde çatlak oluşturur, bu da suya karşı korumayı ortadan kaldırır.</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Yangın riski:</strong> 200°C'yi aşan sıcaklıklara ulaşabilen hotspot'lar çerçeveyi veya montaj yapısını tutuşturabilir.</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Komşu panel etkisi:</strong> Bir string'deki hasarlı panel, tüm dizi üretimini olumsuz etkiler.</li>
        </ul>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '36px', marginBottom: '12px', fontFamily: "'Rajdhani', sans-serif" }}>
          Hotspot Nasıl Tespit Edilir?
        </h2>

        <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#7FBF3A', marginTop: '20px', marginBottom: '8px' }}>
          Termal Kamera (İnfrared Tarama)
        </h3>
        <p>
          Hotspot tespitinin altın standardı termal kamera analizidir. İnfrared kamera ile paneller tarandığında sıcak noktalar kırmızı/sarı renkte belirgin biçimde görünür. Bu yöntemde sahaya yakın değil, mesafeli tarama yapılabildiği için büyük santrallerde hızlı ve kapsamlı analiz mümkündür.
        </p>
        <p>
          Taramanın en verimli sonucu vermesi için açık hava koşullarında (direkt güneş ışığı altında) ve paneller tam kapasitede çalışırken yapılması gerekir.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#7FBF3A', marginTop: '20px', marginBottom: '8px' }}>
          İnvertör Verisi İzleme
        </h3>
        <p>
          String bazında üretim verisini sürekli izleyen izleme sistemleri, belirgin performans düşüşlerini alarm olarak bildirir. Ancak bu yöntem hotspot'un tam konumunu değil, sorunlu bölgeyi işaret eder. Termal tarama ile birlikte kullanıldığında çok etkilidir.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '36px', marginBottom: '12px', fontFamily: "'Rajdhani', sans-serif" }}>
          Hotspot Nasıl Önlenir?
        </h2>
        <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <li>Düzenli panel temizliği ile kirlilik kaynaklı gölgelemenin önüne geçilmesi</li>
          <li>Yılda en az iki kez profesyonel termal kamera taraması yaptırılması</li>
          <li>Gölge düşüren engellerin (ağaç, bina, tesisat) kontrol edilmesi</li>
          <li>Bypass diyotlarının ve bağlantı noktalarının periyodik kontrolü</li>
          <li>Dolu, fırtına veya hasar riski sonrası ivedi termal tarama</li>
        </ul>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '36px', marginBottom: '12px', fontFamily: "'Rajdhani', sans-serif" }}>
          Sonuç
        </h2>
        <p>
          Hotspot, çıplak gözle görülemeyen ama GES santralinizin uzun vadeli sağlığını ve güvenliğini doğrudan tehdit eden bir sorundur. Erken tespit ve müdahale hem panel ömrünü uzatır hem de yangın riskini ortadan kaldırır.
        </p>
        <p>
          New Temizlik olarak düzenli bakım hizmetimizin bir parçası olarak termal kamera analizi sunuyor, hotspot tespiti ve giderilmesi konusunda tam kapsamlı destek sağlıyoruz.
        </p>
      </BlogArticleLayout>
    </>
  )
}
