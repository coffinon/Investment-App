import React from "react"
import {Link} from "react-router-dom"

function NavigationBar() {
  return (
    <nav className="navbar">
      <Link to="/">Home Page</Link>
      <Link to="/investments">Investments</Link>
      <h1>Crypto Investment App</h1>
    </nav>
  )
}

export default NavigationBar