import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './Splash.module.css'

export default function Splash({ onDone }) {
  const root      = useRef(null)
  const canvasRef = useRef(null)
  const fillRef   = useRef(null)
  const countRef  = useRef(null)
  const finished  = useRef(false)

  // ---- exit (sobe revelando o site) ----
  const finish = () => {
    if (finished.current) return
    finished.current = true

    const tl = gsap.timeline({
      onComplete: () => { document.body.style.overflow = ''; onDone?.() },
    })
    tl.to(`.${styles.inner}, .${styles.loaderWrap}, .${styles.skip}`, {
      opacity: 0, y: -24, duration: 0.55, ease: 'power2.inOut',
    })
      .to(`.${styles.cloud}`, { opacity: 0, duration: 0.55, ease: 'power2.in' }, 0)
      .to(root.current, {
        yPercent: -100, duration: 0.9, ease: 'power4.inOut',
      }, 0.35)
      .set(root.current, { display: 'none' })
  }

  // ---- particle canvas ----
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, raf
    const stars = []

    const resize = () => {
      W = canvas.width  = window.innerWidth  * Math.min(devicePixelRatio, 2)
      H = canvas.height = window.innerHeight * Math.min(devicePixelRatio, 2)
      canvas.style.width  = window.innerWidth  + 'px'
      canvas.style.height = window.innerHeight + 'px'
    }
    resize()

    const N = window.innerWidth < 768 ? 60 : 120
    for (let i = 0; i < N; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.6 + 0.3,
        sp: Math.random() * 0.25 + 0.05,
        a: Math.random() * 0.6 + 0.2,
        gold: Math.random() > 0.72,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      stars.forEach(s => {
        s.y -= s.sp * (devicePixelRatio || 1)
        if (s.y < 0) { s.y = H; s.x = Math.random() * W }
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.gold
          ? `rgba(201,169,110,${s.a})`
          : `rgba(242,239,232,${s.a * 0.5})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }

    // pinta um frame estático e só inicia o loop após a entrada assentar
    stars.forEach(s => {
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = s.gold ? `rgba(201,169,110,${s.a})` : `rgba(242,239,232,${s.a * 0.5})`
      ctx.fill()
    })
    const startTimer = setTimeout(() => { raf = requestAnimationFrame(draw) }, 500)

    window.addEventListener('resize', resize)
    return () => {
      clearTimeout(startTimer)
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // ---- entrada + loader ----
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    gsap.to(`.${styles.cloud1}`, { opacity: 1, duration: 1.6, ease: 'power2.out' })
    gsap.to(`.${styles.cloud2}`, { opacity: 1, duration: 1.6, ease: 'power2.out', delay: 0.2 })
    gsap.to(`.${styles.cloud3}`, { opacity: 1, duration: 1.6, ease: 'power2.out', delay: 0.4 })
    if (!reduce) {
      gsap.to(`.${styles.cloud1}`, { x: 60, y: 30, duration: 11, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to(`.${styles.cloud2}`, { x: -50, y: -40, duration: 13, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to(`.${styles.cloud3}`, { x: 30, y: -25, duration: 9,  repeat: -1, yoyo: true, ease: 'sine.inOut' })
    }

    // eyebrow + tagline fade (o logo sobe via CSS — ver Splash.module.css)
    const tl = gsap.timeline({ delay: 0.3 })
    tl.to(`.${styles.eyebrow}`, { opacity: 1, duration: 0.7, ease: 'power3.out' }, 0)
      .to(`.${styles.tagline}`, { opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.9)

    // loading counter 0 -> 100 then exit
    const state = { v: 0 }
    const loader = gsap.to(state, {
      v: 100,
      duration: reduce ? 1.0 : 2.8,
      ease: 'power2.out',
      delay: 0.5,
      onUpdate: () => {
        const v = Math.round(state.v)
        if (countRef.current) countRef.current.textContent = v
        if (fillRef.current) fillRef.current.style.width = v + '%'
      },
      onComplete: () => gsap.delayedCall(0.35, finish),
    })

    // fallback de segurança: se algo travar (GSAP falhar, etc.),
    // garante que a splash sempre saia em no máximo 6s.
    const safety = setTimeout(() => finish(), 6000)

    return () => { loader.kill(); tl.kill(); clearTimeout(safety) }
  }, [])

  return (
    <div className={styles.splash} ref={root}>
      <div className={styles.clouds}>
        <div className={`${styles.cloud} ${styles.cloud1}`} />
        <div className={`${styles.cloud} ${styles.cloud2}`} />
        <div className={`${styles.cloud} ${styles.cloud3}`} />
      </div>

      <canvas ref={canvasRef} className={styles.canvas} />

      <button className={styles.skip} onClick={finish}>pular intro</button>

      <div className={styles.inner}>
        <p className={styles.eyebrow}>Tecnologia · Design · Growth</p>
        <div className={styles.logoWrap}>
          <h1 className={styles.logo}>
            <span>v</span><span>e</span><span>r</span><span>a</span>
            <span className={styles.dot}>.</span>
          </h1>
        </div>
        <p className={styles.tagline}>do design ao resultado — para negócios locais</p>
      </div>

      <div className={styles.loaderWrap}>
        <div className={styles.bar}>
          <div className={styles.barFill} ref={fillRef} />
        </div>
        <div className={styles.count}><b ref={countRef}>0</b>%&nbsp;&nbsp;carregando experiência</div>
      </div>
    </div>
  )
}
