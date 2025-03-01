import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";


const PostList = () => {


     const { postList, addInitialPosts } = useContext(PostListContext);
     const [fetching, setFetching] = useState(false);

     /*const [fetchState, setFetchState] = useState(true);
     if (fetchState) {
          fetch('https://dummyjson.com/posts')
               .then(res => res.json())
               .then(data => {
                    addInitialPosts(data.posts);
                    console.log(data.posts);
               });
               setFetchState(false);
     }
     */


     //this is the useEffetct to do same above work that is by useState() and commented
     //actually now i am commenting this method because this method fetches posts from server at the initial time
     //when website is loaded
     /*
          useEffect(() => {
               const controller= new AbortController();
               const signal = controller.signal;
     
               setFetching(true)
               fetch('https://dummyjson.com/posts', {signal})
                    .then(res => res.json())
                    .then(data => {
                         addInitialPosts(data.posts);
                         setFetching(false);
                    });
     
                    return (()=>{
                         console.log("Home is disabled");
                         controller.abort();
                    })
          }, []);
     */



     // this method will work on button Click which is defined in welcomeMessage component
     const fetchPosts = () => {
          console.log("method called");
          fetch('https://dummyjson.com/posts')
               .then(res => res.json())
               .then(data => {
                    addInitialPosts(data.posts);
               });
     }

     return <>
          {fetching && <LoadingSpinner></LoadingSpinner>}
          {!fetching && postList.length == 0 && <WelcomeMessage onBtnClick={fetchPosts}></WelcomeMessage>}

          {!fetching && postList.map(item =>

               <Post key={postList.id} post={item}></Post>
          )}

     </>
}

export default PostList;