import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Loading from './Loading';
import UserCard from './UserCard';
import toast from "react-hot-toast";
import axios from 'axios';

const SearchUser = () => {
    const [searchUser,setSearchUser] = useState([])
    const [loading,setLoading] = useState(true)
    const [search,setSearch] = useState("")

    const handleSearchUser = async() => {
        setLoading(true)
        
        const URL = `${process.env.REACT_APP_BACKEND_URL}/api/search-user`;

        try {
          // const response = await axios({
          //   method: "post",
          //   url: URL,
          //   search: search ,
          // });
          const response = await axios.post(URL, {
            search: search,
          });
          setSearchUser(response?.data?.data);
        } catch (err) {
          toast.error(err?.response?.data?.message);
        } finally {
          setLoading(false); // stop loading after API finishes
        }
    }
//     useEffect(() => {
    
//         handleSearchUser()
    
// },[search])
        useEffect(() => {
        if (search.trim() !== "") {
            handleSearchUser();
        } else {
            setSearchUser([]); // clear previous results if input is empty
        }
        }, [search]);

    console.log("search user",searchUser)
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-slate-600 bg-opacity-35 p-2">
      <div className="w-full max-w-lg mx-auto mt-10">
        {/* Input search user */}
        <div className="bg-white rounded h-14 overflow-hidden flex">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="search user by name, email..."
              className="w-full outline-none py-1 h-full px-4"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </form>
          <div className="w-14 h-14 flex justify-center items-center">
            <IoSearchOutline size={25} />
          </div>
        </div>
        {/* display search user */}
        <div className="bg-white mt-2 w-full p-4 rounded">
          {/* No user found */}
          {searchUser.length === 0 && !loading && (
            <p className="text-center text-slate-500">no user found!</p>
          )}
          {loading && (
            <p>
              <Loading />
            </p>
          )}
          {searchUser.length !== 0 &&
            !loading &&
            searchUser.map((user, index) => {
              return <UserCard key={user._id} user={user} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default SearchUser
