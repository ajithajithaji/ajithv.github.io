import { useScrolled } from '../hooks'

export default function ToTop() {
  const show = useScrolled(700)
  return (
    <button
      className={`totop${show ? ' show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
    >
      ↑
    </button>
  )
}
