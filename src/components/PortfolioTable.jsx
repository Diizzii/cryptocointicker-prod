import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { AppContext } from '../context/AppContext'
import { fb } from '../service/firebase'
import Loading from './Loading'

const PortfolioTable = () => {
  const history = useHistory()
  const [coinHoldings, setCoinHoldings] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [totalValue, setTotalValue] = useState(0)

  if (!localStorage.getItem('uid') || !coinHoldings) history.push('/coins')

  const { coinValues } = useContext(AppContext)

  useEffect(() => {
    setIsLoading(true)
    if (
      !fb.firestore.collection('cryptoUsers') ||
      !fb.firestore.collection('cryptoUsers').doc(localStorage.getItem('uid'))
    ) {
      return
    }

    fb.firestore
      .collection('cryptoUsers')
      .doc(localStorage.getItem('uid'))
      .get()
      .then((result) => result.data())
      .then((data) => setCoinHoldings(() => data))
      .then(() => setIsLoading(false))
      .catch((err) => console.error(err))
  }, [history])

  useEffect(() => {
    let tempTotalValue = 0
    if (coinValues.length === 0) return
    for (let coin of coinValues) {
      if (coinHoldings) {
        tempTotalValue +=
          coin.currentPrice * coinHoldings[coin.abbreviation.toLowerCase()]
      }
    }
    setTotalValue(() => tempTotalValue)
  }, [coinHoldings, coinValues])

  //if (noPortfolio) history.push('/coins')
  if (isLoading) return <Loading />
  return (
    <div className='container'>
      <h1 className='is-size-3 has-text-weight-bold has-text-centered mt-5 has-text-info'>
        Your Portfolio
      </h1>
      <table className='table portfolio-table'>
        <thead>
          <tr>
            <th>Crypto</th>
            <th>Symbol</th>
            <th>Abbreviation</th>
            <th className='has-text-right'>Current Price ($)</th>
            <th className='has-text-right'>Your Position</th>
            <th className='has-text-right'>Current Value ($)</th>
          </tr>
        </thead>
        <tbody>
          {coinValues.map((coin) => {
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
                <td>{coin.abbreviation}</td>
                <td className='has-text-right'>
                  {coin.currentPrice.toLocaleString('en-US')}
                </td>
                <td className='has-text-right'>
                  {Number(
                    coinHoldings[coin.abbreviation.toLowerCase()]
                  ).toLocaleString('en-US')}
                </td>
                <td className='has-text-right'>
                  {(
                    coin.currentPrice *
                    coinHoldings[coin.abbreviation.toLowerCase()]
                  ).toLocaleString('en-US')}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='total-value is-size-5 mb-2 has-text-weight-bold has-text-dark'>
        Total Value: $ {totalValue.toLocaleString('en-US')}
      </div>
    </div>
  )
}

export default PortfolioTable
