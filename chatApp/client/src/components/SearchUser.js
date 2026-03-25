import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Loading from './Loading';

const SearchUser = () => {
    const [searchUser,setSearchUser] = useState([])
    const [loading,setLoading] = useState(true)
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-slate-600 bg-opacity-35 p-2">
      <div className='w-full max-w-lg mx-auto mt-10'>
        {/* Input search user */}
        <div className='bg-white rounded h-14 overflow-hidden flex'>
            <input 
            type='text'
            placeholder='search user by name, email...'
            className='w-full outline-none py-1 h-full px-4'
            />
            <div className='w-14 h-14 flex justify-center items-center'>
                <IoSearchOutline
                size={25}/>
            </div>
        </div>
        {/* display search user */}
        <div className='bg-white mt-2 w-full p-4 rounded'>
        {/* No user found */}
        {
            searchUser.length === 0 && !loading &&(
                <p className='text-center text-slate-500'>no user found!</p>
            )
        }
        {
            loading && (
                <p><Loading/></p>
            )
        }
        </div>
      </div>
    </div>
  );
}

export default SearchUser
