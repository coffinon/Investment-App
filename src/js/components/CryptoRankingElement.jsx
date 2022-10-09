import React from "react"

function CryptoRankingElement(props) {
  const {data, style, className} = props

  return (
    <div className={`crypto-ranking-element ${className}`}>
      <p>{data.rank}</p>
      <p>{data.name}</p>
      <p>{data.priceUsd}</p>
      <p>{data.marketCapUsd}</p>
      <p style={style}>{data.changePercent24Hr}%</p>
    </div>
  )
}

CryptoRankingElement.defaultProps = {
  data: {
    rank: "#",
    name: "Name",
    priceUsd: "Price",
    marketCapUsd: "Market Cap",
    changePercent24Hr: "24h "
  },
  className: ""
}

export default CryptoRankingElement