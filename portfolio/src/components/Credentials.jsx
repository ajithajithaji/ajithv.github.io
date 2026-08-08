import { credentials } from '../data/content'
import Section from './Section'

export default function Credentials() {
  return (
    <Section id="cred" eyebrow={credentials.eyebrow} title={credentials.title} aside={credentials.aside}>
      <div className="creds">
        {credentials.items.map((c) => (
          <div className="cred" key={c.title}>
            <div className="cred__kind">{c.kind}</div>
            <div className="cred__when">{c.when}</div>
            <h3 className="cred__title">{c.title}</h3>
            <div className="cred__org">{c.org}</div>
            <p className="cred__body">{c.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
