/* Files in /public are served relative to wherever the site is deployed.
   On GitHub Pages that is often a subfolder (e.g. /repo-name/), so a leading
   slash like "/CV.pdf" points at the domain root and 404s.

   asset() rewrites those paths against Vite's BASE_URL so they work at the
   domain root, in a subfolder, and on the local dev server alike. */

const BASE = import.meta.env.BASE_URL || '/'

const ABSOLUTE = /^(https?:)?\/\/|^(data|mailto|tel|blob):/i

export function asset(path) {
  if (!path) return path
  if (ABSOLUTE.test(path)) return path            // leave external links alone
  return BASE.replace(/\/?$/, '/') + path.replace(/^\/+/, '')
}
