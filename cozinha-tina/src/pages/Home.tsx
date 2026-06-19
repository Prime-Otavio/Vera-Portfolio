import { Link } from 'react-router-dom'
import { useAuthContext } from '../lib/AuthProvider'

const STEPS = [
  { icon: '📸', title: 'Fotografe', text: 'Tire uma foto da geladeira ou da despensa.' },
  { icon: '🤖', title: 'A Tina analisa', text: 'A IA identifica os ingredientes na imagem.' },
  { icon: '🍽️', title: 'Cozinhe', text: 'Receba receitas que combinam com o que voce tem.' },
]

export default function Home() {
  const { user } = useAuthContext()

  return (
    <div className="container-app py-16">
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
          O que tem na sua <span className="text-gradient">geladeira</span>?
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
          Fotografe os seus ingredientes e deixe a Cozinha Tina sugerir receitas com
          inteligencia artificial — respeitando as suas restricoes alimentares.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to={user ? '/dashboard' : '/signup'} className="btn-primary">
            {user ? 'Ir para minha cozinha' : 'Comecar gratis'}
          </Link>
          {!user && (
            <Link to="/login" className="btn-outline">
              Entrar
            </Link>
          )}
        </div>
      </section>

      <section className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {STEPS.map((step) => (
          <div key={step.title} className="card text-center">
            <div className="text-4xl" aria-hidden>
              {step.icon}
            </div>
            <h2 className="mt-3 text-lg font-bold">{step.title}</h2>
            <p className="mt-1 text-sm text-gray-500">{step.text}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
