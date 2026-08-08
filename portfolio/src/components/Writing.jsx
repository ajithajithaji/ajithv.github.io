import { useState } from 'react'
import { writing } from '../data/content'
import Section from './Section'

export default function Writing() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex((current) => (current === i ? null : i))

  return (
    <Section id="writing" eyebrow={writing.eyebrow} title={writing.title} aside={writing.aside}>
      <div className="posts">
        {writing.items.map((p, i) => {
          const open = openIndex === i
          const panelId = `post-panel-${i}`
          return (
            <article className={`post${open ? ' open' : ''}`} key={p.title}>
              <button
                className="post__head"
                onClick={() => toggle(i)}
                aria-expanded={open}
                aria-controls={panelId}
              >
                <span className="post__tags">
                  <span className="post__tag">{p.tag}</span>
                  {p.state && <span className="post__state">{p.state}</span>}
                </span>

                <span className="post__main">
                  <span className="post__title">{p.title}</span>
                  <span className="post__body">{p.body}</span>
                </span>

                <span className="post__read">{open ? 'Close ×' : 'Read →'}</span>
              </button>

              <div className="post__panel" id={panelId} role="region" aria-label={p.title}>
                <div className="post__panel-inner">
                  <p className="post__content">{p.content}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
