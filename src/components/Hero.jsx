import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './Hero.module.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let cleanup = () => {}
    let cancelled = false

    // three.js é carregado sob demanda para sair do bundle principal
    import('three').then((THREE) => {
      if (cancelled || !canvasRef.current) return
      const W = window.innerWidth, H = window.innerHeight
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
      renderer.setSize(W, H)
      const scene  = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 600)
      camera.position.set(0, 0, 10)

      const N   = window.innerWidth < 768 ? 500 : 2800
      const geo = new THREE.BufferGeometry()
      const pos = new Float32Array(N * 3)
      const col = new Float32Array(N * 3)

      for (let i = 0; i < N; i++) {
        pos[i*3]   = (Math.random()-0.5)*40
        pos[i*3+1] = (Math.random()-0.5)*24
        pos[i*3+2] = (Math.random()-0.5)*20
        if (Math.random() > 0.72) {
          col[i*3]   = 0.75+Math.random()*0.15
          col[i*3+1] = 0.60+Math.random()*0.12
          col[i*3+2] = 0.22+Math.random()*0.12
        } else {
          const v = 0.05+Math.random()*0.09
          col[i*3]=v; col[i*3+1]=v; col[i*3+2]=v*0.75
        }
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
      geo.setAttribute('color',    new THREE.BufferAttribute(col, 3))
      const mat = new THREE.PointsMaterial({ size: 0.04, vertexColors: true, transparent: true, opacity: 0.85 })
      const particles = new THREE.Points(geo, mat)
      scene.add(particles)

      const shapes = []
      const configs = [
        { size:1.1, color:0xc9a96e, opacity:0.18, x:-5,   y:1.5 },
        { size:0.75,color:0x1e2230, opacity:0.35, x:5.5,  y:-1  },
        { size:0.55,color:0xc9a96e, opacity:0.10, x:0,    y:-3  },
      ]
      configs.forEach(({ size, color, opacity, x, y }) => {
        const g = new THREE.IcosahedronGeometry(size, 1)
        const m = new THREE.MeshBasicMaterial({ color, wireframe:true, transparent:true, opacity })
        const mesh = new THREE.Mesh(g, m)
        mesh.position.set(x, y, -2)
        mesh.userData = { sp:0.2+Math.random()*0.3, ph:Math.random()*Math.PI*2, oy:y }
        scene.add(mesh); shapes.push(mesh)
      })

      const lmat = new THREE.LineBasicMaterial({ color:0x181c2a, transparent:true, opacity:0.35 })
      for (let i = 0; i < 14; i++) {
        const sx=(Math.random()-0.5)*28, sy=(Math.random()-0.5)*16
        const pts=[new THREE.Vector3(sx,sy,Math.random()*2-1), new THREE.Vector3(sx+(Math.random()-0.5)*12,sy+(Math.random()-0.5)*7,Math.random()*2-1)]
        scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lmat))
      }

      let t=0, mox=0, moy=0
      const posArr = geo.attributes.position.array
      const onMouseMove = (e) => {
        mox=(e.clientX/innerWidth-0.5)*2
        moy=-(e.clientY/innerHeight-0.5)*2
      }
      window.addEventListener('mousemove', onMouseMove, { passive: true })

      let animId
      const animate = () => {
        animId=requestAnimationFrame(animate); t+=0.005
        geo.attributes.position.needsUpdate=true
        for (let i=0;i<N;i++) {
          posArr[i*3+1]+=0.0015
          if (posArr[i*3+1]>12) posArr[i*3+1]=-12
        }
        camera.position.x+=(mox*1.8-camera.position.x)*0.03
        camera.position.y+=(moy*1.1-camera.position.y)*0.03
        camera.lookAt(0,0,0)
        shapes.forEach(s=>{
          s.rotation.x+=s.userData.sp*0.007
          s.rotation.y+=s.userData.sp*0.005
          s.position.y=s.userData.oy+Math.sin(t*s.userData.sp+s.userData.ph)*1.2
        })
        renderer.render(scene, camera)
      }
      animate()

      const onResize = () => {
        const W2=innerWidth,H2=innerHeight
        camera.aspect=W2/H2; camera.updateProjectionMatrix(); renderer.setSize(W2,H2)
      }
      window.addEventListener('resize', onResize)

      cleanup = () => {
        cancelAnimationFrame(animId)
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('resize', onResize)
        renderer.dispose()
      }
    })

    return () => { cancelled = true; cleanup() }
  }, [])

  useEffect(() => {
    // nascem invisíveis pelo CSS (globals) — aqui só garantimos o y inicial
    gsap.set(['#h-pre','#h-title','#h-sub','#h-actions','#h-hint','#h-trust'],{opacity:0,y:18})
    // como a Home monta só após a splash sair, entramos sem delay longo
    const tl = gsap.timeline({ delay:0.15 })
    tl.to('#h-pre',     {opacity:1,y:0,duration:0.8,ease:'power3.out'},0)
      .to('#h-title',   {opacity:1,y:0,duration:1.0,ease:'power4.out'},0.15)
      .to('#h-sub',     {opacity:1,y:0,duration:0.8,ease:'power3.out'},0.55)
      .to('#h-actions', {opacity:1,y:0,duration:0.8,ease:'power3.out'},0.8)
      .to('#h-trust',   {opacity:1,y:0,duration:0.8,ease:'power3.out'},1.0)
      .to('#h-hint',    {opacity:0.3,y:0,duration:0.8,ease:'power3.out'},1.2)
  }, [])

  return (
    <section className={styles.hero} id="hero">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.inner}>
        <p className={styles.pre} id="h-pre">Tecnologia · Design · Growth</p>
        <h1 className={styles.title} id="h-title">
          vera<span className={styles.dot}>.</span>
        </h1>
        <p className={styles.sub} id="h-sub">
          Sites, cardápios, dashboards<br />
          <em>e automações sérias.</em> Do design ao resultado.
        </p>
        <div className={styles.actions} id="h-actions">
          <a href="#lp" className={styles.btnPrimary} data-cursor>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/>
            </svg>
            ver soluções
          </a>
          <a href="#sobre" className={styles.btnGhost} data-cursor>
            conhecer o grupo
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/>
            </svg>
          </a>
        </div>
      </div>

      {/* trust strip — preenche a base sem competir com o vera. */}
      <div className={styles.trust} id="h-trust">
        <div className={styles.trustItem}>
          <span className={styles.trustNum}>3 dias</span>
          <span className={styles.trustLabel}>entrega média</span>
        </div>
        <span className={styles.trustSep} />
        <div className={styles.trustItem}>
          <span className={styles.trustNum}>100%</span>
          <span className={styles.trustLabel}>mobile first</span>
        </div>
        <span className={styles.trustSep} />
        <div className={styles.trustItem}>
          <span className={styles.trustNum}>10+</span>
          <span className={styles.trustLabel}>projetos entregues</span>
        </div>
        <span className={styles.trustSep} />
        <div className={styles.trustItem}>
          <span className={styles.trustNum}>Itu · SP</span>
          <span className={styles.trustLabel}>feito por nós</span>
        </div>
      </div>

      <div className={styles.scrollHint} id="h-hint">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
        </svg>
        <span>scroll</span>
      </div>
      <div className={styles.fadeBottom} />
    </section>
  )
}
