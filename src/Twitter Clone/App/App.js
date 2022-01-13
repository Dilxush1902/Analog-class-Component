import AppHeader from "../AppHeader";
import "./App.css"
import SearchPanel from "../SearchPanel";
import PostStatusFilter from "../PostStatusFilter";
import PostList from "../PostList";
import PostAddForm from "../PostAddForm";
import React from "react";

export default class App extends React.Component{
 constructor(props) {
  super(props);
  this.state= {
   data: [
    {label: "Going to learn React JS", important: false, like: false, id: 1},
    {label: "That is so good...", important: false, like: false, id: 2},
    {label: "I need a break...", important: false, like: false, id: 3},
   ],
   term:"",
   filter:"all"

  }
 }

 maxId = 4;
deleteItem=(id)=> {
  this.setState(({data})=>{
   const index=data.findIndex((elem)=>elem.id === id),
     before= data.slice(0,index),
     after = data.slice(index+1),
     newArr = [...before,...after]
   return {
    data:newArr
   }
  })
}
onToggleLike= (id)=> {
 this.setState(({data})=>{
  const index =data.findIndex(elem => elem.id === id),
    oldItem= data[index],
    newItem= {...oldItem,like:!oldItem.like}
  return {
   data:[...data.slice(0,index),newItem,...data.slice(index+1)]
  }

 })
}
onToggleImportant= (id)=> {
 this.setState(({data})=>{
  const index = data.findIndex(elem => elem.id === id),
    oldItem = data[index],
    newItem = {...oldItem,important:!oldItem.important},
    newArr = [...data.slice(0,index),newItem,...data.slice(index+1)]
  return {
   data: newArr
  }
 })
}

addItem = (body) => {
 const data = this.state.data
 this.setState(()=>{
  const createItem = {
   label: body,
   important: false,
   like: false,
   id: this.maxId++
  }
  return {
   data: [...data,createItem]
  }
 })
}
searchPost = (items,term) => {
 if (term.length === 0) {
  return items
 }
 return items.filter((item) =>(
     item.label.indexOf(term) >-1
   ))
}
onUpdateSearch = (term)=>{
this.setState({term:term})
}
filterPost = (items,filter) => {
 if (filter === "like") {
  return (
    items.filter(item => item.like)
  )
}
 else {
  return items
 }
}
onFilter = (filter) =>{
 this.setState({filter:filter})
}

 render() {
  const {data,term,filter} = this.state,
    allLike = data.filter((item)=>item.like).length,
    posts = data.length,
    visiblePost = this.filterPost(this.searchPost(data,term),filter)
  return (
    <div className="app">
     <AppHeader allLike={allLike} posts={posts}  />
     <div className="search-panel d-flex">
      <SearchPanel
        onUpdateSearch={this.onUpdateSearch}
      />
      <PostStatusFilter
       filter={filter}
       onFilter={this.onFilter}
      />
     </div>
     <PostList
       data={visiblePost}
       deleteItem={this.deleteItem}
       onToggleLike={this.onToggleLike}
       onToggleImportant={this.onToggleImportant}
     />
     <PostAddForm addItem={this.addItem} />
    </div>
  );
 }

}
