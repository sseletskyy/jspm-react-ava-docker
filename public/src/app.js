import React from 'react'
import { render } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch, NavLink } from 'react-router-dom'

import routeConfig from 'common/routeConfig'
import { configureStore } from 'common/configStore'
import AppBar from 'muicss/lib/react/appbar'
import Button from 'muicss/lib/react/button'

// const routes = <Route path={homeRoute.path} component={homeRoute.component}/>
// const routes = <Route path='/' component={Home}/>
// const routes = [
//  <Route exact key='/' path='/' component={Home} />,
//  <Route key={homeRoute.path} path={homeRoute.path} component={homeRoute.component} />
// ]
const history = createHistory()

const store = configureStore({}, history)
class RenderForcer extends React.Component {
  componentWillMount () {
    this.forceUpdate()  // a little hack to help us rerender when this module is reloaded
  }

  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <AppBar>
              <NavLink to='/'><Button color='primary'>Home</Button></NavLink>
              <NavLink to='/exchange'><Button color='primary'>Exchange</Button></NavLink>
            </AppBar>
            <Switch>
              {routeConfig.map(route => <Route key={route.path} {...route} />)}
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

render(
  <RenderForcer />,
  document.getElementById('app')
)
