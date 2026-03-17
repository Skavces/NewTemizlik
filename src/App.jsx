import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { Helmet } from 'react-helmet-async'
import HomePage from './pages/HomePage'
import KurumsalPage from './pages/KurumsalPage'
import HizmetlerimizPage from './pages/HizmetlerimizPage'
import PanelTemizlikPage from './pages/PanelTemizlikPage'
import PanelBakimPage from './pages/PanelBakimPage'
import RobotSatisPage from './pages/RobotSatisPage'
import ReferanslarPage from './pages/ReferanslarPage'
import SSSPage from './pages/SSSPage'
import IletisimPage from './pages/IletisimPage'

function App() {
  return (
    <ThemeProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap" />
      </Helmet>
      <BrowserRouter>
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
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
