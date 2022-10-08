import React from "react"
import NavigationBar from "./components/NavigationBar"
import CryptoPriceFeed from "./components/CryptoPriceFeed"
import CryptoSearchBar from "./components/CryptoSearchBar"
import CryptoInvestmentList from "./components/CryptoInvestmentList"
import Footer from "./components/Footer"

function App() {
  return (
    <main>
      <NavigationBar />
      <CryptoPriceFeed />
      <CryptoSearchBar />
      <CryptoInvestmentList />
      <Footer />
    </main>
  )
}

export default App