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

export default function App() {
  const [tab, setTab]       = useState('home')
  const [intro, setIntro]   = useState(true)
  useLenis()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [tab])

  return (
    <>
      {intro && <Splash onDone={() => setIntro(false)} />}
      <Cursor />
      <Nav tab={tab} setTab={setTab} />
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
