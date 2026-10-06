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
  <section>
    {
        getpost.length > 0 ? (
                getpost.map((post) => {
                    return <div key={post._id}  >
                        <img src={post.image} width="200" height="100" alt="" />
                        <p>{post.caption}</p>
                    </div>
                })
        ) : (
            <h1> No post available!!</h1>
        )
    }
  </section>
  )
}

export default AllPost
