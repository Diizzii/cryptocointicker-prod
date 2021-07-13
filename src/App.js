import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Coins from './pages/Coins'
import Portfolio from './pages/Portfolio'
import Update from './pages/Update'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/coins' component={Coins} />
        <PrivateRoute path='/portfolio' component={Portfolio} />
        <PrivateRoute path='/update' component={Update} />
        <Redirect from='*' to='/coins' />
      </Switch>
    </Router>
  )
}

export default App
