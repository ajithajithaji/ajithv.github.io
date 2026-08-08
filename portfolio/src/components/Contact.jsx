import { contact, profile } from '../data/content'
import { useReveal } from '../hooks'
import { navigate } from '../router'
import Socials from './Socials'

export default function Contact() {
  const ref = useReveal()

  return (
    <section className="contact" id="contact">
      <div className="wrap reveal" ref={ref}>
        <div className="contact__kicker">{contact.kicker}</div>
        <h2 className="contact__title">
          {contact.title} <em>{contact.titleAccent}</em>
        </h2>

        <a className="contact__mail" href={`mailto:${profile.email}`}>{profile.email}</a>
        {profile.phone && (
          <div className="contact__phone">
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          </div>
        )}

        <div className="contact__actions">
          <a
            className="btn btn--solid"
            href="?p=contact"
            onClick={(e) => { e.preventDefault(); navigate('contact') }}
          >
            Send a message →
          </a>
          <Socials variant="bubble" size={19} />
        </div>

        <div className="contact__meta">
          <span>{contact.note}</span>
          <span className="sep">/</span>
          <span>{profile.city} · {profile.location}</span>
          <span className="sep">/</span>
          <span>{profile.timezone}</span>
        </div>
      </div>
    </section>
  )
}
