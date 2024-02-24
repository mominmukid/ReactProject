import { useContext, useState } from "react"
import UserContext from "../Context/UserContext"
import React from 'react'

export default function Login() {
   const  [username, setUsername] = useState("");
   const [Password , SetPassword] = useState("");
const {setUser}=useContext(UserContext);

    const handleSubmit =(e)=>{
      e.preventDefault();
      setUser({username,Password});
    }
  return (
   <>
   <h1>Login</h1>
   <input type="text"
   value={username}
   onChange={(e)=>setUsername(e.target.value)}
   placeholder="Username" />
   <input type="password"
   value={Password}
   onChange={(e)=>SetPassword(e.target.value)}
   placeholder="Password" />
   <button onClick={handleSubmit}>Login</button>
   </>
  )
}
