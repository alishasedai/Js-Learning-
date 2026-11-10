import React , {useContext} from 'react'
import {UsersContext} from "../context/UsersContext"

const AdminDashboard = () => {
const {adminPost,handleAdminPost,handleChangeAdmin} = useContext(UsersContext)
  return (
    <div>
      admin
      <form action="" onSubmit={handleAdminPost}>
        <input
          type="text"
          name="title"
          value={adminPost.title}
          onChange={handleChangeAdmin}
        />
        <br />
        <label htmlFor="">Description:</label> <br />
        <textarea
          name="description"
          value={adminPost.description}
          onChange={handleChangeAdmin}
          placeholder="Enter announcement description"
          rows="4"
        ></textarea>
        <br />
        <label htmlFor="">Target Gender : </label><br />
        <div>
          {["female","male","all","others"].map((gender) => (
            <label htmlFor="" key={gender}>
              <input type="radio"
              name="gender" 
              value={gender}
              checked ={adminPost.gender === gender}
              onChange={handleChangeAdmin}/>
              
              <span>{gender}</span>
            </label>

          ))}
        </div>


        <button value="submit">Create Annoucements</button>
      </form>
    </div>
  );
}

export default AdminDashboard
