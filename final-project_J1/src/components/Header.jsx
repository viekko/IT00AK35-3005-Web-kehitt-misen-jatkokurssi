import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div className="site-branding">
        <h1><Link to="/">KEHAX OY</Link></h1> 
      </div>
      <span className="nav-toggle-label" onClick={() => setMenuOpen(!menuOpen)}>☰</span>
      <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">ETUSIVU</Link></li>
          <li><Link to="/lomake">TILAUSLOMAKE</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header