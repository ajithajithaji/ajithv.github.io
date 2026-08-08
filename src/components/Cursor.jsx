import { useEffect, useRef, useState } from 'react'

/* A two-part cursor: a dot that tracks the pointer exactly and a ring that
   eases in behind it. The ring opens up over anything clickable and gets out
   of the way over text fields so the caret stays readable.

   Disabled on touch devices and when the visitor prefers reduced motion. */

const INTERACTIVE = 'a, button, [role="button"], .chip, summary'
const TEXT_FIELDS = 'input, textarea, select, [contenteditable="true"]'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const target = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const frame = useRef(0)

  const [enabled, setEnabled] = useState(false)
  const [state, setState] = useState('')   // '' | 'hover' | 'text'
  const [down, setDown] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    setEnabled(true)
    document.body.classList.add('has-cursor')

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)

      const el = e.target instanceof Element ? e.target : null
      if (el?.closest(TEXT_FIELDS)) setState('text')
      else if (el?.closest(INTERACTIVE)) setState('hover')
      else setState('')
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)
    const onDown = () => setDown(true)
    const onUp = () => setDown(false)

    /* Ring lags behind with simple easing; the dot is pinned to the pointer. */
    const tick = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.18
      ring.current.y += (target.current.y - ring.current.y) * 0.18

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%)`
      }
      frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      cancelAnimationFrame(frame.current)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.body.classList.remove('has-cursor')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!enabled) return null

  const cls = [state, down ? 'down' : '', visible ? '' : 'away'].filter(Boolean).join(' ')

  return (
    <div className="cursor" aria-hidden="true">
      <div className={`cursor__ring ${cls}`} ref={ringRef} />
      <div className={`cursor__dot ${cls}`} ref={dotRef} />
    </div>
  )
}
