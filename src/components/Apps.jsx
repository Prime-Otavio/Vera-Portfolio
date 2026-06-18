import styles from './Apps.module.css'

const apps = [
  {
    title: 'vera.',
    desc: 'Gestão financeira inteligente com IA. Analisa gastos, detecta problemas e sugere soluções, integrado ao Open Finance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12h8M12 8v8"/>
      </svg>
    ),
  },
  {
    title: 'vera. scan',
    desc: 'Scanner de notas fiscais com análise automática de produtos e comparação de preços em tempo real com estabelecimentos próximos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/>
        <rect x="7" y="7" width="10" height="10" rx="1"/>
      </svg>
    ),
  },
  {
    title: 'vera. pages',
    desc: 'Plataforma para criar, gerenciar e monitorar landing pages, cardápios e dashboards com analytics integrado e conexão nativa ao WhatsApp.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
]

export default function Apps() {
  return (
    <section id="apps" className={styles.wrap}>
      <div className="section">
        <div className="s-label reveal">aplicativos</div>
        <div className={styles.titleRow}>
          <h2 className="reveal">Produtos que estamos<br /><em>construindo.</em></h2>
          <p className={`${styles.subtitle} reveal`}>
            Além de landing pages, a vera. desenvolve seus próprios produtos.
            Em breve disponíveis para o público.
          </p>
        </div>

        <div className={styles.grid}>
          {apps.map(({ title, desc, icon }, i) => (
            <div key={title} className={`${styles.card} reveal d${i + 1}`} data-cursor>
              <div className={styles.badge}>
                <span className={styles.pulseDot} />
                em breve
              </div>
              <div className={styles.icon}>{icon}</div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.desc}>{desc}</p>
              <div className={styles.blur} />
            </div>
          ))}
        </div>

        <div className={`${styles.foot} reveal`}>
          <div className={styles.footItem}>
            <span className={styles.footNum}>03</span>
            <span className={styles.footLabel}>produtos em desenvolvimento</span>
          </div>
          <div className={styles.footItem}>
            <span className={styles.footNum}>IA</span>
            <span className={styles.footLabel}>no núcleo de cada um</span>
          </div>
          <div className={styles.footItem}>
            <span className={styles.footNum}>2026</span>
            <span className={styles.footLabel}>primeiros lançamentos</span>
          </div>
          <a className={styles.footCta} href="#contato" data-cursor>
            quero saber antes →
          </a>
        </div>
      </div>
    </section>
  )
}
