import {React} from 'react'
import  CreatePost  from "./pages/CreatePost";
import AllPost from "./pages/AllPost"
import {BrowserRouter ,Route,Routes} from "react-router-dom"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreatePost />} />
          <Route path="/all-post" element={<AllPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
