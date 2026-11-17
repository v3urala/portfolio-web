import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <p className="eyebrow">404 · Off the map</p>
      <h1 id="not-found-title">There’s nothing here yet.</h1>
      <p>The page may have moved, or the project slug might be incorrect.</p>
      <Link className="button-link" to="/">Return home</Link>
    </section>
  )
}
