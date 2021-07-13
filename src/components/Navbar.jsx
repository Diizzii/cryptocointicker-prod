import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import firebase from 'firebase/app'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

import logo from '../images/logo.png'
import { AppContext } from '../context/AppContext'
import { fb } from '../service/firebase'

const Navbar = () => {
  const history = useHistory()
  const { setLoggedIn, uid, setUid } = useContext(AppContext)
  const [hasUid, setHasUid] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('uid')) {
      setHasUid(true)
      setUid(localStorage.getItem('uid'))
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const closeAccount = () => {
    fb.auth.currentUser.delete().catch((err) => console.error(err))

    if (fb.firestore.collection('cryptoUsers').doc(uid)) {
      fb.firestore
        .collection('cryptoUsers')
        .doc(uid)
        .delete()
        .catch((err) => console.error(err))
    }

    setUid('')
    setLoggedIn(false)
    setHasUid(false)
    localStorage.removeItem('uid')
    history.push('/coins')
  }

  const deleteHandler = () => {
    confirmAlert({
      title: '',
      message: 'Are you sure you want to delete your account with us?',
      buttons: [
        { label: 'Yes...', onClick: () => closeAccount() },
        { label: 'No!', onClick: () => history.push('/coins') },
      ],
    })
  }

  const loginHandler = () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCred) => {
        setLoggedIn(true)
        setUid(userCred.user.uid)
        setHasUid(true)
        localStorage.setItem('uid', userCred.user.uid)
      })
  }

  const logoutHandler = () => {
    firebase.auth().signOut()
    setHasUid(false)
    setUid('')
    localStorage.removeItem('uid')
  }

  return (
    <>
      <nav
        className='navbar has-background-light'
        role='navigation'
        aria-label='main navigation'
      >
        <div className='navbar-brand'>
          <div
            className='navbar-item pointer'
            onClick={() => history.push('/coins')}
          >
            <img
              src={logo}
              width='30px'
              height='35px'
              alt='CryptoCoinTicker Logo'
            />
          </div>
        </div>

        <div id='navbarBasicExample' className='navbar-menu'>
          {hasUid && (
            <div className='navbar-start'>
              <div
                className='navbar-item pointer'
                onClick={() => history.push('/portfolio')}
              >
                Your Portfolio
              </div>
              <div
                className='navbar-item pointer'
                onClick={() => history.push('/update')}
              >
                Update Portfolio
              </div>
            </div>
          )}

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                {hasUid && (
                  <>
                    <button
                      className='button is-warning is-rounded'
                      onClick={deleteHandler}
                    >
                      <strong>Delete account</strong>
                    </button>
                    <button
                      className='button is-info is-rounded'
                      onClick={logoutHandler}
                    >
                      <strong>Log out</strong>
                    </button>
                  </>
                )}
                {!hasUid && (
                  <>
                    <button
                      className='button is-success is-rounded'
                      onClick={loginHandler}
                    >
                      <strong>
                        <FcGoogle style={{ width: '20px', height: '20px' }} />{' '}
                        Log in
                      </strong>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
