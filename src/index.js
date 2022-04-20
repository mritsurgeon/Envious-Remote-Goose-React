import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Pricing from './views/pricing'
import Signup from './views/signup'
import About from './views/about'
import Features from './views/features'
import Completed from './views/completed'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Pricing} path="/pricing" />
        <Route exact component={Signup} path="/signup" />
        <Route exact component={About} path="/about" />
        <Route exact component={Features} path="/features" />
        <Route exact component={Completed} path="/completed" />
        <Route exact component={Home} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
