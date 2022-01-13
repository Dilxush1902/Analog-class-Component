import React from "react";
import "./PostListItem.css";

export default class PostListItem extends React.Component{

 render() {
  let className = "list-group-item app-list-item d-flex justify-content-between";
  const {label,onDelete,onLike,onImportant,important,like}=this.props;
  if (like) {
   className += " like"
  }
  if (important) {
   className += " important"
  }
  return (
    <li className={className}  >
      <span className="app-list-item-label" onClick={onLike} >
       {label}
      </span>
     <div className="d-flex justify-content-center align-items-center">
      <button
        type="button"
        className="btn-star btn-sm"
        onClick={onImportant}
      >
       <i className="fa fa-star"> </i>
      </button>
      <button
        type="button"
        className="btn-trash btn-sm"
        onClick={onDelete}
      >
       <i className="fa fa-trash"> </i>
      </button>
      <i className="fa fa-heart"> </i>
     </div>
    </li>
  );
 }

}