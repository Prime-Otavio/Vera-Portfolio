import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Portfolio.module.css'

const projects = [
  {
    id: 1,
    name: 'Ronaldo Rocha',
    category: 'Site Pro',
    desc: 'Site de engenharia com foco em orçamento, WhatsApp inteligente, formulário completo, eventos e dashboard de leads.',
    url: '/ronaldo-rocha-site/index.html',
    tags: ['Site', 'Analytics', 'Dashboard'],
    live: true,
    thumb: null,
    result: { num: '+200%', label: 'leads no WhatsApp' },
  },
  {
    id: 2,
    name: 'Vó Neis Confeitaria',
    category: 'Cardápio Digital',
    desc: 'Cardápio online premium para WhatsApp, com categorias, carrinho simples, total parcial e pedido organizado.',
    url: '/vo-neis-cardapio/index.html',
    tags: ['Cardápio', 'WhatsApp', 'Mobile'],
    live: true,
    thumb: null,
    result: { num: '+250%', label: 'de faturamento' },
  },
  {
    id: 3,
    name: 'Dashboard Ronaldo',
    category: 'Dashboard',
    desc: 'Painel comercial para acompanhar visitas, cliques, leads, serviços, regiões e status das oportunidades.',
    url: '/ronaldo-dashboard/index.html',
    tags: ['Leads', 'Funil', 'Métricas'],
    live: true,
    thumb: null,
  },
  {
    id: 4, name: 'Próximo case', category: 'Automação',
    desc: 'Novo projeto em desenvolvimento. Seu negócio pode ocupar este espaço com site, dashboard ou cardápio digital.',
    url: null, tags: [], live: false, thumb: null,
  },
]

const filters = ['Todos', 'Site Pro', 'Cardápio Digital', 'Dashboard', 'Automação']

export default function Portfolio() {
  useReveal()
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <div className={styles.wrap}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={`${styles.eyebrow} reveal`}>Portfólio</p>
          <h1 className={`${styles.title} reveal`}>
            projetos que<br /><span>entregamos.</span>
          </h1>
          <p className={`${styles.sub} reveal`}>
            Cada projeto é construído com intenção: design pensado, código limpo, WhatsApp funcionando e métrica para entender resultado.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className={styles.filterSection}>
        <div className={styles.filterInner}>
          <div className={styles.filters}>
            {filters.map(f => (
              <button
                key={f}
                className={`${styles.filterBtn} ${active === f ? styles.filterActive : ''}`}
                onClick={() => setActive(f)}
                data-cursor
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className={styles.gridSection}>
        <div className={styles.gridInner}>
          <div className={styles.grid}>
            {filtered.map((p, i) => (
              <div
                key={p.id}
                className={`${styles.card} ${!p.live ? styles.cardSoon : ''} reveal`}
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className={styles.thumb}>
                  {p.thumb
                    ? <img src={p.thumb} alt={p.name} />
                    : (
                      <div className={styles.thumbPlaceholder}>
                        {p.live
                          ? <span className={styles.thumbInitials}>{p.name.slice(0,2).toUpperCase()}</span>
                          : (
                            <div className={styles.soonContent}>
                              <div className={styles.soonDot} />
                              <span>em breve</span>
                            </div>
                          )
                        }
                      </div>
                    )
                  }
                  {p.live && (
                    <div className={styles.thumbOverlay}>
                      {p.url && (
                        <a
                          href={p.url} target="_blank" rel="noreferrer"
                          className={styles.thumbLink} data-cursor
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                          ver projeto
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className={styles.info}>
                  <div className={styles.infoTop}>
                    <span className={styles.cat}>{p.category}</span>
                    {p.live
                      ? <span className={styles.liveTag}><span className={styles.liveDot} />live</span>
                      : <span className={styles.soonTag}>em breve</span>
                    }
                  </div>
                  <h3 className={styles.name}>{p.name}</h3>
                  <p className={styles.desc}>{p.desc}</p>
                  {p.result && (
                    <div className={styles.result}>
                      <span className={styles.resultNum}>{p.result.num}</span>
                      <span className={styles.resultLabel}>{p.result.label}</span>
                    </div>
                  )}
                  {p.tags.length > 0 && (
                    <div className={styles.tags}>
                      {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <p className={`${styles.ctaEye} reveal`}>Próximo projeto</p>
          <h2 className={`${styles.ctaTitle} reveal`}>
            pode ser o <span>seu.</span>
          </h2>
          <p className={`${styles.ctaSub} reveal`}>
            Vamos construir algo bonito, mensurável e útil para vender.
          </p>
          <a
            href="https://wa.me/5511940723507?text=Oi%2C%20vim%20pelo%20site%20da%20Vera%20Group%20e%20quero%20um%20or%C3%A7amento."
            target="_blank" rel="noreferrer"
            className={`${styles.ctaBtn} reveal`}
            data-cursor
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
            </svg>
            falar com a gente
          </a>
        </div>
      </section>
    </div>
  )
}
