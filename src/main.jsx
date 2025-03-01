import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import CreatePost from './components/CreatePost.jsx';
import PostList from './components/PostList.jsx';

const router = createBrowserRouter(
  [
    { path: "/",
       element: <App/>,
        children:[{ path: "/", element: <div className='post-list-container'><PostList/> </div> },
          { path: "/create-post", element: <CreatePost /> } ] },
    
  ]
);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
