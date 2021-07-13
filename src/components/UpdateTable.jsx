import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import coinsData from '../data/coinsData'
import { fb } from '../service/firebase'
import Loading from './Loading'

const UpdateTable = () => {
  const history = useHistory()
  const [uid, setUid] = useState('')

  if (!localStorage.getItem('uid')) history.push('/coins')

  const [btc, setBtc] = useState(0)
  const [eth, setEth] = useState(0)
  const [bnb, setBnb] = useState(0)
  const [ada, setAda] = useState(0)
  const [xrp, setXrp] = useState(0)
  const [doge, setDoge] = useState(0)
  const [dot, setDot] = useState(0)
  const [uni, setUni] = useState(0)
  const [bch, setBch] = useState(0)
  const [sol, setSol] = useState(0)
  const [ltc, setLtc] = useState(0)
  const [link, setLink] = useState(0)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setUid(() => localStorage.getItem('uid'))
    let coinHoldings = {}

    if (uid) {
      setIsLoading(true)
      fb.firestore
        .collection('cryptoUsers')
        .doc(uid)
        .get()
        .then((result) => result.data())
        .then((data) => {
          coinHoldings = { ...data }
        })
        .then(() => {
          coinHoldings.btc && setBtc(coinHoldings.btc)
          coinHoldings.eth && setEth(coinHoldings.eth)
          coinHoldings.bnb && setBnb(coinHoldings.bnb)
          coinHoldings.ada && setAda(coinHoldings.ada)
          coinHoldings.xrp && setXrp(coinHoldings.xrp)
          coinHoldings.doge && setDoge(coinHoldings.doge)
          coinHoldings.dot && setDot(coinHoldings.dot)
          coinHoldings.uni && setUni(coinHoldings.uni)
          coinHoldings.bch && setBch(coinHoldings.bch)
          coinHoldings.sol && setSol(coinHoldings.sol)
          coinHoldings.ltc && setLtc(coinHoldings.ltc)
          coinHoldings.link && setLink(coinHoldings.link)
        })
        .then(() => setIsLoading(false))
        .catch((err) => console.error(err))
    }
  }, [uid])

  const updateHandler = () => {
    const uid = localStorage.getItem('uid')
    fb.firestore
      .collection('cryptoUsers')
      .doc(uid)
      .set({
        btc,
        eth,
        bnb,
        ada,
        xrp,
        doge,
        dot,
        uni,
        bch,
        sol,
        ltc,
        link,
      })
      .then(() => history.push('/portfolio'))
      .catch((err) => console.error(err))
  }

  if (isLoading) return <Loading />

  return (
    <div className='container'>
      <h1 className='is-size-3 has-text-weight-bold has-text-centered mt-3 has-text-info'>
        Update Your Portfolio
      </h1>
      <table className='table portfolio-table'>
        <thead>
          <tr>
            <th>Crypto</th>
            <th>Symbol</th>
            <th>Abbreviation</th>
            <th className='has-text-centered'>Your Holdings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{coinsData[0].crypto}</td>
            <td>
              <img
                src={coinsData[0].symbol}
                alt={coinsData[0].abbreviation}
                className='coin-image'
              />
            </td>
            <td>{coinsData[0].abbreviation}</td>

            <td className='has-text-right'>
              <input
                placeholder='0'
                name={coinsData[0].id}
                className='input is-small is-info is-rounded is-focused'
                type='number'
                min='0'
                step='0.0000000001'
                value={btc}
                onChange={(e) => setBtc(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>{coinsData[1].crypto}</td>
            <td>
              <img
                src={coinsData[1].symbol}
                alt={coinsData[1].abbreviation}
                className='coin-image'
              />
            </td>
            <td>{coinsData[1].abbreviation}</td>

            <td className='has-text-right'>
              <input
                placeholder='0'
                name={coinsData[1].id}
                className='input is-small is-info is-rounded is-focused'
                type='number'
                min='0'
                step='0.0000000001'
                value={eth}
                onChange={(e) => setEth(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>{coinsData[2].crypto}</td>
            <td>
              <img
                src={coinsData[2].symbol}
                alt={coinsData[2].abbreviation}
                className='coin-image'
              />
            </td>
            <td>{coinsData[2].abbreviation}</td>

            <td className='has-text-right'>
              <input
                placeholder='0'
                name={coinsData[2].id}
                className='input is-small is-info is-rounded is-focused'
                type='number'
                min='0'
                step='0.0000000001'
                value={bnb}
                onChange={(e) => setBnb(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>{coinsData[3].crypto}</td>
            <td>
              <img
                src={coinsData[3].symbol}
                alt={coinsData[3].abbreviation}
                className='coin-image'
              />
            </td>
            <td>{coinsData[3].abbreviation}</td>

            <td className='has-text-right'>
              <input
                placeholder='0'
                name={coinsData[3].id}
                className='input is-small is-info is-rounded is-focused'
                type='number'
                min='0'
                step='0.0000000001'
                value={ada}
                onChange={(e) => setAda(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>{coinsData[4].crypto}</td>
            <td>
              <img
                src={coinsData[4].symbol}
                alt={coinsData[4].abbreviation}
                className='coin-image'
              />
            </td>
            <td>{coinsData[4].abbreviation}</td>

            <td className='has-text-right'>
              <input
                placeholder='0'
                name={coinsData[4].id}
                className='input is-small is-info is-rounded is-focused'
                type='number'
                min='0'
                step='0.0000000001'
                value={xrp}
                onChange={(e) => setXrp(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>{coinsData[5].crypto}</td>
            <td>
              <img
                src={coinsData[5].symbol}
                alt={coinsData[5].abbreviation}
                className='coin-image'
              />
            </td>
            <td>{coinsData[5].abbreviation}</td>

            <td className='has-text-right'>
              <input
                placeholder='0'
                name={coinsData[5].id}
                className='input is-small is-info is-rounded is-focused'
                type='number'
                min='0'
                step='0.0000000001'
                value={doge}
                onChange={(e) => setDoge(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>{coinsData[6].crypto}</td>
            <td>
              <img
                src={coinsData[6].symbol}
                alt={coinsData[6].abbreviation}
                className='coin-image'
              />
            </td>
            <td>{coinsData[6].abbreviation}</td>

            <td className='has-text-right'>
              <input
                placeholder='0'
                name={coinsData[6].id}
                className='input is-small is-info is-rounded is-focused'
                type='number'
                min='0'
                step='0.0000000001'
                value={dot}
                onChange={(e) => setDot(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>{coinsData[7].crypto}</td>
            <td>
              <img
                src={coinsData[7].symbol}
                alt={coinsData[7].abbreviation}
                className='coin-image'
              />
            </td>
            <td>{coinsData[7].abbreviation}</td>

            <td className='has-text-right'>
              <input
                placeholder='0'
                name={coinsData[7].id}
                className='input is-small is-info is-rounded is-focused'
                type='number'
                min='0'
                step='0.0000000001'
                value={uni}
                onChange={(e) => setUni(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>{coinsData[8].crypto}</td>
            <td>
              <img
                src={coinsData[8].symbol}
                alt={coinsData[8].abbreviation}
                className='coin-image'
              />
            </td>
            <td>{coinsData[8].abbreviation}</td>

            <td className='has-text-right'>
              <input
                placeholder='0'
                name={coinsData[8].id}
                className='input is-small is-info is-rounded is-focused'
                type='number'
                min='0'
                step='0.0000000001'
                value={bch}
                onChange={(e) => setBch(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>{coinsData[9].crypto}</td>
            <td>
              <img
                src={coinsData[9].symbol}
                alt={coinsData[9].abbreviation}
                className='coin-image'
              />
            </td>
            <td>{coinsData[9].abbreviation}</td>

            <td className='has-text-right'>
              <input
                placeholder='0'
                name={coinsData[9].id}
                className='input is-small is-info is-rounded is-focused'
                type='number'
                min='0'
                step='0.0000000001'
                value={sol}
                onChange={(e) => setSol(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>{coinsData[10].crypto}</td>
            <td>
              <img
                src={coinsData[10].symbol}
                alt={coinsData[10].abbreviation}
                className='coin-image'
              />
            </td>
            <td>{coinsData[10].abbreviation}</td>

            <td className='has-text-right'>
              <input
                placeholder='0'
                name={coinsData[10].id}
                className='input is-small is-info is-rounded is-focused'
                type='number'
                min='0'
                step='0.0000000001'
                value={ltc}
                onChange={(e) => setLtc(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>{coinsData[11].crypto}</td>
            <td>
              <img
                src={coinsData[11].symbol}
                alt={coinsData[11].abbreviation}
                className='coin-image'
              />
            </td>
            <td>{coinsData[11].abbreviation}</td>

            <td className='has-text-right'>
              <input
                placeholder='0'
                name={coinsData[11].id}
                className='input is-small is-info is-rounded is-focused'
                type='number'
                min='0'
                step='0.0000000001'
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className='center-button'>
        <button className='button is-danger is-rounded' onClick={updateHandler}>
          <strong>Update now</strong>
        </button>
        <button
          className='button is-warning is-rounded ml-3'
          onClick={() => history.push('/coins')}
        >
          <strong>Cancel</strong>
        </button>
      </div>
    </div>
  )
}

export default UpdateTable
