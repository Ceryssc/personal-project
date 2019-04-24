import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
// import{img1} from '../../img1.jpg'

const Home = () => {
  return (
    <div className="homeContainer" >
      <h1>Home</h1>
      
      <p>personal project - This is the home page </p>
     
      <div className ="images">
      {/* <div className="imageOne">  */}
        <img src={'../image.jpg'} height="500"/>
        <img src={'../image2.jpg'} height="500"/>
        <img src={'../img3.jpg'} height="500"/>
      </div>

      {/* <div className="image2"> 
        <img src={'../image2.jpg'} height="500"/>
     </div>

      </div> */}
      {/* <Button variant="primary"><Link to="/wombats">Me</Link></Button>
      
      
      <li><Link to="/wombats">All about Me!</Link></li> */}
    
    </div>
  )
}
export default Home
