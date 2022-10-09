import React from "react"
import CryptoRankingElement from "./CryptoRankingElement"

function CryptoRanking(props) {
  const [searchText, setSearchText] = React.useState("")

  /* List only coins which name match the search bar string */
  const cryptoRankingList = props.cryptoData.map(element => {
    const shouldElementBeDisplayed = element.name.toLowerCase().match(searchText.toLowerCase())
    const style = {
      color: element.changePercent24Hr > 0 ?
        "green" : element.changePercent24Hr < 0 ?
        "red" : "white"
    }

    return shouldElementBeDisplayed && <CryptoRankingElement data={element} style={style} key={element.id}/>
  })

  return (
    <div className="crypto-ranking">
      <input 
        type="text"
        onChange={e => setSearchText(e.target.value)}
        value={searchText}
        placeholder="Search for a coin..."
      />
      <CryptoRankingElement className="text-dark"/>
      {cryptoRankingList}
    </div>
  )
}

export default CryptoRanking