import { build } from 'vite'
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { pathToFileURL } from 'url'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const routes = [
  '/',
  '/kurumsal',
  '/hizmetlerimiz',
  '/hizmetlerimiz/panel-temizlik',
  '/hizmetlerimiz/panel-bakim',
  '/hizmetlerimiz/robot-satisi',
  '/referanslarimiz',
  '/sss',
  '/iletisim',
]

// SSR bundle oluştur
console.log('\nSSR bundle hazırlanıyor...')
await build({
  root,
  build: {
    ssr: 'src/entry-server.jsx',
    outDir: 'dist-ssr',
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: 'entry-server.js',
      },
    },
  },
  ssr: {
    // ESM-only paketlerin runtime'da yüklenmesi yerine bundle'a dahil et
    noExternal: true,
  },
})

// Şablonu oku ve yedekle — homepage prerender dist/index.html'i ezebilir
const templatePath = resolve(root, 'dist/index.html')
const template = readFileSync(templatePath, 'utf-8')
// Temiz şablonu ayrı dosyaya sakla
writeFileSync(resolve(root, 'dist/_template.html'), template)

// SSR bundle'ı yükle
const { render } = await import(
  pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href
)

console.log('\nSayfalar pre-render ediliyor...')

for (const route of routes) {
  const { html } = render(route)

  // Root div içine render edilmiş HTML'i yerleştir
  let output = template.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  )

  // react-helmet-async v3 tagları <div id="root"> içine render eder.
  // Title ve meta description'ı oradan çıkarıp <head>'e taşı.

  // Başlığı rendered HTML'den al
  const titleMatch = html.match(/<title>([^<]+)<\/title>/)
  if (titleMatch) {
    output = output.replace(
      /<title>[^<]*<\/title>/,
      `<title>${titleMatch[1]}</title>`
    )
  }

  // Meta description'ı rendered HTML'den al (HTML entity'leri geri çevir)
  const descMatch = html.match(/name="description" content="([^"]*)"/)
  if (descMatch) {
    const desc = descMatch[1]
      .replace(/&#x27;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
    // Şablondaki çok satırlı description meta'yı değiştir
    // NOT: [\s\S]*? yerine \s+ kullan — aksi halde <meta charset> gibi önceki tagları da yutar
    output = output.replace(
      /<meta\s+name="description"[\s\S]*?\/>/s,
      `<meta name="description" content="${desc}" />`
    )
  }

  const outDir =
    route === '/' ? resolve(root, 'dist') : resolve(root, `dist${route}`)

  mkdirSync(outDir, { recursive: true })
  writeFileSync(resolve(outDir, 'index.html'), output)
  console.log(`✓ dist${route === '/' ? '/index.html' : route + '/index.html'}`)
}

console.log('\nPre-rendering tamamlandı.')
