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
  // const [index,setIndex] = useState(null);
  const [index,setIndex] = useState(null);
  const [Notes,setNotes] = useState([]);
  console.log("current notes : ",Notes);
      const navigate = useNavigate();

  //fetch notes from mongodb
  // const API = "http://localhost:3000"
    const API = "https://note-backend-zeta.vercel.app";

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
        if(getInput.task === "" || getInput.priority === ""){
         return alert("Please fill all the fields")
        }
          try{
            await axios.post(`${API}/create-note`,{
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
         const handleEdit = async(index) => {
         
          try {
            const getNote = await Notes.find((note) => note._id === index)
            console.log("Get note hohoho : ",getNote);
            
            setGetInput({
              ...getInput,
              task : getNote.task,
              priority :getNote.priority
            })
            setIndex(index)
            navigate("/update-post")
          } catch (error) {
            console.log("Error getting notes : ",error.message);
            
          }
         

          //  setGetInput({
          //    ...getInput,
          //    task: Notes[index].task,
          //    priority: Notes[index].priority
          //  });
          //  setIndex(index)
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
  
         const handleUpdate =async(e)=> {
          e.preventDefault();
            if (!index) {
              console.error("No note ID selected for updating!");
              return;
            }
          try {
              console.log("Index number : hohoho", index);
              
              const updates = await axios.patch(`${API}/update-note/${index}`, {
                task: getInput.task,
                priority: getInput.priority,
              });

              await fetchNotes();
              setGetInput({
                task: "",
                priority: "",
              });
              setIndex(null);
              navigate("/all-post");
          
          } catch (error) {
            console.log("Error updating notes : ",error.message);
            
          }
         }
  const values = {
    Notes,setNotes,getInput,setGetInput,handleSubmit,handleEdit,handleDelete,handleUpdate
  }

  return (
    <NoteContext.Provider value={values}>
      {children}
    </NoteContext.Provider>
  )
}