import Hero        from './Hero'
import Tape        from './Tape'
import Sobre       from './Sobre'
import LandingPages from './LandingPages'
import Apps        from './Apps'
import Contato     from './Contato'
import { useReveal } from '../hooks/useReveal'

export default function Home() {
  useReveal()
  return (
    <>
      <Hero />
      <Tape />
      <Sobre />
      <div className="divider" />
      <LandingPages />
      <div className="divider" />
      <Apps />
      <div className="divider" />
      <Contato />
    </>
  )
}
