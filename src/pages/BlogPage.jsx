import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import PageHero from '../components/ui/PageHero'

const posts = [
  {
    title: 'Güneş Paneli Temizliği Ne Zaman Yapılmalı? Mevsimlik Rehber',
    excerpt: 'İlkbahar, yaz, sonbahar ve kış için mevsimlik temizlik takvimi. Bölgenize ve santral büyüklüğünüze göre doğru temizlik sıklığını öğrenin.',
    href: '/blog/gunes-paneli-temizligi-ne-zaman-yapilmali',
    image: 'endustriyel-gunes-paneli-yikama.jpeg',
    date: '14 Nisan 2026',
    readTime: 6,
    tag: 'Temizlik',
  },
  {
    title: 'GES\'te Hotspot (Sıcak Nokta) Nedir ve Nasıl Tespit Edilir?',
    excerpt: 'Hotspot neden oluşur, panel sağlığına ve güvenliğine ne gibi zararlar verir? Termal kamera ile erken tespitin önemi.',
    href: '/blog/ges-hotspot-nedir',
    image: 'ges-bakim-onarim-termal-analiz.jpeg',
    date: '14 Nisan 2026',
    readTime: 7,
    tag: 'Bakım',
  },
  {
    title: 'Kirli Güneş Paneli Ne Kadar Verim Kaybettirir?',
    excerpt: 'Araştırma verileri ve gerçek hesaplama örnekleriyle: 1 MW GES\'te kirlilik yüzünden kaybedilen enerji ve para ne kadar?',
    href: '/blog/kirli-gunes-paneli-verim-kaybi',
    image: 'ges-kir-problemleri.jpg',
    date: '14 Nisan 2026',
    readTime: 5,
    tag: 'Verim',
  },
  {
    title: 'GES Temizliğinde Otonom Robot mu, Manuel Temizlik mi?',
    excerpt: 'İki yöntemin maliyet analizi, avantaj ve dezavantajları. Hangi saha büyüklüğünde hangisi daha kârlı?',
    href: '/blog/otonom-robot-mu-manuel-temizlik-mi',
    image: 'soma-ges-otonom-temizlik-robotu.jpeg',
    date: '14 Nisan 2026',
    readTime: 6,
    tag: 'Teknoloji',
  },
]

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog | GES Temizlik ve Bakım Rehberleri | New Temizlik</title>
        <meta name="description" content="Güneş paneli temizliği, GES bakımı, hotspot tespiti ve otonom temizlik teknolojileri hakkında uzman rehberler ve teknik makaleler." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.newtemizlik.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.newtemizlik.com/blog" />
        <meta property="og:title" content="Blog | GES Temizlik ve Bakım Rehberleri | New Temizlik" />
        <meta property="og:description" content="Güneş paneli temizliği, GES bakımı, hotspot tespiti ve otonom temizlik teknolojileri hakkında uzman rehberler ve teknik makaleler." />
        <meta property="og:image" content="https://www.newtemizlik.com/logo.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="New Temizlik" />
        <meta property="og:image:alt" content="New Temizlik GES temizlik ve bakım blog logosu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | GES Temizlik ve Bakım Rehberleri | New Temizlik" />
        <meta name="twitter:description" content="Güneş paneli temizliği, GES bakımı, hotspot tespiti ve otonom temizlik teknolojileri hakkında uzman rehberler ve teknik makaleler." />
        <meta name="twitter:image" content="https://www.newtemizlik.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.newtemizlik.com/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.newtemizlik.com/blog" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "New Temizlik Blog",
          "description": "GES temizlik, bakım ve otonom temizlik teknolojileri hakkında uzman rehberler",
          "url": "https://www.newtemizlik.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "New Temizlik",
            "logo": { "@type": "ImageObject", "url": "https://www.newtemizlik.com/logo.png" }
          },
          "blogPost": posts.map(p => ({
            "@type": "BlogPosting",
            "headline": p.title,
            "url": `https://www.newtemizlik.com${p.href}`,
            "datePublished": "2026-04-14",
            "image": `https://www.newtemizlik.com/${p.image}`,
          }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "GES Temizlik ve Bakım Blog Yazıları",
          "description": "Güneş paneli temizliği, GES bakımı ve otonom temizlik teknolojileri hakkında uzman rehberler",
          "url": "https://www.newtemizlik.com/blog",
          "numberOfItems": posts.length,
          "itemListElement": posts.map((p, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "url": `https://www.newtemizlik.com${p.href}`,
            "name": p.title,
          }))
        })}</script>
      </Helmet>

      <Navbar />

      <PageHero
        title="Blog"
        image="solar-panel.png"
        breadcrumbs={[
          { label: 'Ana Sayfa', path: '/' },
          { label: 'Blog' },
        ]}
      />

      <section style={{ background: 'var(--bg-body)', padding: '72px 0 96px' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7FBF3A', display: 'block', marginBottom: '10px' }}>
              Teknik Rehberler
            </span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>
              GES Temizlik ve Bakım Makaleleri
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginTop: '12px', maxWidth: '560px', margin: '12px auto 0', lineHeight: 1.7 }}>
              Güneş enerji santralinizin verimini korumak için bilmeniz gereken her şey.
            </p>
            <div style={{ width: '50px', height: '3px', background: '#7FBF3A', margin: '16px auto 0' }} />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <Link
                key={i}
                to={post.href}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <article
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    height: '100%',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                    <img
                      src={`${import.meta.env.BASE_URL}${post.image}`}
                      alt={post.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                    />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <span style={{
                        fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em',
                        textTransform: 'uppercase', color: '#7FBF3A',
                        background: 'rgba(127,191,58,0.1)', padding: '3px 10px',
                        borderRadius: '9999px',
                      }}>
                        {post.tag}
                      </span>
                      <span style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={11} /> {post.date}
                      </span>
                      <span style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={11} /> {post.readTime} dk
                      </span>
                    </div>
                    <h3 style={{
                      fontSize: '17px', fontWeight: 700,
                      color: 'var(--text-primary)', lineHeight: 1.3,
                      marginBottom: '10px', fontFamily: "'Rajdhani', sans-serif",
                    }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
                      {post.excerpt}
                    </p>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '5px',
                      fontSize: '13px', fontWeight: 600, color: '#7FBF3A',
                    }}>
                      Devamını Oku <ArrowRight size={13} />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
