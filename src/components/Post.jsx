import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

const Post= ({ post })=>{

  const { deletePost }=useContext(PostListContext);


    return <div className="card" style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">{post.title}
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    <MdDelete onClick={()=>deletePost(post.id)}></MdDelete>
    <span class="visually-hidden">unread messages</span>
  </span>
      </h5>
      <p className="card-text">{post.body}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
}

export default Post;