import {React, useState} from 'react'
import  CreatePost  from "./pages/CreatePost";
import AllPost from "./pages/AllPost"
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import UpdatePost from './pages/UpdatePost';
const App = () => {
  const [post,setPost] =useState([]);
  const [getPost,setGetPost] =useState([]);
  const [updatePost,setUpdatePost] =useState([]);
  const [caption,setCaption] = useState([]);

  return (
    <div className="h-screen ">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<CreatePost  post={post} setPost={setPost}/>} />
          <Route path="/all-post" element={<AllPost getPost={getPost} setGetPost={setGetPost} setUpdatePost={setUpdatePost} />} />
          <Route path='/update-post/:id' element={<UpdatePost getPost={getPost} setGetPost={setGetPost} updatePost={updatePost} setUpdatePost={setUpdatePost} caption={caption} setCaption ={setCaption}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
