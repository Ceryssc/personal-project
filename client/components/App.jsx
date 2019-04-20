import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Form from "./Form.jsx";
import Home from './Home'

// import AppBar from './AppBar'


const App = () => {

 
  
  return (
    <div>
      
      <h1>personal project</h1>
     
  <Form/>
      <Router>
        <div>
          <Route exact path='/' component={Home} />


        </div>

      </Router>
    </div>
  )
}

export default App

