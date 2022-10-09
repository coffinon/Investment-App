import React from "react"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-text-container">
        <p className="footer-text">Powered by <a href="https://docs.coincap.io/">CoinCap API</a></p>
        <p className="footer-text">© 2022 Kacper Kupiszewski.</p>
      </div>
      
      <div className="footer-icons">
        <a className="footer-icon-link" href="https://www.linkedin.com/in/kacper-kupiszewski-377b671ba/">
          <i className="fa-brands fa-linkedin fa-2x"/>
        </a>
        <a className="footer-icon-link" href="https://github.com/coffinon">
          <i className="fa-brands fa-github fa-2x"/>
        </a>
        <a className="footer-icon-link" href="mailto:kacper.kupiszewski@outlook.com">
          <i className="fa-solid fa-envelope fa-2x"/>
        </a>
      </div>
    </div>
  )
}

export default Footer