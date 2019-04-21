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

showDetails (widget) {
  this.setState({
    // activeComment: comment,
    detailsVisible: true
  })
}

render () {
  return (
    <div>
          <ErrorMessage error={this.state.error} />
      <h1>personal project</h1>
     <CommentList
       showDetails={this.showDetails}
     comments ={this.state.comments}/>
  
  
  <Form/>
      <Router>
        <div>
          <Route exact path='/' component={Home} />


        </div>

      </Router>
    </div>
  )
}
}


