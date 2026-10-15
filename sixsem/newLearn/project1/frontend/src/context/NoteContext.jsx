import { createContext ,useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const NoteContext = createContext();
console.log("Context component started");
export const NoteContextProvider = ({children}) => {

  console.log("Context rendered");
  console.log("PROVIDER INITIALIZED");
  const [getInput,setGetInput] = useState({
    task : "",
    priority : ""
  })
  const [index,setIndex] = useState(null);
  const [Notes,setNotes] = useState([]);
  console.log("current notes : ",Notes);
      const navigate = useNavigate();

  //fetch notes from mongodb
  const API = "http://localhost:3000"

    const fetchNotes = async() => {
      try{
        const response = await axios.get(API);
        setNotes(response.data.data)
      }
      catch(err){
        console.log("Error fetching notes : ",err.message);
        
      }
    } 
    useEffect(() => {
      fetchNotes();
    },[])

       const handleSubmit = async(e) => {
         e.preventDefault();
         console.log("I am clicked..");
        // 
          try{
            await axios.post(`${API}/create-post`,{
              task : getInput.task,
              priority : getInput.priority
            });
            await fetchNotes();
            setGetInput({
           task: "",
           priority: "",
         });
         setIndex(null)
         navigate("/all-post");
          }
          catch(err){
            console.error("Error creatung notes : ",
              err.response?.data || err.message
            )
          }
         
       }
         const handleEdit = (index) => {
           console.log("Handle Edit : ", index);
           navigate("/update-post");

           setGetInput({
             ...getInput,
             task: Notes[index].task,
             priority: Notes[index].priority,
           });
           setIndex(index)
         };

         const handleDelete =async (index)=> {
          console.log("Ibdex : ",index)
          try{
            const deletes = await axios.delete(`${API}/delete-note/${index}`);
            await fetchNotes();
          }
          catch(err){
            console.log("Error : ",err.message);
            
          }
         }
  
  const values = {
    Notes,setNotes,getInput,setGetInput,handleSubmit,handleEdit,handleDelete
  }

  return (
    <NoteContext.Provider value={values}>
      {children}
    </NoteContext.Provider>
  )
}