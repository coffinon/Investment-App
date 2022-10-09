import React from "react"
import {Link} from "react-router-dom"

function NavigationBar() {
  const linkStyle = {
    textDecoration: "none"
  }

  function toggleHamburger() {
    document.querySelector(".links").classList.toggle("active")
    document.querySelector(".hamburger-menu").classList.toggle("active")
  }

  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/" style={linkStyle}><p className="link-text" onClick={toggleHamburger}>Home Page</p></Link>
        <Link to="/investments" style={linkStyle}><p className="link-text" onClick={toggleHamburger}>Investments</p></Link>
      </div>

      <h1>Crypto Investment App</h1>

      <button className="hamburger-menu" onClick={toggleHamburger}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
    </nav>
  )
}

export default NavigationBar