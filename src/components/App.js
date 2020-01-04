import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import Dashboard from '../pages/Dashboard'

function App () {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
