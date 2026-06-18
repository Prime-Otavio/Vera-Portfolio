import Hero        from './Hero'
import Resultados  from './Resultados'
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
      <div className="divider" />
      <Resultados />
      <div className="divider" />
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
