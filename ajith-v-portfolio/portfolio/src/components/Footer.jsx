import { profile } from '../data/content'
import { navigate } from '../router'
import Socials from './Socials'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span>© {year} {profile.displayName}</span>
        <div className="footer__links">
          <Socials variant="footer" size={17} />
          <a
            className="footer__contact"
            href="?p=contact"
            onClick={(e) => { e.preventDefault(); navigate('contact') }}
          >
            Contact
          </a>
        </div>
        <span>{profile.role}</span>
      </div>
    </footer>
  )
}
