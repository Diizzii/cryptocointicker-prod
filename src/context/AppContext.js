import React, { useState, createContext, useEffect } from 'react'

import { fb } from '../service/firebase'
import Loading from '../components/Loading'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [uid, setUid] = useState(null)
  const [pending, setPending] = useState(true)
  const [userName, setUserName] = useState('')
  const [coinValues, setCoinValues] = useState([])
  const [touched, setTouched] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fb.auth.onAuthStateChanged((user) => {
      if (user) setUid(user.uid)
      setPending(false)
    })
  }, [])

  const value = {
    uid,
    setUid,
    userName,
    setUserName,
    coinValues,
    setCoinValues,
    touched,
    setTouched,
    loggedIn,
    setLoggedIn,
  }

  if (pending) return <Loading />

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
