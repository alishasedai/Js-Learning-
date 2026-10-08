import {React, useState} from 'react'
import  CreatePost  from "./pages/CreatePost";
import AllPost from "./pages/AllPost"
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import UpdatePost from './pages/UpdatePost';
const App = () => {
  const [post,setPost] =useState([]);
  const [getPost,setGetPost] =useState([]);
  const [updatePost,setUpdatePost] =useState([]);

  return (
    <div className="h-screen ">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<CreatePost  post={post} setPost={setPost}/>} />
          <Route path="/all-post" element={<AllPost getPost={getPost} setGetPost={setGetPost} />} />
          <Route path='/update-post' element={<UpdatePost getPost={getPost} updatePost={updatePost} setUpdatePost={setUpdatePost}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
