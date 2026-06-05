import { useState, useEffect } from 'react'
import Cursor      from './components/Cursor'
import Nav         from './components/Nav'
import Home        from './components/Home'
import Portfolio   from './components/Portfolio'
import Paletas     from './components/Paletas'
import Precos      from './components/Precos'
import Footer      from './components/Footer'
import { useLenis } from './hooks/useLenis'

export default function App() {
  const [tab, setTab] = useState('home')
  useLenis()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [tab])

  return (
    <>
      <Cursor />
      <Nav tab={tab} setTab={setTab} />
      <main>
        {tab === 'home'      && <Home      key="home"      />}
        {tab === 'portfolio' && <Portfolio key="portfolio" />}
        {tab === 'paletas'   && <Paletas   key="paletas"   />}
        {tab === 'precos'    && <Precos    key="precos"    />}
      </main>
      <Footer />
    </>
  )
}
