import "./AppHeader.css"
const AppHeader = ({posts,allLike}) => {
 return (
    <div className="app-header d-flex">
     <h1>Pardayev Dilxush <span>class componentli</span></h1>
     <h2>{posts} posts, like {allLike}</h2>
    </div>
  )
}
export default AppHeader;