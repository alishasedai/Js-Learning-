import React ,{useState,useEffect} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Note = () => {
  const navigate = useNavigate();
const [Note, setNote] = useState({
        name : "",
        address : ""
    });
    const [allNote,setAllNote]=useState([]);

   
      const handleSubmit = async(e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:3000/hel",Note);
          console.log("Noteee : ", response.data);
          setAllNote([...allNote, Note]);
          setNote({
            name: "",
            address: "",
          });
          navigate("/helloNotes")
        } catch (error) {
          console.log("Error message : ",error.message);     
        }
      }
      const handleChange = (e) => {
        setNote({
          ...Note,
          [e.target.name] : e.target.value
        });
      }
      useEffect(() => {
         console.log("All note : ", allNote);
      }, [Note])

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={Note.name}
          onChange={handleChange}
          placeholder="Enter you name"
        />{" "}
        <br />
        <input
          type="text"
          name="address"
          placeholder="Enter you address"
          value={Note.address}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Note
