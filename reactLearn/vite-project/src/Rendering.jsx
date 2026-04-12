// import React from 'react'


// const Rendering = () => {
//     const isLoggedIn = false;

//     if(isLoggedIn){
//         return <h2>Welcome User..</h2>
//     }
//     else{
//         return <h2>Plese login!!</h2>
//     }
// }
// export default Rendering
// import React from 'react'

// const Rendering = () => {
//     const isLoggedIn = true;
//     let message;
//     if(isLoggedIn){
//         message = <h2>Welcome User..</h2>
//     }
//     else{
//         message =  <h2>Plese login!!</h2>
//     }
//     return(
//         <div>
//          {message}
//         </div>
//     )
// }
// export default Rendering

// import React from 'react'

// const Rendering = () => {
//     const isLoggedIn = false;
//   return (
//     <div>
//       {isLoggedIn ? <h1>Welcome user</h1> : <h1>Please login..</h1>}
//     </div>
//   )
// }

// export default Rendering
// import React from 'react'

// const Rendering = () => {
//     const hadMessage = true;
//   return (
//     //logical operator
//     <div> 
//       {hadMessage && <p>Hello you had a new message...</p>}
//     </div>
//   )
// }

// export default Rendering

import React from 'react'
import "./Rendering.css"
const Rendering = () => {
    const isVisible = true;
    const visibiality = isVisible ? "visible" : "invisible"

  return (
    <div>
      {/* <h1 className={isVisible ? "visible" : "invisible"}>Conditional Rendering</h1> */}
    <h1 className={visibiality}>Conditional Rendering</h1>
      <p>Lorem ipsum dolor,us quis dolorum laudantium, dolores, voluptas, fugit in numquam!</p>
    </div>
  )
}

export default Rendering
