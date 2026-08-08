import { useReveal } from '../hooks'

export default function Section({ id, eyebrow, title, aside, children }) {
  const ref = useReveal()
  return (
    <section className="section" id={id}>
      <div className="wrap">
        <div className={`head${aside ? ' head--split' : ''}`}>
          <div className="head__eyebrow">{eyebrow}</div>
          <h2 className="head__title">{title}</h2>
          {aside && <div className="head__aside">{aside}</div>}
        </div>
        <div className="reveal" ref={ref}>{children}</div>
      </div>
    </section>
  )
}
