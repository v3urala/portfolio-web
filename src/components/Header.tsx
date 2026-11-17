import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="site-header">
      <nav aria-label="Primary navigation">
        <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
          Home
        </Link>
        <Link to="/work">Work</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Let’s connect</Link>
      </nav>
    </header>
  )
}
