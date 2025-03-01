import { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";


export const PostListContext = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currPostList, action) => {


    let newPostList = currPostList;
    if (action.type == "DELETE_POST") {
        newPostList = currPostList.filter(
            (post) => post.id != action.payload.postId);
    }
    else if (action.type == "ADD_POST") {
        newPostList = [action.payload, ...currPostList];

    }
    else if (action.type == "ADD_INITIAL_POST") {
        newPostList = action.payload.posts;
        console.log("reach at reducer");
    }
    return newPostList;
}




const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, defaultList);

    const addPost = (id, title, body) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id,
                title,
                body
            }
        });
    }


    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            }
        });
    }



    const addInitialPosts = (posts) => {

        console.log("reach at addInitialPosts");
        dispatchPostList({
            type: "ADD_INITIAL_POST",
            payload: {
                posts,
            }
        });
    }


    return <PostListContext.Provider value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addInitialPosts: addInitialPosts
    }}>
        {children}
    </PostListContext.Provider>
}


const defaultList = [
    /*   {
           id: '1',
           title: 'going to sahiwal',
           body: "i am going to sahiwal for a test",
       },
       {
           id: '2',
           title: 'going to faisalabad',
           body: "i am going to faisalabad for shopping",
       },
       {
           id: '3',
           title: 'going to lahore',
           body: "i am going to lahore for study",
       },
       {
           id: '4',
           title: 'going to sialkot',
           body: "i am going to sialkot for sports",
       }
           */
];

export default PostListProvider;