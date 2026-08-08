import { useEffect, useState } from 'react'

/* A very small router. Pages live on ?p=<name> so that in-page
   anchor links (#about, #work) keep working on any static host —
   no server rewrite rules needed. */

const EVENT = 'app:navigate'

export function currentPage() {
  if (typeof window === 'undefined') return 'home'
  return new URLSearchParams(window.location.search).get('p') || 'home'
}

export function navigate(page, hash) {
  const url = page === 'home' ? `${window.location.pathname}` : `${window.location.pathname}?p=${page}`
  window.history.pushState({}, '', url + (hash ? `#${hash}` : ''))
  window.dispatchEvent(new Event(EVENT))
  if (hash) {
    requestAnimationFrame(() => {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  } else {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
}

export function usePage() {
  const [page, setPage] = useState(currentPage)
  useEffect(() => {
    const sync = () => setPage(currentPage())
    window.addEventListener('popstate', sync)
    window.addEventListener(EVENT, sync)
    return () => {
      window.removeEventListener('popstate', sync)
      window.removeEventListener(EVENT, sync)
    }
  }, [])
  return page
}

/* Use on any link that points at a section: goes home first if needed. */
export function goToSection(e, id) {
  e.preventDefault()
  if (currentPage() !== 'home') {
    navigate('home', id)
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState({}, '', `${window.location.pathname}#${id}`)
  }
}
