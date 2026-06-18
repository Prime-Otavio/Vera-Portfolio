import styles from './Resultados.module.css'

const cases = [
  {
    metric: '+250%',
    metricLabel: 'de faturamento',
    quote: 'O cardápio digital com lançamento de vendas mudou o jogo. Os pedidos ficaram organizados e o faturamento cresceu de verdade.',
    name: 'Vó Neis',
    role: 'Confeitaria',
    tag: 'Cardápio digital',
  },
  {
    metric: '+200%',
    metricLabel: 'de leads no WhatsApp',
    quote: 'Antes eu perdia cliente sem conseguir responder a tempo. Agora chega muito mais gente direto no WhatsApp, pronta para fechar.',
    name: 'Ronaldo Rocha',
    role: 'Engenharia Civil',
    tag: 'Site + WhatsApp',
  },
]

export default function Resultados() {
  return (
    <section id="resultados" className={styles.wrap}>
      <div className="section">
        <div className="s-label reveal">resultados</div>
        <h2 className="reveal">Não é só bonito.<br /><em>Dá resultado.</em></h2>

        <div className={styles.grid}>
          {cases.map((c, i) => (
            <figure key={c.name} className={`${styles.card} reveal d${i + 1}`} data-cursor>
              <div className={styles.metric}>{c.metric}</div>
              <div className={styles.metricLabel}>{c.metricLabel}</div>
              <blockquote className={styles.quote}>“{c.quote}”</blockquote>
              <figcaption className={styles.who}>
                <span className={styles.name}>{c.name}</span>
                <span className={styles.role}>{c.role}</span>
              </figcaption>
              <span className={styles.tag}>{c.tag}</span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
