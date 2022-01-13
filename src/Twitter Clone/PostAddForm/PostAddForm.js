import "./PostAddForm.css"
import React from "react";

export default class PostAddForm extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   text:""
  }
 }

 onSubmit = (e) => {
  e.preventDefault()
 if (this.state.text.length) {
  this.props.addItem(this.state.text)
  this.setState({text:""})
 } else {
  alert("Postni toldiring !")
 }

 }

 render() {
  return (
    <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
     <input
       type="text"
       placeholder="What are you thinking about ?"
       className="new-post-label form-control"
       onChange={(e)=>{this.setState({text:e.target.value})}}
       value={this.state.text}

     />
     <button
       type="submit"
       className="btn btn-outline-primary"
     >
       Add Post
     </button>
    </form>
  );
 }
}
