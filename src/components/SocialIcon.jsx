/* Inline SVG glyphs so the icons inherit colour and need no extra requests.
   The key must match the `label` used in profile.socials. */

const PATHS = {
  linkedin:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.71h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.2 1.46-2.2 2.97V21h-4V9z',
  github:
    'M12 .5C5.73.5.9 5.34.9 11.62c0 4.9 3.16 9.06 7.55 10.53.55.1.75-.24.75-.53v-1.9c-3.07.67-3.72-1.3-3.72-1.3-.5-1.29-1.23-1.63-1.23-1.63-1-.69.08-.67.08-.67 1.11.08 1.7 1.15 1.7 1.15.99 1.7 2.59 1.21 3.22.93.1-.72.39-1.21.7-1.49-2.45-.28-5.03-1.23-5.03-5.48 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.14a10.5 10.5 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.22 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.26-2.59 5.2-5.05 5.47.4.35.76 1.03.76 2.08v3.08c0 .3.2.64.76.53a11.13 11.13 0 0 0 7.54-10.53C23.1 5.34 18.27.5 12 .5z',
  instagram: null, // drawn from primitives below
  facebook:
    'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z',
}

export default function SocialIcon({ name, size = 18 }) {
  const key = String(name).toLowerCase()

  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': 'true',
    focusable: 'false',
  }

  if (key === 'instagram') {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.4" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  const d = PATHS[key]
  if (!d) return null

  return (
    <svg {...common}>
      <path d={d} />
    </svg>
  )
}
