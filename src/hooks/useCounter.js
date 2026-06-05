import { useEffect } from 'react'

// Anima [data-count] de 0 até o valor quando o grupo [data-counters] entra na tela.
export function useCounter() {
  useEffect(() => {
    const groups = document.querySelectorAll('[data-counters]')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        obs.unobserve(entry.target)
        entry.target.querySelectorAll('[data-count]').forEach((el) => {
          const target = parseInt(el.dataset.count, 10) || 0
          const suf = el.dataset.suf || ''
          const dur = 1400
          const start = performance.now()
          const tick = (now) => {
            const p = Math.min((now - start) / dur, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            el.textContent = Math.round(target * eased) + suf
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      })
    }, { threshold: 0.3 })
    groups.forEach((g) => obs.observe(g))
    return () => obs.disconnect()
  }, [])
}
