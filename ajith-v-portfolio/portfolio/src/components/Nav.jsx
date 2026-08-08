import { useEffect, useMemo, useState } from 'react'
import { nav, profile } from '../data/content'
import { useActiveSection, useScrolled } from '../hooks'
import { goToSection, navigate } from '../router'
import Socials from './Socials'

const PRIMARY = ['about', 'work', 'projects', 'integrations', 'services', 'stack']

export default function Nav({ page }) {
  const [open, setOpen] = useState(false)
  const stuck = useScrolled(30)
  const onHome = page === 'home'
  const ids = useMemo(() => (onHome ? nav.map((n) => n.id) : []), [onHome])
  const active = useActiveSection(ids)

  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    return () => document.body.classList.remove('is-locked')
  }, [open])

  useEffect(() => { setOpen(false) }, [page])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const primary = nav.filter((n) => PRIMARY.includes(n.id))

  const jump = (e, id) => { setOpen(false); goToSection(e, id) }
  const goContact = (e) => { e.preventDefault(); setOpen(false); navigate('contact') }
  const goHome = (e) => { e.preventDefault(); setOpen(false); navigate('home') }

  return (
    <>
      <header className={`nav${stuck || !onHome ? ' stuck' : ''}`}>
        <div className="wrap nav__inner">
          <a href="./" className="nav__brand" onClick={goHome}>
            {profile.navBrand || profile.displayName}<span>.</span>
          </a>

          <nav className="nav__links" aria-label="Sections">
            {primary.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`nav__link${onHome && active === n.id ? ' active' : ''}`}
                onClick={(e) => jump(e, n.id)}
              >
                {n.label}
              </a>
            ))}
            <a
              href="?p=contact"
              className={`nav__link${!onHome ? ' active' : ''}`}
              onClick={goContact}
            >
              Contact
            </a>
          </nav>

          <div className="nav__cta">
            <a className="btn btn--ghost" href={profile.cvUrl} target="_blank" rel="noreferrer">CV</a>
            <a className="btn btn--solid" href="?p=contact" onClick={goContact}>Hire me</a>
            <button
              className={`nav__burger${open ? ' open' : ''}`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <i /><i /><i />
            </button>
          </div>
        </div>
      </header>

      <div className={`menu${open ? ' open' : ''}`} aria-hidden={!open} inert={open ? undefined : ''}>
        <div className="menu__list">
          {nav
            .filter((n) => n.id !== 'contact')
            .map((n, i) => (
              <a key={n.id} href={`#${n.id}`} className="menu__item" onClick={(e) => jump(e, n.id)}>
                <em>{String(i + 1).padStart(2, '0')}</em>
                {n.label}
              </a>
            ))}
          <a href="?p=contact" className="menu__item" onClick={goContact}>
            <em>10</em>
            Contact
          </a>
        </div>

        <div className="menu__foot">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <Socials variant="bubble" size={19} />
        </div>
      </div>
    </>
  )
}
