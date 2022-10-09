import React from "react"
import {Routes, Route} from "react-router-dom"

import NavigationBar from "./components/NavigationBar"
import CryptoPriceFeed from "./components/CryptoPriceFeed"
import Footer from "./components/Footer"

function App() {
  return (
    <main>
      <NavigationBar />
      <Routes>
        <Route exact path="" element={<CryptoPriceFeed />} />
        <Route path="/investments" element={<p>Investments tab placeholder</p>} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
