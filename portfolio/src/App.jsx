import { useCallback, useEffect, useState } from 'react'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Preloader from './components/Preloader'
import ToTop from './components/ToTop'
import ContactPage from './pages/ContactPage'
import Home from './pages/Home'
import { usePage } from './router'

export default function App() {
  const [ready, setReady] = useState(false)
  const onDone = useCallback(() => setReady(true), [])
  const page = usePage()

  /* Honour a #section in the URL once the preloader is gone. */
  useEffect(() => {
    if (!ready) return
    const id = window.location.hash.replace('#', '')
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [ready])

  return (
    <>
      <Preloader onDone={onDone} />
      <div className="bg-field" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />

      <Nav page={page} />

      <main className="shell">
        {page === 'contact' ? <ContactPage /> : <Home ready={ready} />}
      </main>

      <Footer />
      <ToTop />
      <Cursor />
    </>
  )
}
