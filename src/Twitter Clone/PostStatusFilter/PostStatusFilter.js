import "./PostStatusFilter.css";
import React from "react";
export default class PostStatusFilter extends React.Component{
 constructor(props) {
  super(props);
  this.buttons = [
   {name:"all",label:"All"},
   {name:"like",label:"Liked"}
  ]
 }

 render() {
  return (
    <div className="btn-group">
     {
      this.buttons.map(({name,label})=>{
       const active = this.props.filter===name,
         clazz = active ? "btn-info" :"btn-primary"
       return (
        <button
          key={name}
          type="button"
          className={`btn ${clazz}`}
          onClick={()=>{this.props.onFilter(name)}}
        >
         {label}
        </button>
       )
      })
     }
    </div>
  )
}
}
