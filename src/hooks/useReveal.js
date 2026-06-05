import { useEffect } from 'react'

/**
 * Efeito de entrada: revela elementos .reveal com fade + subida quando
 * entram na tela (e imediatamente os que já estão visíveis na montagem,
 * ex: ao trocar de aba).
 *
 * Os elementos que mudam de className no clique (FAQ, paletas) ficam
 * DENTRO de um wrapper .reveal — assim o React nunca reescreve a classe
 * do .reveal, e o efeito acontece uma vez sem sumir depois.
 */
export function useReveal(selector = '.reveal') {
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      const els = document.querySelectorAll(selector)

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              io.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px -8% 0px' }
      )

      els.forEach((el) => {
        const r = el.getBoundingClientRect()
        // já visível na montagem → revela na hora (com o transition do CSS)
        if (r.top < vh * 0.95 && r.bottom > 0) {
          el.classList.add('visible')
        } else {
          io.observe(el)
        }
      })

      useReveal._io = io
    })

    return () => {
      cancelAnimationFrame(raf)
      if (useReveal._io) { useReveal._io.disconnect(); useReveal._io = null }
    }
  }, [selector])
}
