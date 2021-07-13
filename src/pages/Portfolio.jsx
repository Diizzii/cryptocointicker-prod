import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import PortfolioTable from '../components/PortfolioTable'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'

const Portfolio = () => {
  const history = useHistory()
  const { touched } = useContext(AppContext)

  if (!touched) {
    history.push('/coins')
  }

  return (
    <>
      <Navbar />
      <PortfolioTable />
      <Footer />
    </>
  )
}

export default Portfolio
