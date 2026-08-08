import { services } from '../data/content'
import Rich from './Rich'
import Section from './Section'

export default function Services() {
  return (
    <Section id="services" eyebrow={services.eyebrow} title={services.title} aside={services.aside}>
      <div className="services">
        {services.columns.map((col) => (
          <div className="svc" key={col.tag}>
            <div className="svc__tag">{col.tag}</div>
            <h3 className="svc__title">{col.title}</h3>
            <ul className="svc__list">
              {col.points.map((p, i) => <li key={i}><Rich text={p} /></li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="modes">
        {services.modes.map((m) => (
          <div className="mode" key={m.tag}>
            <div className="mode__tag">{m.tag}</div>
            <h4 className="mode__title">{m.title}</h4>
            <p className="mode__body">{m.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
