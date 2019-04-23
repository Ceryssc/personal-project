import React from "react";


// import {appendComments} from '../api'
import * as api from '../api'


class Form extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
      name: "",
      comment: "",
      // email: "",
      // password: "",
    };


this.handleChange = this.handleChange.bind(this);
this.addComment = this.addComment.bind(this)
  }




 handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  addComment (e) {
    api.appendComments(this.state, this.props.finishAdd)
  }


 render() {
    const { name, comment} = this.state;
 return (
<div className="form">
  <form>
    <div className = "inputOne">
  <input
    // value={name}
    onChange={this.handleChange}
    placeholder="name"
    value={this.state.name}
    type="text"
    name="name"
    required
  />
  </div>
  <div className = "inputTwo">
  <input
    // value={comment}
    onChange={this.handleChange}
    placeholder="comment"
    value={this.state.price}
    type="text"
    name="comment"
    required
  />
  </div>
  {/* <input
    value={email}
    onChange={this.handleInputChange}
    placeholder="Email address"
    type="email"
    name="email"
    required
  />
  <input
    value={password}
    onChange={this.handleInputChange}
    placeholder="Password"
    type="password"
    name="password"
    required
  /> */}
<button className="b1" type="button" onClick={this.addComment}>Submit</button>
{' '}
<a href='#' onClick={this.props.finishAdd}>Cancel</a>
</form>
</div>
      
       
   
    );
  }
}
export default Form;