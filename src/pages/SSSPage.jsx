import { Helmet } from 'react-helmet-async'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import PageHero from '../components/ui/PageHero'
import SSS from '../components/sections/SSS'

export default function SSSPage() {
  return (
    <>
      <Helmet>
        <title>Sıkça Sorulan Sorular | GES Panel Temizliği SSS | New Temizlik</title>
        <meta name="description" content="Güneş paneli temizliği, GES bakım hizmetleri ve temizlik robotu hakkında merak edilen soruların cevapları. New Temizlik SSS sayfası." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.newtemizlik.com/sss" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.newtemizlik.com/sss" />
        <meta property="og:title" content="Sıkça Sorulan Sorular | GES Panel Temizliği SSS | New Temizlik" />
        <meta property="og:description" content="Güneş paneli temizliği, GES bakım hizmetleri ve temizlik robotu hakkında merak edilen soruların cevapları. New Temizlik SSS sayfası." />
        <meta property="og:image" content="https://www.newtemizlik.com/logo.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="New Temizlik" />
        <meta property="og:image:alt" content="New Temizlik GES panel temizliği sıkça sorulan sorular logosu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sıkça Sorulan Sorular | GES Panel Temizliği SSS | New Temizlik" />
        <meta name="twitter:description" content="Güneş paneli temizliği, GES bakım hizmetleri ve temizlik robotu hakkında merak edilen soruların cevapları. New Temizlik SSS sayfası." />
        <meta name="twitter:image" content="https://www.newtemizlik.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.newtemizlik.com/" },
            { "@type": "ListItem", "position": 2, "name": "Sıkça Sorulan Sorular", "item": "https://www.newtemizlik.com/sss" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Hangi bölgelere hizmet veriyorsunuz?",
              "acceptedAnswer": { "@type": "Answer", "text": "Soma/Manisa merkezli olmak üzere tüm Türkiye genelinde GES temizlik ve bakım hizmeti sunmaktayız." }
            },
            {
              "@type": "Question",
              "name": "Güneş paneli temizliği ne sıklıkla yapılmalıdır?",
              "acceptedAnswer": { "@type": "Answer", "text": "Bulunduğunuz bölgenin toz, polen ve çevre kirliliği durumuna göre değişmekle birlikte, panellerin maksimum verimde çalışması için yılda en az 2 kez (tercihen ilkbahar ve sonbahar aylarında) profesyonel temizlik önerilmektedir." }
            },
            {
              "@type": "Question",
              "name": "Temizlikte kullandığınız ürünler ve ekipmanlar nelerdir?",
              "acceptedAnswer": { "@type": "Answer", "text": "Tüm temizlik süreçlerimizde yüzeye zarar vermeyen, doğa dostu özel solüsyonlar ve son teknoloji ekipmanlar kullanıyoruz. Su israfı yapmadan, minimum su tüketimiyle maksimum temizlik sağlıyoruz." }
            },
            {
              "@type": "Question",
              "name": "Hizmetleriniz garantili mi?",
              "acceptedAnswer": { "@type": "Answer", "text": "Evet, tüm panel temizliği, periyodik bakım ve sunduğumuz diğer endüstriyel çözümler firmamızın garantisi altındadır. Memnuniyetiniz bizim için önceliktir." }
            },
            {
              "@type": "Question",
              "name": "Fiyatlandırma nasıl yapılıyor?",
              "acceptedAnswer": { "@type": "Answer", "text": "Fiyatlandırmamız panel sayısı, çatı veya arazinin durumu, kirlilik derecesi ve periyodik anlaşma gibi faktörlere bağlı olarak değişiklik göstermektedir. Detaylı ve adil bir fiyat teklifi için ücretsiz keşif talep edebilirsiniz." }
            }
          ]
        })}</script>
      </Helmet>

      <Navbar />

      <PageHero
        title="Sıkça Sorulan Sorular"
        image="solar-panel.png"
        breadcrumbs={[
          { label: 'Ana Sayfa', path: '/' },
          { label: 'S.S.S' },
        ]}
      />

      <SSS />

      <Footer />
      <WhatsAppButton />
    </>
  )
}
