import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return
    const dot  = document.createElement('div')
    const ring = document.createElement('div')
    dot.id = 'cursor'
    ring.id = 'cursor-ring'
    document.body.appendChild(dot)
    document.body.appendChild(ring)

    let rx = 0, ry = 0, mx = 0, my = 0, raf
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top  = my + 'px'
    }
    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    loop()
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      dot.remove(); ring.remove()
    }
  }, [])
  return null
}
