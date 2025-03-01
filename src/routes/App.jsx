import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import CreatePost from '../components/CreatePost'
import PostList from '../components/PostList'
import { useState } from 'react'
import PostListProvider from '../store/post-list-store'
import { Outlet } from 'react-router-dom'

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className='app-container'>
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
        <div className='header-footer-container'>
          <Header></Header>

          <div>
          <Outlet/>
          </div>

          {/*selectedTab == "Home"
            ? <div className='post-list-container'><PostList></PostList></div>
            : <CreatePost></CreatePost>*/}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App
