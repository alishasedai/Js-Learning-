import React from 'react'

import { FaRegCircleUser } from "react-icons/fa6";


const Avatar = ({userId,name,imageUrl,width,height}) => {
    console.log(name)
    let avatarName = "";
    if (name) {
      const splitName = name?.split(" ");
      if (splitName.length > 1) {
        avatarName = splitName[0][0] + splitName[1][0];
      } else {
        avatarName = splitName[0][0];
      }
    } 
    const bgColor = [
      "bg-slate-200",
      "bg-teal-200",
      "bg-red-200",
      "bg-green-200",
      "bg-yellow-200",
      "bg-blue-200",
      "bg-purple-200",
      "bg-pink-200",
    ];
    const randomNumber =Math.floor( Math.random() * 8)
    console.log(randomNumber)
  return (
    <div
      className={`overflow-hidden text-slate-800 rounded-full shadow border text-xl font-bold `}
      style={{ width: width + "px", height: height + "px" }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          width={width}
          height={height}
          alt={name}
          className="overflow-hidden rounded-full"
        />
      ) : name ? (
        <div
          style={{ width: width + "px", height: height + "px" }}
          className={`overflow-hidden rounded-full flex justify-center items-center ${bgColor[randomNumber]}`}
        >
          {avatarName}
        </div>
      ) : (
        <FaRegCircleUser size={50} />
      )}
    </div>
  );
}

export default Avatar

