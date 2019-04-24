import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Form from "./Form.jsx";
import Home from './Home'
import CommentList from './CommentList'
import ErrorMessage from './ErrorMessage'
// import {getComments} from '../api'
import * as api from '../api'


// import AppBar from './AppBar'


export default class App extends React.Component  {
  constructor (props) {
    super(props)

    this.state = {
      error: null,
     comments: [],
   detailsVisible: false,
   addWidgetVisible: false
   
  }
  

  this.refreshList = this.refreshList.bind(this)
  this.renderComments = this.renderComments.bind(this)
  this.showDetails = this.showDetails.bind(this)
  this.showAddWidget = this.showAddWidget.bind(this)
}

componentDidMount () {
  this.refreshList()
}

renderComments (err, comments) {
  this.setState({
    error: err,
    comments: comments || []
  })
}

refreshList (err) {
  this.setState({
    error: err,
    addWidgetVisible: false
  })
  api.getComments(this.renderComments)
}

showAddWidget () {
  this.setState({
    addWidgetVisible: true
  })
}

showDetails (widget) {
  this.setState({
    // activeComment: comment,
    detailsVisible: true,
    addWidgetVisible: false
  })
}

render () {
  return (

    <div className="main-container">
          <ErrorMessage error={this.state.error} />
         
      <h1>personal project</h1>






  
        

<button name="refresh" onClick={this.refreshList}>Refresh Page</button>


      <Router>
        <div>
          <Route  path='/' component={Home} />
     

        </div>

        <div className = "formStuff">
        <Form  finishAdd={this.refreshList}/>
        </div>
        <CommentList className= "comments"
       showDetails={this.showDetails}
     comments ={this.state.comments}/>
  
     
      
     
      </Router>
    </div>
  )
}
}


