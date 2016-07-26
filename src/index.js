import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App.js'
import About from './modules/About.js'
import Portfolio from './modules/Portfolio.js'

ReactDOM.render(
  <Router histroy={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/portfolio" component={Portfolio}/>
  </Router>,
  document.getElementById('app')
)

