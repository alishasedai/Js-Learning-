import { React, useState,useEffect } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom";
const AllPost = ({getPost,setGetPost}) => {
  const navigate = useNavigate();
  //  const [getpost, setgetpost] = useState([
  //    {
  //        _id: "6ac4defe05068d3c3778f4da"  , 
  //        image: "https://ik.imagekit.io/kz3hzmycc/image_PSjqsdKm5.jpg",
  //        caption: "Taste it ,it is very yummy"
       
  //    }
  //  ]);
   useEffect(() => {
    const fetchItems = async () => {
        try {
            const response = await axios.get(
              "http://localhost:3000/getAllPost"
            );
            // console.log("response.data :",response.data);
            
            setGetPost(response.data.postss)
        } catch (error) {
            console.log("Error fetching data : "+error);
            
        }
    }
    fetchItems()
   }, [])
   
   const deletePost = () => {
    console.log("id : ",);
    
   }
   const editPost = (id) => {
    navigate("/update-post")
    console.log("Id of edit post : ",id);
    
   }
  return (
    <div className="min-h-screen py-4">
      <h2 className="text-3xl text-blue-700 font-semibold text-center">Items are here ....</h2>
     
      <section className=" py-5 grid grid-cols-3 place-items-center  gap-2 justify-center ">
        
        {getPost.length > 0 ? (
          getPost.map((post) => {
            return (
              <div
                className="w-100 flex flex-col justify-center bg-blue-300 gap-4 items-center border-5 h-100 rounded-xl "
                key={post._id}
              >
                 <div className="flex gap-5 w-full  justify-end px-5">
                    <button onClick={() => editPost(post._id)} className="py-2 bg-red-500 px-8 w-20 rounded-xl flex justify-center">Edit</button>
                    <button onClick={ deletePost} className="py-2 bg-red-500 px-8 rounded-xl w-20 flex justify-center">Delete</button>
                  </div>
                <img
                  className="border-3 h-60 w-80"
                  src={post.image}
                  width="200"
                  height="100"
                  alt=""
                />
                <p className=" text-center text-white bg-red-400 w-80 py-1">
                  {post.caption}
                </p>
              </div>
            );
          })
        ) : (
          <h1> No post available!!</h1>
        )}
      </section>
    </div>
  );
}

export default AllPost
