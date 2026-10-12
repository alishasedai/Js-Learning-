    import {React ,useContext} from 'react'

    import { UserContext } from '../context/UserContext'
    const Home = () => {
        const {name,password,setName} = useContext(UserContext);
        console.log("Name : ",name);
        console.log("Password",password);
        
    return (
        <div>
        <p>name : {name}</p>
        <p>This is the password : {password}</p>
        <button onClick={() => setName("Alijiii")}>Change Name </button>
        </div>
    )
    }

    export default Home
