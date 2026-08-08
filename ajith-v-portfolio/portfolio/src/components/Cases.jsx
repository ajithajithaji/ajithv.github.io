import { cases } from '../data/content'
import Section from './Section'

export default function Cases() {
  return (
    <Section id="cases" eyebrow={cases.eyebrow} title={cases.title} aside={cases.aside}>
      {cases.items.map((c) => (
        <article className="case" key={c.title}>
          <div>
            <div className="case__no">{c.no}</div>
            <div className="case__metric">{c.metric}</div>
          </div>
          <div>
            <h3 className="case__title">{c.title}</h3>
            <p className="case__lead">{c.lead}</p>

            <div className="case__blocks">
              <div>
                <div className="block__k">Context</div>
                <p className="block__v">{c.context}</p>
              </div>
              <div>
                <div className="block__k">Problem</div>
                <p className="block__v">{c.problem}</p>
              </div>
              <div>
                <div className="block__k">Odoo modules</div>
                <div className="chips">
                  {c.modules.map((m) => <span className="chip" key={m}>{m}</span>)}
                </div>
              </div>
              <div>
                <div className="block__k">Technical approach</div>
                <div className="chips">
                  {c.approach.map((a) => <span className="chip" key={a}>{a}</span>)}
                </div>
              </div>
            </div>

            <div className="case__out">
              <b>{c.outcomeValue}</b>
              <p>{c.outcomeText}</p>
            </div>
          </div>
        </article>
      ))}
    </Section>
  )
}
