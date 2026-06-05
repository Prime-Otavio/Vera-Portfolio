import styles from './LandingPages.module.css'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/>
      </svg>
    ),
    title: 'Design único',
    desc:  'Criado do zero para o seu negócio. Sem templates, sem visual genérico.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Código limpo',
    desc:  'Sites rápidos, responsivos e preparados para publicar sem peso desnecessário.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5"/>
      </svg>
    ),
    title: 'WhatsApp e leads',
    desc:  'Botões, formulários e mensagens prontas para transformar visita em conversa.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Medição real',
    desc:  'Analytics, eventos e dashboards para saber o que está gerando contato.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Você nos conta o negócio',
    desc:  'A gente entende o que você vende, para quem vende e qual ação o visitante precisa tomar.',
  },
  {
    num: '02',
    title: 'Construímos e apresentamos',
    desc:  'Desenvolvemos a página ou cardápio, validamos o visual e ajustamos antes de publicar.',
  },
  {
    num: '03',
    title: 'No ar e medindo',
    desc:  'O projeto vai para o ar com WhatsApp, formulário, eventos e base para acompanhar resultado.',
  },
]

function MockScreen({ name }) {
  return (
    <div className={styles.mockWrap}>
      <div className={styles.mockBar}>
        <span className={styles.mockDot} style={{ background: '#ff5f57' }} />
        <span className={styles.mockDot} style={{ background: '#ffbd2e' }} />
        <span className={styles.mockDot} style={{ background: '#28ca41' }} />
        <span className={styles.mockUrl}>{name}</span>
      </div>
      <div className={styles.mockBody}>
        <div className={styles.mockLogo}>{name.split('.')[0]}<span>.</span></div>
        <div className={styles.mockLines}>
          <div className={styles.mockLine} style={{ width: '68%' }} />
          <div className={styles.mockLine} style={{ width: '45%' }} />
          <div className={styles.mockLine} style={{ width: '80%' }} />
          <div className={styles.mockLine} style={{ width: '32%', marginTop: '0.6rem' }} />
        </div>
      </div>
    </div>
  )
}

export default function LandingPages() {
  return (
    <section id="lp" className={styles.wrap}>

      {/* Tela 1: título + descrição + features (100vh) */}
      <div className={styles.header}>
        <div className="inner">
          <div className={styles.headTop}>
            <div>
              <div className="s-label reveal">soluções digitais</div>
              <h2 className="reveal">Páginas que<br /><em>convertem.</em></h2>
            </div>
            <p className={`${styles.desc} reveal`}>
              Design sério, código limpo e foco em resultado. A Vera Group cria sites,
              cardápios digitais, dashboards e automações para negócios locais venderem melhor.
            </p>
          </div>

          <div className={styles.featGrid}>
            {features.map(({ icon, title, desc }, i) => (
              <div key={title} className={`${styles.feat} reveal d${i + 1}`} data-cursor>
                <div className={styles.featIcon}>{icon}</div>
                <div>
                  <div className={styles.featTitle}>{title}</div>
                  <div className={styles.featDesc}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-full">
        <div className="inner">

          {/* Processo */}
          <div className={styles.processoRow}>
            <div className="s-label reveal">como funciona</div>
            <h2 className="reveal" style={{ marginBottom: '0.6rem' }}>
              do briefing<br /><em>ao ar.</em>
            </h2>
            <div className={styles.processoGrid}>
              {steps.map(({ num, title, desc }, i) => (
                <div key={num} className={`${styles.step} reveal d${i + 1}`}>
                  <div className={styles.stepNum}>{num}</div>
                  <div className={styles.stepTitle}>{title}</div>
                  <div className={styles.stepDesc}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio */}
          <div className={styles.portfolioRow}>
            <div className="s-label reveal">portfólio</div>
            <h2 className="reveal" style={{ marginBottom: '3rem' }}>
              O que já <em>entregamos.</em>
            </h2>

            <div className={styles.portfolioGrid}>
              <div
                className={`${styles.pCard} reveal d1`}
                onClick={() => window.open('/ronaldo-rocha-site/index.html', '_blank')}
                data-cursor
              >
                <div className={styles.pThumb}>
                  <MockScreen name="ronaldo.rocha" />
                  <span className={styles.pBadge}>publicado</span>
                </div>
                <div className={styles.pInfo}>
                  <h3 className={styles.pTitle}>Ronaldo Rocha</h3>
                  <p className={styles.pDesc}>
                    Site de engenharia com foco em orçamento, WhatsApp inteligente,
                    formulário completo, eventos e base para dashboard.
                  </p>
                </div>
              </div>

              <div
                className={`${styles.pCard} reveal d2`}
                onClick={() => window.open('/vo-neis-cardapio/index.html', '_blank')}
                data-cursor
              >
                <div className={styles.pThumb}>
                  <MockScreen name="vo.neis" />
                  <span className={styles.pBadge}>cardápio</span>
                </div>
                <div className={styles.pInfo}>
                  <h3 className={styles.pTitle}>Vó Neis Confeitaria</h3>
                  <p className={styles.pDesc}>
                    Cardápio digital premium com categorias, carrinho simples,
                    total parcial e pedido organizado pelo WhatsApp.
                  </p>
                </div>
              </div>

              <div className={`${styles.pEmpty} reveal d3`}>
                <div className={styles.pEmptyIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <p>Seu negócio pode ser o próximo case aqui.</p>
                <a href="#contato" data-cursor>solicitar orçamento →</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
