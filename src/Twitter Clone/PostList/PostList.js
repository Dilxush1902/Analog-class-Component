import "./PostList.css";
import PostListItem from "../PostListItem";
const PostList = ({data,deleteItem,onToggleLike,onToggleImportant}) => {
  return (
    <ul className="app-list list-group" >
      {
        data.map((item)=>(
          <PostListItem
            key={item.id} {...item}
            onDelete={()=>{deleteItem(item.id)}}
            onLike={()=>{onToggleLike(item.id)}}
            onImportant={()=>{onToggleImportant(item.id)}}
          />
        ))
      }
    </ul>
  )
}
export default PostList;