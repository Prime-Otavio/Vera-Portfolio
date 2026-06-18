import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} data-cursor>
          vera<span>.</span>
        </button>
        <p className={styles.place}>Itu, São Paulo · 2026</p>
        <p className={styles.tags}>design · código · crescimento</p>
      </div>
    </footer>
  )
}
