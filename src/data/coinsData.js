import ada from '../images/coins/ada.svg'
import bch from '../images/coins/bch.svg'
import bnb from '../images/coins/bnb.svg'
import btc from '../images/coins/btc.svg'
import doge from '../images/coins/doge.svg'
import dot from '../images/coins/dot.svg'
import eth from '../images/coins/eth.svg'
import link from '../images/coins/link.svg'
import ltc from '../images/coins/ltc.svg'
import sol from '../images/coins/sol.svg'
import uni from '../images/coins/uni.svg'
import xrp from '../images/coins/xrp.svg'

const coinsData = [
  {
    id: 'bitcoin',
    crypto: 'Bitcoin',
    symbol: btc,
    abbreviation: 'BTC',
    created: 2009,
    description: 'Digital Gold',
    currentPrice: 0,
    marketCap: 0,
  },
  {
    id: 'ethereum',
    crypto: 'Ethereum',
    symbol: eth,
    abbreviation: 'ETH',
    created: 2015,
    description: 'World Computer',
    currentPrice: 0,
    marketCap: 0,
  },

  {
    id: 'binancecoin',
    crypto: 'Binance Coin',
    symbol: bnb,
    abbreviation: 'BNB',
    created: 2017,
    description: 'Centralized exchange token',
    currentPrice: 0,
    marketCap: 0,
  },
  {
    id: 'cardano',
    crypto: 'Cardano',
    symbol: ada,
    abbreviation: 'ADA',
    created: 2015,
    description: 'Proof-of-stake cryptocurrency named after Ada Lovelace',
    currentPrice: 0,
    marketCap: 0,
  },
  {
    id: 'ripple',
    crypto: 'Ripple',
    symbol: xrp,
    abbreviation: 'XRP',
    created: 2004,
    description:
      'Provided by fintech company Ripple to enable digital payments',
    currentPrice: 0,
    marketCap: 0,
  },
  {
    id: 'dogecoin',
    crypto: 'Dogecoin',
    symbol: doge,
    abbreviation: 'DOGE',
    created: 2013,
    description: 'Created as a fun crypto based on the Doge meme',
    currentPrice: 0,
    marketCap: 0,
  },
  {
    id: 'polkadot',
    crypto: 'Polkadot',
    symbol: dot,
    abbreviation: 'DOT',
    created: 2017,
    description: 'Proof-of-stake crypto written in Rust',
    currentPrice: 0,
    marketCap: 0,
  },
  {
    id: 'uniswap',
    crypto: 'Uniswap',
    symbol: uni,
    abbreviation: 'UNI',
    created: 2020,
    description: 'Governance token for decentralized exchange Uniswap',
    currentPrice: 0,
    marketCap: 0,
  },
  {
    id: 'bitcoin-cash',
    crypto: 'Bitcoin Cash',
    symbol: bch,
    abbreviation: 'BCH',
    created: 2017,
    description: 'Hard fork of Bitcoin with larger block size limit',
    currentPrice: 0,
    marketCap: 0,
  },
  {
    id: 'solana',
    crypto: 'Solana',
    symbol: sol,
    abbreviation: 'SOL',
    created: 2020,
    description: 'Open-source project to provide DeFi solutions',
    currentPrice: 0,
    marketCap: 0,
  },
  {
    id: 'litecoin',
    crypto: 'Litecoin',
    symbol: ltc,
    abbreviation: 'LTC',
    created: 2011,
    description: 'Bitcoin  spinoff and one of the earliest altcoins',
    currentPrice: 0,
    marketCap: 0,
  },
  {
    id: 'chainlink',
    crypto: 'Chainlink',
    symbol: link,
    abbreviation: 'LINK',
    created: 2019,
    description: 'Decentralized oracle network built on top of Ethereum',
    currentPrice: 0,
    marketCap: 0,
  },
]

export default coinsData
