import React, { useState } from 'react'

const LikeBtn = () => {
    const [like,setLike] = useState(false);
    const handleLike = () => {
        setLike(!like);
    }

  return (
    <div>
      <button onClick={handleLike}>{(like) ? "❤️" : "unlike" }</button>
    </div>
  )
}

export default LikeBtn
