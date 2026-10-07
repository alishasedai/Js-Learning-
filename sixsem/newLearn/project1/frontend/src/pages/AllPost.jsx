import { React, useState,useEffect } from "react";
import axios from "axios"
const AllPost = () => {
   const [getpost, setgetpost] = useState([
     {
         _id: "6ac4defe05068d3c3778f4da"  , 
         image: "https://ik.imagekit.io/kz3hzmycc/image_PSjqsdKm5.jpg",
         caption: "Taste it ,it is very yummy"
       
     }
   ]);
   useEffect(() => {
    const fetchItems = async () => {
        try {
            const response = await axios.get(
              "http://localhost:3000/getAllPost"
            );
            console.log(response.data);
            
            setgetpost(response.data.postss)
        } catch (error) {
            console.log("Error fetching data : "+error);
            
        }
    }
    fetchItems()
   }, [])
   
  return (
    <div className="min-h-screen py-4">
      <h2 className="text-3xl text-blue-700 font-semibold text-center">Items are here ....</h2>
      <section className=" py-5 grid grid-cols-3 place-items-center  gap-2 justify-center ">
        {getpost.length > 0 ? (
          getpost.map((post) => {
            return (
              <div
                className="w-100 flex flex-col justify-center bg-blue-300 gap-4 items-center border-5 h-80 rounded-xl "
                key={post._id}
              >
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
