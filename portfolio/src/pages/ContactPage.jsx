import { useState } from 'react'
import { contactPage, profile } from '../data/content'
import { useReveal } from '../hooks'
import SocialIcon from '../components/SocialIcon'

const EMPTY = { name: '', email: '', phone: '', subject: contactPage.subjects[0], message: '' }

export default function ContactPage() {
  const ref = useReveal()
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    setErrors((x) => ({ ...x, [k]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Add your name so I know who I am replying to.'
    if (!form.email.trim()) next.email = 'Add an email address for the reply.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'That email address is not valid.'
    if (!form.message.trim()) next.message = 'Describe what you need, even in a line or two.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    /* No backend here. This opens the visitor's mail client with the message
       ready to send. To collect submissions instead, see README — swap this
       block for a fetch() to Formspree, Web3Forms or your own endpoint. */
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      `Subject: ${form.subject}`,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href =
      `mailto:${profile.email}` +
      `?subject=${encodeURIComponent(`${form.subject} — ${form.name}`)}` +
      `&body=${encodeURIComponent(body)}`

    setSent(true)
  }

  return (
    <section className="page" id="contact-page">
      <div className="wrap">
        <div className="page__head reveal" ref={ref}>
          <div className="page__eyebrow">{contactPage.eyebrow}</div>
          <h1 className="page__title">{contactPage.title}</h1>
          <p className="page__intro">{contactPage.intro}</p>
        </div>

        <div className="cpage">
          <div className="cpage__form">
            {sent ? (
              <div className="sent">
                <div className="sent__mark">Ready to send</div>
                <p>
                  Your mail app should have opened with the message filled in. If it did not,
                  write to <a href={`mailto:${profile.email}`}>{profile.email}</a> directly.
                </p>
                <button className="btn" onClick={() => { setSent(false); setForm(EMPTY) }}>
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="cf-name">Name</label>
                  <input
                    id="cf-name" className="input" value={form.name} onChange={set('name')}
                    placeholder="Your name" autoComplete="name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="field__err">{errors.name}</p>}
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="cf-email">Email</label>
                    <input
                      id="cf-email" className="input" type="email" value={form.email} onChange={set('email')}
                      placeholder="you@company.com" autoComplete="email"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="field__err">{errors.email}</p>}
                  </div>
                  <div className="field">
                    <label htmlFor="cf-phone">Phone <em>optional</em></label>
                    <input
                      id="cf-phone" className="input" value={form.phone} onChange={set('phone')}
                      placeholder="+91" autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="cf-subject">What is this about</label>
                  <select id="cf-subject" className="input" value={form.subject} onChange={set('subject')}>
                    {contactPage.subjects.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="cf-message">Message</label>
                  <textarea
                    id="cf-message" className="input input--area" rows={6}
                    value={form.message} onChange={set('message')}
                    placeholder="Odoo version, the modules involved, and what needs to change."
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="field__err">{errors.message}</p>}
                </div>

                <div className="field__actions">
                  <button className="btn btn--solid" type="submit">Send message</button>
                  <span className="field__note">{contactPage.responseNote}</span>
                </div>
              </form>
            )}
          </div>

          <aside className="cpage__side">
            <div className="side__block">
              <div className="side__k">Email</div>
              <a className="side__v" href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="side__block">
              <div className="side__k">Phone</div>
              <a className="side__v" href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </div>
            <div className="side__block">
              <div className="side__k">Based in</div>
              <div className="side__v">{profile.city} · {profile.location}</div>
            </div>
            <div className="side__block">
              <div className="side__k">Availability</div>
              <div className="side__v side__v--muted">{profile.availability}</div>
            </div>
            <div className="side__block">
              <div className="side__k">Elsewhere</div>
              <div className="side__socials">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    title={s.label}
                  >
                    <SocialIcon name={s.label} size={18} />
                    <span>{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
