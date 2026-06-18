import { useCounter } from '../hooks/useCounter'
import styles from './Sobre.module.css'

const stats = [
  { count: '3',   suf: ' dias', label: 'prazo médio de entrega' },
  { count: '10',  suf: '+',     label: 'projetos entregues'      },
  { count: '3',   suf: '',      label: 'especialistas no time'   },
  { count: '100', suf: '%',     label: 'mobile first'            },
]

const team = [
  { initials: 'AR', name: 'Alaf Rocha',      role: 'Marketing, Growth & Design · Sócio', tags: ['Aquisição', 'Retenção', 'Figma', 'Identidade Visual'] },
  { initials: 'OB', name: 'Otávio Barbieri', role: 'Backend & IA · Sócio',               tags: ['Arquitetura', 'APIs', 'Inteligência Artificial', 'Infraestrutura'] },
  { initials: 'DP', name: 'Davi Paulino',    role: 'Frontend · Sócio',                   tags: ['React', 'TypeScript', 'Design de Interface', 'Performance Web'] },
]

export default function Sobre() {
  useCounter()

  return (
    <section id="sobre" className={styles.wrap}>

      {/* Tela 1 — intro + stats */}
      <div className="section">
        <div className={styles.intro}>
          <div>
            <div className="s-label reveal">o grupo</div>
            <h2 className="reveal">Três pessoas.<br /><em>Um padrão.</em></h2>
          </div>
          <p className={`${styles.introText} reveal`}>
            A <strong>vera.</strong> nasceu de uma ideia simples: tecnologia bem feita não precisa
            ser cara nem demorar meses. Somos três pessoas de tecnologia em Itu, SP,
            com foco real em entrega e qualidade.
            <br /><br />
            Cada integrante é especialista no que faz. O que a gente entrega foi pensado,
            construído e testado com intenção.
          </p>
        </div>

        <div className={styles.statsGrid} data-counters>
          {stats.map(({ count, suf, label }, i) => (
            <div key={label} className={`${styles.stat} reveal d${i + 1}`}>
              <div className={styles.statNum} data-count={count} data-suf={suf}>
                0{suf}
              </div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tela 2 — time */}
      <div className={`section ${styles.teamSection}`}>
        <div className="s-label reveal">time</div>
        <h2 className="reveal">Cada um no<br /><em>seu elemento.</em></h2>

        <div className={styles.teamGrid}>
          {team.map(({ initials, name, role, tags }, i) => (
            <div key={name} className={`${styles.card} reveal d${(i % 4) + 1}`} data-cursor>
              <div className={styles.cardNum}>0{i + 1} / 03</div>
              <div className={styles.avatar}>{initials}</div>
              <div className={styles.cardName}>{name}</div>
              <div className={styles.cardRole}>{role}</div>
              <div className={styles.tags}>
                {tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
