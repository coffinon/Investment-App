import React from "react"

function CryptoSearchBar() {
  React.useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/list")
      .then(response => response.json())
      .then(data => {
        console.log(data.filter(coin => {
          return coin.name.match("Bitcoin")
        }))
      })
  }, [])

  return (<h1>Crypto Search Bar placeholder</h1>)
}

export default CryptoSearchBar