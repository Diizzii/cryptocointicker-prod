import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { AppContext } from '../context/AppContext'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { uid } = useContext(AppContext)

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!uid ? <RouteComponent {...routeProps} /> : <Redirect to={'/coins'} />
      }
    />
  )
}

export default PrivateRoute
