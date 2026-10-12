import {  createContext ,useState} from "react";
//create the context object
export const NoteContext = createContext();

export const NoteContextProvider = ({
    children
}) => {
    const [post,setPost] =useState([]);
      const [getPost,setGetPost] =useState([]);
      const [updatePost,setUpdatePost] =useState([]);
      const [caption,setCaption] = useState([]);
      const valuess = {
        post,getPost,setCaption,caption,setGetPost,updatePost,setPost,setUpdatePost
      }
      return (
        <NoteContext.Provider 
        value={valuess}>
            {children}
        </NoteContext.Provider>
      )
} 

export default NoteContextProvider;