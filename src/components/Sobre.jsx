import { useCounter } from '../hooks/useCounter'
import styles from './Sobre.module.css'

const stats = [
  { count: '3',   suf: ' dias', label: 'prazo médio de entrega' },
  { count: '349', suf: '',      label: 'a partir de — R$'       },
  { count: '4',   suf: '',      label: 'especialistas no time'   },
  { count: '100', suf: '%',     label: 'mobile first'            },
]

const team = [
  { initials: 'AR', name: 'Alaf Rocha',      role: 'Marketing & Growth', tags: ['Aquisição', 'Retenção', 'Growth Hacking', 'Estratégia de marca'] },
  { initials: 'OB', name: 'Otávio Barbieri', role: 'Backend & IA · Fundador', tags: ['Arquitetura', 'APIs', 'Inteligência Artificial', 'Infraestrutura'] },
  { initials: 'DP', name: 'Davi Paulino',    role: 'Frontend', tags: ['React', 'TypeScript', 'Design de Interface', 'Performance Web'] },
  { initials: 'EG', name: 'Enzo Gabriel',    role: 'Design', tags: ['Figma', 'Sistema Visual', 'UX / UI', 'Identidade de Produto'] },
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
            <h2 className="reveal">Quatro pessoas.<br /><em>Um padrão.</em></h2>
          </div>
          <p className={`${styles.introText} reveal`}>
            A <strong>vera.</strong> nasceu de uma ideia simples: tecnologia bem feita não precisa
            ser cara nem demorar meses. Somos quatro estudantes de tecnologia em Itu, SP,
            com foco real em entrega e qualidade.
            <br /><br />
            Cada integrante é especialista no que faz. O que a gente entrega foi pensado,
            projetado e construído com intenção.
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
              <div className={styles.cardNum}>0{i + 1} / 04</div>
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
