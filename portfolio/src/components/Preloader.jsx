import { useEffect, useState } from 'react'

export default function Preloader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setPct(100); setDone(true); onDone?.(); return }

    document.body.classList.add('is-locked')
    let current = 0
    const id = setInterval(() => {
      current += Math.random() * 11 + 4
      if (current >= 100) {
        current = 100
        clearInterval(id)
        setTimeout(() => {
          setDone(true)
          document.body.classList.remove('is-locked')
          onDone?.()
        }, 320)
      }
      setPct(Math.floor(current))
    }, 110)

    return () => { clearInterval(id); document.body.classList.remove('is-locked') }
  }, [onDone])

  return (
    <div className={`preloader${done ? ' done' : ''}`} aria-hidden={done}>
      <div className="preloader__row">
        <div className="preloader__label">Loading portfolio</div>
        <div className="preloader__num">{String(pct).padStart(3, '0')}</div>
      </div>
      <div className="preloader__bar">
        <div className="preloader__fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
