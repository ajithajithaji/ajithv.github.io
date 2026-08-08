import { useEffect, useState } from 'react'
import { deployLabel, deployLog, heroDomains, profile } from '../data/content'
import Rich from './Rich'

export default function Hero({ start }) {
  const [shown, setShown] = useState(0)
  const [clock, setClock] = useState('')

  useEffect(() => {
    if (!start) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setShown(deployLog.length); return }
    let i = 0
    const id = setInterval(() => {
      i += 1
      setShown(i)
      if (i >= deployLog.length) clearInterval(id)
    }, 420)
    return () => clearInterval(id)
  }, [start])

  useEffect(() => {
    const tick = () => {
      setClock(
        new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata',
        }).format(new Date())
      )
    }
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero__status">
          <span className="dot" /> Available for work
          <span className="sep">/</span>
          {profile.location} · {profile.timezone} {clock}
          <span className="sep">/</span>
          {profile.role}
        </div>

        <div className="hero__grid">
          <div>
            <div className="hero__role">{profile.role}</div>
            <h1 className="hero__name">
              {profile.displayName}<b>.</b>
            </h1>
            <p className="hero__lede">
              <strong>{profile.headlineLead}</strong> {profile.headlineRest}
            </p>
            <p className="hero__sub">
              <Rich text={profile.heroSub} />
            </p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="#work">View experience →</a>
              <a className="btn" href="#contact">Get in touch</a>
              <a className="btn" href={profile.cvUrl} target="_blank" rel="noreferrer">Download CV ↓</a>
            </div>
          </div>

          <div>
            <div className="log">
              <div className="log__bar">
                <span className="log__lights"><i /><i /><i /></span>
                {deployLabel}
              </div>
              <div className="log__body">
                {deployLog.slice(0, shown).map((l, i) => (
                  <div className="log__line" key={i} style={{ animationDelay: `${i * 0.03}s` }}>
                    <span className={`log__tag ${l.tone}`}>{l.tag}</span>
                    <span className="log__text">{l.text}</span>
                  </div>
                ))}
                {shown < deployLog.length && (
                  <div className="log__line" style={{ opacity: 1, transform: 'none' }}>
                    <span className="log__caret" />
                  </div>
                )}
              </div>
            </div>

            <div className="domains">
              {heroDomains.map((d) => (
                <div className="domains__cell" key={d.title}>
                  <b>{d.title}</b>
                  <span>{d.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
