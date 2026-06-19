import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const tabs = [
  { id: 'home',      label: 'home'      },
  { id: 'portfolio', label: 'portfólio' },
  { id: 'paletas',   label: 'paletas'   },
  { id: 'precos',    label: 'preços'    },
  { id: 'tapera',    label: 'tapera ⚙️' },
]

export default function Nav({ tab, setTab }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleTab = (id) => {
    setTab(id)
    setOpen(false)
  }

  const handleContact = () => {
    setTab('home')
    setOpen(false)
    setTimeout(() => {
      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <button className={styles.logo} onClick={() => handleTab('home')} data-cursor>
        vera<span>.</span>
      </button>

      <ul className={`${styles.tabs} ${open ? styles.open : ''}`}>
        {tabs.map(({ id, label }) => (
          <li key={id}>
            <button
              className={`${styles.tabBtn} ${tab === id ? styles.tabActive : ''}`}
              onClick={() => handleTab(id)}
              data-cursor
            >
              {label}
              {tab === id && <span className={styles.tabLine} />}
            </button>
          </li>
        ))}
      </ul>

      <button className={styles.cta} onClick={handleContact} data-cursor>
        falar com a gente
      </button>

      <button
        className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
