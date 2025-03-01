import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";


const CreatePost = () => {

   let idRef= useRef();
   let titleRef= useRef();
   let bodyRef= useRef();

    const {addPost} = useContext(PostListContext);
    const navigate= useNavigate();

   const handleSubmitButton= (event)=>{


    event.preventDefault();

     let id= idRef.current.value;
     let title= titleRef.current.value;
     let body= bodyRef.current.value;

     idRef.current.value="";
     titleRef.current.value="";
     bodyRef.current.value="";
     

     addPost(id, title, body);
     navigate('/');



   }

  return <div className="create-post-container">
    <form className="form-container" onSubmit={handleSubmitButton}>

    <div className="mb-3">
        <label htmlFor="title" className="form-label">id</label>
        <input ref={idRef} type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter id here"/>
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input ref={titleRef} type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title here"/>
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Body</label>
        <textarea ref={bodyRef} rows={4} type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter content here"/>
      </div>

      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  </div>
}

export default CreatePost;