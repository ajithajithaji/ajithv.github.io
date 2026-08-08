import { useMemo, useState } from 'react'
import { tools } from '../data/content'
import Section from './Section'

/* Sample reference set — extend freely in this array. */
const VERSION_NOTES = [
  { code: '19.0', note: 'Security groups use privilege_id instead of category_id', tag: 'security' },
  { code: '19.0', note: 'Storable products resolve via is_storable, not type = product', tag: 'inventory' },
  { code: '19.0', note: 'ir.cron drops numbercall and doall fields', tag: 'automation' },
  { code: '18.0', note: 'POS product tile clicks route through PosStore.addLineToCurrentOrder()', tag: 'pos' },
  { code: '18.0', note: 'useTrackedAsync replaces manual loading state in OWL actions', tag: 'owl' },
  { code: '17.0', note: 'Settings views restructured into app-scoped blocks', tag: 'views' },
  { code: '17.0', note: 'List view renderer rewritten — legacy widget patches break', tag: 'owl' },
  { code: '16.0', note: 'OWL 2 becomes the default web client framework', tag: 'owl' },
]

function nameCase(value) {
  const clean = value.trim().toLowerCase().replace(/[^a-z0-9._]/g, '')
  if (!clean) return null
  const table = clean.replace(/\./g, '_')
  const pascal = table.split('_').filter(Boolean).map((p) => p[0].toUpperCase() + p.slice(1)).join('')
  return {
    table,
    pascal,
    file: `${table}.py`,
    view: `view_${table}_form`,
    action: `action_${table}`,
    rule: `${table}_rule`,
  }
}

export default function Tools() {
  const [model, setModel] = useState('sale.order.line')
  const [query, setQuery] = useState('')

  const derived = useMemo(() => nameCase(model), [model])
  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return VERSION_NOTES
    return VERSION_NOTES.filter(
      (v) => v.note.toLowerCase().includes(q) || v.code.includes(q) || v.tag.includes(q)
    )
  }, [query])

  return (
    <Section id="tools" eyebrow={tools.eyebrow} title={tools.title} aside={tools.aside}>
      <div className="tools">
        <div className="tool">
          <div className="tool__head">
            <h3 className="tool__name">Model name converter</h3>
            <span className="tool__tag">ORM naming</span>
          </div>
          <input
            className="input"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="sale.order.line"
            aria-label="Odoo model name"
            spellCheck="false"
          />
          <div className="tool__hint">
            Everything is derived in your browser. Nothing is sent anywhere.
          </div>
          {derived ? (
            <div className="tool__out">
              <div className="tool__cell"><span>Table</span><b>{derived.table}</b></div>
              <div className="tool__cell"><span>Python class</span><b className="blue">{derived.pascal}</b></div>
              <div className="tool__cell"><span>File</span><b>{derived.file}</b></div>
              <div className="tool__cell"><span>Form view id</span><b className="blue">{derived.view}</b></div>
              <div className="tool__cell"><span>Action id</span><b>{derived.action}</b></div>
              <div className="tool__cell"><span>Record rule id</span><b className="blue">{derived.rule}</b></div>
            </div>
          ) : (
            <div className="tool__empty">Type a model name to see its derived identifiers.</div>
          )}
        </div>

        <div className="tool">
          <div className="tool__head">
            <h3 className="tool__name">Version change lookup</h3>
            <span className="tool__tag">sample set</span>
          </div>
          <input
            className="input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a version, topic or keyword"
            aria-label="Search Odoo version notes"
          />
          <div className="tool__rows">
            {results.length ? (
              results.map((r, i) => (
                <div className="tool__row" key={i}>
                  <code>{r.code}</code>
                  <p>{r.note}</p>
                  <em>{r.tag}</em>
                </div>
              ))
            ) : (
              <div className="tool__empty">No match in the sample set. Try a version number.</div>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
