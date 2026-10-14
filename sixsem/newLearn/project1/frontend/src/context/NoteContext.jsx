import { createContext ,useState} from "react";

export const NoteContext = createContext();
console.log("Context component started");
export const NoteContextProvider = ({children}) => {
  console.log("Context rendered");
  console.log("PROVIDER INITIALIZED");
  const [getInput,setGetInput] = useState({
    task : "",
    priority : ""
  })
  const [Notes,setNotes] = useState([]);
  console.log("current notes : ",Notes);
  
  const values = {
    Notes,setNotes,getInput,setGetInput
  }

  return (
    <NoteContext.Provider value={values}>
      {children}
    </NoteContext.Provider>
  )
}