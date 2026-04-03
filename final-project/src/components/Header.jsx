import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div className="site-branding">
        <h1><a href="#">KEHAX OY</a></h1>
      </div>
      <span className="nav-toggle-label" onClick={() => setMenuOpen(!menuOpen)}>☰</span>
      <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">TUOTTEET</a></li>
          <li><a href="#">YRITYKSESTÄ</a></li>
          <li><a href="#">YHTEYSTIEDOT</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header