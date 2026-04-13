import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import HomePage from './pages/HomePage'
import KurumsalPage from './pages/KurumsalPage'
import HizmetlerimizPage from './pages/HizmetlerimizPage'
import PanelTemizlikPage from './pages/PanelTemizlikPage'
import PanelBakimPage from './pages/PanelBakimPage'
import RobotSatisPage from './pages/RobotSatisPage'
import ReferanslarPage from './pages/ReferanslarPage'
import SSSPage from './pages/SSSPage'
import IletisimPage from './pages/IletisimPage'

export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <ThemeProvider>
        <StaticRouter location={url}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kurumsal" element={<KurumsalPage />} />
            <Route path="/hizmetlerimiz" element={<HizmetlerimizPage />} />
            <Route path="/hizmetlerimiz/panel-temizlik" element={<PanelTemizlikPage />} />
            <Route path="/hizmetlerimiz/panel-bakim" element={<PanelBakimPage />} />
            <Route path="/hizmetlerimiz/robot-satisi" element={<RobotSatisPage />} />
            <Route path="/referanslarimiz" element={<ReferanslarPage />} />
            <Route path="/sss" element={<SSSPage />} />
            <Route path="/iletisim" element={<IletisimPage />} />
          </Routes>
        </StaticRouter>
      </ThemeProvider>
    </HelmetProvider>
  )
  return { html, helmetContext }
}
