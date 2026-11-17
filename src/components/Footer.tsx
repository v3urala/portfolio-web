import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <p>Designed and built with React + TypeScript.</p>
      <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
        Return home
      </Link>
    </footer>
  )
}
