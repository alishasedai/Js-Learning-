import { createContext ,useState} from "react";

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
       const handleSubmit = (e) => {
         e.preventDefault();
         console.log("I am clicked..");
         if(index !== null){
          setNotes((old) => 
            old.map((val,i) => (index === i) ? getInput : val )
          )
         }
         else{
          setNotes((oldNotes) => [...oldNotes, getInput]);
         }
         setGetInput({
           task: "",
           priority: "",
         });
         setIndex(null)
         navigate("/all-post");
       };
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
  
  const values = {
    Notes,setNotes,getInput,setGetInput,handleSubmit,handleEdit
  }

  return (
    <NoteContext.Provider value={values}>
      {children}
    </NoteContext.Provider>
  )
}