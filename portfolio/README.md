# Ajith V — Portfolio (React + Vite)

Black base with a signal-green and cobalt-blue duotone accent. Structure follows the
gokulpi.net reference: preloader, hero, ticker, profile, experience, projects, case
studies, services, stack, free tools, integrations, writing, education, contact.
Plus a dedicated contact page with a message form.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into /dist
npm run preview    # serve the build locally
```

Node 18 or newer.

## Where to edit

| What | File |
| --- | --- |
| **All text, jobs, projects, links, numbers** | `src/data/content.js` |
| Colours, spacing, type | `src/styles.css` (tokens are at the top under `:root`) |
| Page title and meta description | `index.html` |
| Section order | `src/App.jsx` |
| The two free tools | `src/components/Tools.jsx` |
| Integration list | `integrations.items` in `src/data/content.js` |
| Contact page | `src/pages/ContactPage.jsx` |
| Your photo | `public/profile.jpg` |

`src/data/content.js` is the only file you need for normal content changes. Text
supports `**bold**` markers, and `==text==` for an accent underline in the hero.

### Your photo

Two portraits are already in `public/` — `profile.jpg` is used, `profile-alt.jpg` is the
spare. To use a different picture, drop it in `public/` and change `profile.photo` in
`content.js`. A portrait crop (3:4) works best.

### Social links

`profile.socials` in `content.js` holds LinkedIn, GitHub, Instagram and Facebook. Links
show as icons only — `label` selects the glyph from `src/components/SocialIcon.jsx` and
doubles as the accessible name, `handle` shows on the contact page.

To add another network, add an entry to `profile.socials` and a matching path in
`SocialIcon.jsx` keyed by the lowercase label.

### Cursor

`src/components/Cursor.jsx` draws a dot that tracks the pointer plus a ring that eases in
behind it. The ring opens over links and buttons, shrinks on click, and hides over text
fields. It only mounts on devices with a fine pointer and switches itself off for anyone
who prefers reduced motion — touch users keep the native cursor. Adjust the easing with
the `0.18` factor in the `tick` function, and the sizes in the `.cursor__ring` rules.

### Pages

The site has two pages. The home page is `/`, the contact page is `/?p=contact`.
It uses a small query-param router (`src/router.js`) rather than React Router, so it
works on any static host with no rewrite rules and in-page anchors keep functioning.

### Contact form

The form has no backend. On submit it opens the visitor's mail app with everything filled
in and sends to `profile.email`. To collect submissions in a dashboard instead, replace the
`window.location.href = 'mailto:...'` block in `src/pages/ContactPage.jsx` with a `fetch()`
POST to Formspree, Web3Forms or your own endpoint.

### Your CV

Drop the PDF into `public/` and name it `CV.pdf`. The download buttons already point
at `/CV.pdf`. To use a different filename, change `profile.cvUrl` in `content.js`.

### Colours

Change these three lines in `src/styles.css` to reskin the whole site:

```css
--green: #3de0a0;   /* primary accent */
--blue:  #4c86ff;   /* secondary accent */
--ink:   #05070a;   /* page background */
```

## Deploy

Any static host works. Build first, then upload `dist/`.

- **Netlify / Vercel** — build command `npm run build`, publish directory `dist`
- **GitHub Pages** — build, then push `dist/` to the `gh-pages` branch
- **Own server / Nginx** — copy `dist/` to the web root

`vite.config.js` uses `base: './'` so the build works from a subfolder too.
