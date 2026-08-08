import React from 'react'

/* Renders text with **bold** and ==accent underline== segments,
   so content.js stays plain and readable. */
export default function Rich({ text }) {
  const parts = String(text).split(/(\*\*[^*]+\*\*|==[^=]+==)/g)
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith('**') && p.endsWith('**')) {
          return <strong key={i}>{p.slice(2, -2)}</strong>
        }
        if (p.startsWith('==') && p.endsWith('==')) {
          return <span className="hero__mark" key={i}>{p.slice(2, -2)}</span>
        }
        return <React.Fragment key={i}>{p}</React.Fragment>
      })}
    </>
  )
}
