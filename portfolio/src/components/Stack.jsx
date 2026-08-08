import { stack } from '../data/content'
import Section from './Section'

export default function Stack() {
  return (
    <Section id="stack" eyebrow={stack.eyebrow} title={stack.title} aside={stack.aside}>
      <div className="clusters">
        {stack.clusters.map((c) => (
          <div className="cluster" key={c.name}>
            <div className="cluster__top">
              <span className="cluster__name">{c.name}</span>
              <span className="cluster__count">{String(c.items.length).padStart(2, '0')}</span>
            </div>
            <h3 className="cluster__title">{c.title}</h3>
            <ul className="cluster__items">
              {c.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
