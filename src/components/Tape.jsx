import styles from './Tape.module.css'

const items = [
  'sites', 'cardápios digitais', 'dashboards', 'landing pages',
  'automações', 'analytics', 'whatsapp', 'identidade visual',
]

// cada GRUPO repete os itens para garantir largura > tela.
// dois grupos idênticos lado a lado; a animação desloca a largura
// de exatamente UM grupo (-50% do total) → loop contínuo, sem vazio.
const group = [...items, ...items]

function Group() {
  return (
    <div className={styles.group}>
      {group.map((t, i) => (
        <span key={i} className={styles.item}>
          {t}<span className={styles.sep}>✦</span>
        </span>
      ))}
    </div>
  )
}

export default function Tape() {
  return (
    <div className={styles.tape} aria-hidden="true">
      <style>{`
        @keyframes veraTapeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .vera-tape-track {
          display: flex;
          width: max-content;
          flex-wrap: nowrap;
          animation: veraTapeScroll 40s linear infinite;
        }
        .vera-tape-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="vera-tape-track">
        <Group />
        <Group />
      </div>
    </div>
  )
}
