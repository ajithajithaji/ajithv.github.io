import { integrations } from '../data/content'
import Section from './Section'

export default function Integrations() {
  return (
    <Section
      id="integrations"
      eyebrow={integrations.eyebrow}
      title={integrations.title}
      aside={integrations.aside}
    >
      <p className="intg__intro">{integrations.intro}</p>

      <div className="intg">
        {integrations.items.map((it) => (
          <article className="intg__card" key={it.name}>
            <div className="intg__top">
              <h3 className="intg__name">{it.name}</h3>
              <span className="intg__kind">{it.kind}</span>
            </div>
            <p className="intg__body">{it.body}</p>
            <div className="chips">
              {it.chips.map((c) => (
                <span className="chip" key={c}>{c}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
