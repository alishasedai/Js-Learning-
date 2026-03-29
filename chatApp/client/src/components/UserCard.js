import React from 'react'
import Avatar from './Avatar';
import { Link } from 'react-router';


const UserCard = ({user,onClose}) => {
  return (
    <Link
      to={"/" + user?._id}
      onClick={onClose}
      className="flex items-center gap-3 p-3 lg:p-4 border border-transparent border-b-slate-200 hover:border hover:border-blue-400 rounded cursor-pointer"
    >
      <div>
        <Avatar 
        width={50}
         height={50}
          name={user?.name} 
          userId={user?._id}/>
      </div>
      <div>
        <div className="font-semibold text-ellipsis line-clamp-1">
          {user?.name}
        </div>
        <p className="text-sm text-ellipsis line-clamp-1">{user?.email}</p>
      </div>
    </Link>
  );
}

export default UserCard
