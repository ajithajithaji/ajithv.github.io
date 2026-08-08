import { profile } from '../data/content'
import SocialIcon from './SocialIcon'

/* Icon-only links. The label is kept as the accessible name and tooltip
   so the meaning is not lost when the text is. */
export default function Socials({ variant = 'default', size = 18 }) {
  return (
    <div className={`socials socials--${variant}`}>
      {profile.socials.map((s) => (
        <a
          key={s.label}
          className="socials__link"
          href={s.url}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          title={s.label}
        >
          <SocialIcon name={s.label} size={size} />
        </a>
      ))}
    </div>
  )
}
