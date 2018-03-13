import React from 'react'
import Redirect from 'react-router-dom/Redirect'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import withRouter from 'react-router-dom/withRouter'
import { compose } from 'redux'

import routesConfig from './routes'

class App extends React.PureComponent {
  render () {
    return (
      <Switch>
        {routesConfig.map(route => {
          return <Route key={route.path} {...route} />
        })}
        <Redirect to='/' />
      </Switch>
    )
  }
}

export default compose(withRouter)(App)
