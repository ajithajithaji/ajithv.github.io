import { useEffect, useRef, useState } from 'react'

/* Adds .in to an element once it scrolls into view. */
export function useReveal(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { el.classList.add('in'); return }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el) }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px', ...options }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

/* Tracks which section id is currently in view. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])
  return active
}

/* Counts from 0 to target once visible. */
export function useCountUp(target, duration = 1400) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setValue(target); return }
    let raf
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        io.unobserve(el)
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setValue(Math.round(target * eased))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [target, duration])
  return [ref, value]
}

/* True once the page has scrolled past `offset`. */
export function useScrolled(offset = 40) {
  const [past, setPast] = useState(false)
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return past
}
