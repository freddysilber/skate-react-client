import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home'
import SkatersContainer from './containers/SkatersContainer'
import { Navbar } from './components'

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/skaters" component={SkatersContainer} />
        </Switch>
      </Router>
    </>
  )
}

export default App