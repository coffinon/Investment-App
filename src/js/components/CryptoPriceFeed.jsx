import React from "react"

function CryptoPriceFeed() {
  const [cryptoPrices, setCryptoPrices] = React.useState([])

  React.useEffect(() => {
    async function fetchCoinData(coinName) {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinName}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
      const data = await response.json()
      const coinData = {
        name: data.symbol,
        price: data.market_data.current_price.usd
      }

      setCryptoPrices(prevCryptoPrices => [...prevCryptoPrices, coinData])
    }

    setCryptoPrices([])
    fetchCoinData("bitcoin")
    fetchCoinData("ethereum")
    fetchCoinData("binancecoin")
  }, [])

  const mappedPriceFeed = cryptoPrices.map((coin, index) => (
      <div className="crypto-price-feed--coin" key={index}>
        <h1>{coin.name} / usd</h1>
        <p>{coin.price}</p>
      </div>
    )
  )
  
  return (
    <div className="crypto-price-feed">
      {mappedPriceFeed}
    </div>
  )
}

export default CryptoPriceFeed