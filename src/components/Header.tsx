import { Link } from 'react-router-dom'
import logo from '../assets/V-favicon.svg'

export function Header() {
  return (
    <header className="site-header">
      <Link
        className="site-logo"
        to="/"
        aria-label="Vidhathri Kota, home"
        onClick={() => window.scrollTo({ top: 0 })}
      >
        <img src={logo} alt="" />
      </Link>
      <nav aria-label="Primary navigation">
        <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
          Home
        </Link>
        <Link to="/work">Work</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Let’s talk</Link>
      </nav>
    </header>
  )
}
