import styles from './Contato.module.css'

const links = [
  {
    href: 'https://wa.me/5511940723507?text=Oi%2C%20vim%20pelo%20site%20da%20Vera%20Group%20e%20quero%20um%20or%C3%A7amento.',
    label: 'WhatsApp',
    value: '+55 11 94072-3507',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
  {
    href: 'https://instagram.com/veragroup.ia',
    label: 'Instagram',
    value: '@veragroup.ia',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5"/>
      </svg>
    ),
  },
]

export default function Contato() {
  return (
    <section id="contato" className={styles.wrap}>
      <div className="section">
        <div className={styles.layout}>
          <div className={styles.left}>
            <div className="s-label reveal">contato</div>
            <h2 className="reveal">Bora<br /><em>conversar?</em></h2>
            <p className={`${styles.desc} reveal`}>
              A gente responde rápido e sem enrolação.<br />
              Manda mensagem — a gente vai atrás.
            </p>

            <div className={`${styles.meta} reveal`}>
              <div className={styles.metaItem}>
                <span className={styles.metaK}>resposta</span>
                <span className={styles.metaV}>em até 24h</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaK}>onde</span>
                <span className={styles.metaV}>Itu · São Paulo</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaK}>orçamento</span>
                <span className={styles.metaV}>sem compromisso</span>
              </div>
            </div>
          </div>

          <div className={`${styles.linksCol} reveal`}>
            {links.map(({ href, label, value, icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className={styles.link} data-cursor>
                <div className={styles.linkIcon}>{icon}</div>
                <div className={styles.linkText}>
                  <span className={styles.linkLabel}>{label}</span>
                  <span className={styles.linkValue}>{value}</span>
                </div>
                <div className={styles.arrow}>›</div>
              </a>
            ))}

            <div className={styles.note}>
              <div className={styles.noteDot} />
              <span>Disponíveis agora — normalmente respondemos em minutos.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
