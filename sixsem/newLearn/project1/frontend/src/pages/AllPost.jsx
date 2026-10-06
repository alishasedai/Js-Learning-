import { React, useState } from "react";

const AllPost = () => {
   const [getpost, setgetpost] = useState([
     {
         _id: "6ac4defe05068d3c3778f4da"  , 
         image: "https://ik.imagekit.io/kz3hzmycc/image_PSjqsdKm5.jpg",
         caption: "Taste it ,it is very yummy"
       
     }
   ]);
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
