import React from "react"
import CryptoRanking from "./CryptoRanking"

function CryptoPriceFeed() {
  const [cryptoData, setCryptoData] = React.useState([])

  /* Fetch crypto data fron CoinCap API during first load of the application */
  React.useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then(response => response.json())
      .then(data => setCryptoData(getFromattedCryptoData(data)))
  }, [])

  /* Helper function responsible for parsing data fetched from the CoinCap API */
  function getFromattedCryptoData(crypto) {
    return crypto.data.map(element => (
      {
        id: element.id,
        rank: element.rank,
        name: `[${element.symbol}] ${element.name}`,
        priceUsd: `$${parseFloat(element.priceUsd).toFixed(2)}`,
        marketCapUsd: getFormattedMarketCap(element.marketCapUsd),
        changePercent24Hr: Number(parseFloat(element.changePercent24Hr).toFixed(2))
      }
    ))
  }

  /* Helper function responsible for formatting the market cap data 
  *  NOTE: I will refactor this later, to make it drier
  */
  function getFormattedMarketCap(marketCap) {
    let tempMarketCap = parseInt(marketCap)

    switch(tempMarketCap.toString().length) {
      case 9: 
        tempMarketCap = `$${(marketCap / 1000000).toFixed(0)}mln`
        break
      case 10:
        tempMarketCap = `$${(marketCap / 1000000000).toFixed(2)}mld`
        break
      case 11:
        tempMarketCap = `$${(marketCap / 1000000000).toFixed(1)}mld`
        break
      case 12:
        tempMarketCap = `$${(marketCap / 1000000000).toFixed(0)}mld`
    }
    return tempMarketCap
  }
  
  return (
    <div className="crypto-price-feed">
      <CryptoRanking cryptoData={cryptoData}/>
    </div>
  )
}

export default CryptoPriceFeed