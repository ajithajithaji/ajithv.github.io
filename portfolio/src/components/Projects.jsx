import { projects } from '../data/content'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="projects" eyebrow={projects.eyebrow} title={projects.title} aside={projects.aside}>
      <div className="projects">
        {projects.items.map((p) => (
          <article className={`card${p.featured ? ' card--wide' : ''}`} key={p.title}>
            <div className="card__top">
              <span className="card__no">{p.no}</span>
              <span className="card__kind">{p.kind}</span>
            </div>
            <h3 className="card__title">{p.title}</h3>
            <p className="card__body">{p.body}</p>
            <div className="chips">
              {p.chips.map((c) => <span className="chip" key={c}>{c}</span>)}
            </div>
            <div className="card__metric">
              <b>{p.metricValue}</b>
              <span>{p.metricLabel}</span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
