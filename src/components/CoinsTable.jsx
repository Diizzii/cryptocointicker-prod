import React, { useState, useEffect, useContext, useCallback } from 'react'

import coinsData from '../data/coinsData'
import { getCoinData, joinCoinData } from '../service/getApiData'
import Loading from './Loading'
import { AppContext } from '../context/AppContext'

const CoinsTable = () => {
  const [allCoins, setAllCoins] = useState([])
  const { setCoinValues, setTouched, touched } = useContext(AppContext)

  const provideData = useCallback(async () => {
    const currentCoinData = await getCoinData()
    const joinedCoinData = await joinCoinData(coinsData, currentCoinData)
    setAllCoins(() => [...joinedCoinData])
    setCoinValues(() => [...joinedCoinData])
  }, [setCoinValues])

  useEffect(() => {
    setTouched(false)
    provideData()
    setTouched(true)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const interval = setInterval(() => {
      provideData()
      console.log('Updated')
    }, 60000)
    return () => clearInterval(interval)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (!touched) return <Loading />

  return (
    <div className='container'>
      <h1 className='is-size-1 has-text-weight-bold has-text-centered mt-5 has-text-info'>
        Today's Crypto Markets
      </h1>
      <table className='table center '>
        <thead>
          <tr>
            <th>Crypto</th>
            <th>Symbol</th>
            <th className='breakpoint'>Abbreviation</th>
            <th className='breakpoint'>Created</th>
            <th className='breakpoint'>Description</th>
            <th className='has-text-right'>Current Price ($)</th>
            <th className='breakpoint has-text-right '>Market Cap ($)</th>
          </tr>
        </thead>
        <tbody>
          {allCoins.map((coin) => {
            return (
              <tr key={coin.id}>
                <td>{coin.crypto}</td>
                <td>
                  <img
                    src={coin.symbol}
                    alt={coin.abbreviation}
                    className='coin-image'
                  />
                </td>
                <td className='breakpoint'>{coin.abbreviation}</td>
                <td className='breakpoint'>{coin.created}</td>
                <td className='breakpoint'>{coin.description}</td>
                <td className='has-text-right'>
                  {coin.currentPrice.toLocaleString('en-US')}
                </td>
                <td className='breakpoint has-text-right'>
                  {coin.marketCap.toLocaleString('en-US')}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CoinsTable
