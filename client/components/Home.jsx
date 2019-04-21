import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>personal project - This is the home page </p>
      
      
      <Button variant="primary"><Link to="/wombats">Me</Link></Button>
      
      
      <li><Link to="/wombats">All about Me!</Link></li>
    
    </div>
  )
}
export default Home
