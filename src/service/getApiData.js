const url =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20binancecoin%2C%20cardano%2C%20ripple%2C%20dogecoin%2C%20polkadot%2C%20uniswap%2C%20bitcoin-cash%2C%20solana%2C%20litecoin%2C%20chainlink&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h'

export const getCoinData = async (coin) => {
  const coinInfo = await fetch(url)
  const coinInfoJson = await coinInfo.json()
  const coinsArray = coinInfoJson.map((coin) => {
    return {
      id: coin.id,
      currentPrice: coin.current_price,
      marketCap: coin.market_cap,
    }
  })
  return coinsArray
}

export const joinCoinData = (permArray, tempArray) => {
  const returnArray = []
  for (let perm of permArray) {
    for (let temp of tempArray) {
      if (temp.id === perm.id) {
        returnArray.push({ ...perm, ...temp })
        break
      }
    }
  }
  return returnArray
}
