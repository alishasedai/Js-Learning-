import React ,{useContext} from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';

const AllUser = () => {
    const {users ,handleDelete,handleEdit} = useContext(UserContext);
    const navigate = useNavigate();
  return (
    <div>
      <h2>Here is the data..</h2>
     <div>
         {users.map((val,index) => {
        return <div key={index}>
            <p>Name : {val.name}</p>
            <p>Email : {val.email}</p>
            <p>Address : {val.address}</p>
            <button onClick={() => handleEdit(val._id)} >Edit</button> &nbsp;
            <button onClick={() => handleDelete(val._id)}>Delete</button>
            <hr />
        </div>
      })}
      <button onClick={() => navigate("/")}>create the user</button>
     </div>
    </div>
  )
}

export default AllUser
