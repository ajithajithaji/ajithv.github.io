import { experience } from '../data/content'
import { useCountUp } from '../hooks'
import Rich from './Rich'
import Section from './Section'

function Stat({ stat }) {
  const [ref, value] = useCountUp(stat.value)
  return (
    <div className="stats__cell" ref={ref}>
      <div className="stats__num">{value}{stat.suffix}</div>
      <div className="stats__label">{stat.label}</div>
      <div className="stats__note">{stat.note}</div>
    </div>
  )
}

export default function Experience() {
  return (
    <Section id="work" eyebrow={experience.eyebrow} title={experience.title} aside={experience.aside}>
      {experience.jobs.map((j) => (
        <article className="job" key={j.role}>
          <div className="job__side">
            <div className="job__period">{j.period}</div>
            <div className="job__meta">{j.meta}</div>
            {j.badge && <span className="badge">{j.badge}</span>}
          </div>
          <div>
            <h3 className="job__role">{j.role}</h3>
            <div className="job__org">{j.org} <em>· {j.tag}</em></div>
            <p className="job__summary">{j.summary}</p>
            {j.points.length > 0 && (
              <ul className="job__points">
                {j.points.map((p, i) => <li key={i}><Rich text={p} /></li>)}
              </ul>
            )}
            <div className="chips">
              {j.chips.map((c) => <span className="chip" key={c}>{c}</span>)}
            </div>
          </div>
        </article>
      ))}

      <div className="stats">
        {experience.stats.map((s) => <Stat stat={s} key={s.label} />)}
      </div>
    </Section>
  )
}
