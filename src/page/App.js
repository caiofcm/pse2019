import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { Drawer, AppBar, Loading } from 'components'
import { useToggle } from 'utils'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    overflowY: 'auto',
    backgroundColor: (theme.palette.type === 'dark') ? '#191919' : '#fafafa',
    padding: theme.spacing.unit * 3,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 48,
  },
}))

const routes = [
  {
    path: '/',
    component: withRouter(lazy(() => import('./inicial')))
  },  
  {
    path: '/avaliar-trabalho',
    component: withRouter(lazy(() => import('./avaliar-trabalho')))
  },    
  {
    path: '/home',
    component: withRouter(lazy(() => import('./home')))
  },
  {
    path: '/statistics',
    component: withRouter(lazy(() => import('./statistics')))
  },
  {
    path: '/comment',
    component: withRouter(lazy(() => import('./comment')))
  },
  {
    path: '(.*)',
    component: withRouter(lazy(() => import('./error')))
  },
]

function App () {
  const classes = useStyles()
  const _useToggle = useToggle()

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline/>
        <AppBar {..._useToggle}/>
        <Drawer{..._useToggle}/>

        <main className={classes.content}>
          <div className={classes.toolbar}/>
          <Suspense fallback={<Loading/>}>
            <Switch>
              {routes.map((route, key) => <Route key={key} exact {...route}/>)}
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

export default App
