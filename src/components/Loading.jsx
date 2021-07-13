import React from 'react'

const Loading = () => {
  return (
    <div className='container has-text-centered has-text-info loading'>
      <h1 className='is-size-2 has-text-weight-bold '>One moment please!</h1>
      <h3 className='is-size-4'>
        We are getting the latest coin data for you...
      </h3>
    </div>
  )
}

export default Loading
