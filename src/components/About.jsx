import { asset } from '../assets'
import { about, profile } from '../data/content'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" eyebrow={about.eyebrow} title={about.title} aside={about.aside}>
      <div className="about__grid">
        <div className="about__portrait">
          <img src={asset(profile.photo)} alt={profile.photoAlt} loading="lazy" width="1100" height="1466" />
          <div className="about__caption">
            <span>{profile.displayName}</span>
            <span>{profile.city} · {profile.location}</span>
          </div>
        </div>

        <div>
          <p className="about__body">{about.body}</p>
          <div className="facts">
            {about.facts.map((f) => (
              <div className="facts__row" key={f.k}>
                <div className="facts__k">{f.k}</div>
                <div className="facts__v">{f.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
