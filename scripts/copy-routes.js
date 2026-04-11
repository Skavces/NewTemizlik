import { copyFileSync, mkdirSync } from 'fs'

const routes = [
  'kurumsal',
  'hizmetlerimiz',
  'hizmetlerimiz/panel-temizlik',
  'hizmetlerimiz/panel-bakim',
  'hizmetlerimiz/robot-satisi',
  'referanslarimiz',
  'sss',
  'iletisim',
]

for (const route of routes) {
  mkdirSync(`dist/${route}`, { recursive: true })
  copyFileSync('dist/index.html', `dist/${route}/index.html`)
  console.log(`✓ dist/${route}/index.html`)
}

console.log('\nTüm route HTML dosyaları oluşturuldu.')
