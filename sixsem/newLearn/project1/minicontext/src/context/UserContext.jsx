import {createContext,useState} from "react";

export const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const [name,setName] = useState("Alisha");
    const [password,setPassword] = useState("12345")
    
    const values = {
        name,password,setName
    }
    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;