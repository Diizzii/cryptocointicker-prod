import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='footer has-background-light ' id='footer'>
        <div className='content has-text-centered'>
          <p>
            <strong>CryptoCoinTicker</strong> by{' '}
            <a href='https://www.dkdev.link'>...dkdev...</a>
          </p>
          <p className='breakpoint'>
            <small>
              powered by{' '}
              <a
                href='https://www.coingecko.com'
                target='_blank'
                rel='noreferrer'
              >
                CoinGecko
              </a>{' '}
              --- icons provided by{' '}
              <a href='http://cryptoicons.co/' target='_blank' rel='noreferrer'>
                cryptoicons.co
              </a>
            </small>
          </p>
          <p>
            <small>
              no warranties of any kind in relation to this site's content,
              including data accuracy and updatedness
            </small>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
