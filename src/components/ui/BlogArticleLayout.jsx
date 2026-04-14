import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import WhatsAppButton from '../ui/WhatsAppButton'

export default function BlogArticleLayout({ title, date, readTime, children, relatedPosts = [] }) {
  return (
    <>
      <Navbar />

      <section style={{ background: 'var(--bg-alt)', padding: '48px 0 32px' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Link
            to="/blog"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontSize: '13px', color: '#7FBF3A', textDecoration: 'none',
              fontWeight: 500, marginBottom: '20px',
            }}
          >
            <ArrowLeft size={14} /> Blog
          </Link>

          <h1 style={{
            fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800,
            color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '16px',
            fontFamily: "'Rajdhani', sans-serif", letterSpacing: '-0.01em',
          }}>
            {title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'var(--text-secondary)', fontSize: '13px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Calendar size={13} /> {date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Clock size={13} /> {readTime} dk okuma
            </span>
          </div>
        </div>
      </section>

      <article style={{ background: 'var(--bg-body)', padding: '48px 0 80px' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div style={{
            fontSize: '16px',
            lineHeight: 1.9,
            color: 'var(--text-secondary)',
          }}
            className="blog-content"
          >
            {children}
          </div>

          {/* CTA */}
          <div style={{
            marginTop: '56px',
            padding: '32px',
            background: 'rgba(127,191,58,0.07)',
            border: '1px solid rgba(127,191,58,0.25)',
            borderRadius: '16px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px', fontFamily: "'Rajdhani', sans-serif" }}>
              GES santralınız için ücretsiz keşif alın
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Soma ve Türkiye genelinde profesyonel GES temizlik ve bakım hizmeti.
            </p>
            <a
              href="tel:+905304738793"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 28px', background: '#7FBF3A', color: '#fff',
                fontSize: '14px', fontWeight: 600, borderRadius: '9999px',
                textDecoration: 'none', letterSpacing: '0.04em',
                boxShadow: '0 4px 15px rgba(127,191,58,0.3)',
              }}
            >
              Hemen Ara <ArrowRight size={15} />
            </a>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div style={{ marginTop: '56px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px', fontFamily: "'Rajdhani', sans-serif" }}>
                İlgili Makaleler
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {relatedPosts.map((post, i) => (
                  <Link
                    key={i}
                    to={post.href}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '16px 20px', background: 'var(--bg-card)',
                      border: '1px solid var(--border)', borderRadius: '10px',
                      textDecoration: 'none', color: 'inherit',
                      transition: 'border-color 0.2s',
                    }}
                  >
                    <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>{post.title}</span>
                    <ArrowRight size={14} style={{ color: '#7FBF3A', flexShrink: 0 }} />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
