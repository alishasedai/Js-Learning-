import React from 'react'
import Avatar from './Avatar';

const UserCard = ({user}) => {
  return <div>
    <div>
      <Avatar
      width={50}
      height={50}
      name={user?.name}/>
    </div>
    <div>
      <div className='font-semibold'>
        {user?.name}
      </div>
      <p>{user?.email}</p>
    </div>
  </div>;
}

export default UserCard
