import { useState, useEffect } from 'react'
import Cursor      from './components/Cursor'
import Splash      from './components/Splash'
import Nav         from './components/Nav'
import Home        from './components/Home'
import Portfolio   from './components/Portfolio'
import Paletas     from './components/Paletas'
import Precos      from './components/Precos'
import Footer      from './components/Footer'
import { useLenis } from './hooks/useLenis'

// mapeia cada aba para uma URL real (e vice-versa) para que o Google
// indexe cada página e os botões voltar/avançar do navegador funcionem.
const TAB_PATHS = { home: '/', portfolio: '/portfolio', paletas: '/paletas', precos: '/precos' }
const PATH_TABS = { '/': 'home', '/portfolio': 'portfolio', '/paletas': 'paletas', '/precos': 'precos' }
const tabFromPath = () => PATH_TABS[window.location.pathname] || 'home'

export default function App() {
  const [tab, setTab]       = useState(tabFromPath)
  const [intro, setIntro]   = useState(true)
  useLenis()

  // troca de aba também atualiza a URL (sem recarregar a página)
  const changeTab = (id) => {
    setTab(id)
    const path = TAB_PATHS[id] || '/'
    if (window.location.pathname !== path) {
      window.history.pushState({ tab: id }, '', path)
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [tab])

  // botões voltar/avançar do navegador
  useEffect(() => {
    const onPop = () => setTab(tabFromPath())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  return (
    <>
      {intro && <Splash onDone={() => setIntro(false)} />}
      <Cursor />
      <Nav tab={tab} setTab={changeTab} />
      <main>
        {tab === 'home'      && !intro && <Home key="home" />}
        {tab === 'portfolio' && <Portfolio key="portfolio" />}
        {tab === 'paletas'   && <Paletas   key="paletas"   />}
        {tab === 'precos'    && <Precos    key="precos"    />}
      </main>
      <Footer />
    </>
  )
}
