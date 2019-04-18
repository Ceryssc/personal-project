import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import AppBar from './AppBar'

const App = () => {

 
  
  return (
    <div>
      <AppBar/>
      <h1>personal project</h1>
      <Router>
        <div>
          <Route path='/' component={Home} />


        </div>

      </Router>
    </div>
  )
}

export default App

