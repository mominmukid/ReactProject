import { useContext, useState } from "react"
import UserContext from "../Context/UserContext"
import React from 'react'
import Profile from "./Profile";
import PourpouseOfProject from "./PourpouseOfProject";

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
   <div className="w-full h-screen flex bg-slate-900 justify-center flex-col items-center">
        <PourpouseOfProject/>

    <div className="w-[30%] min-h-56  flex justify-evenly items-center flex-col bg-[#bde0fe]  rounded-xl">
   <h1 className="text-4xl  top-0">Login</h1>
   <div>

    {/* input box for username  */}

   <label htmlFor="usrename" className="font-bold mr-2">Username:</label>
   <input type="text"
   value={username}
   onChange={(e)=>setUsername(e.target.value)}
   placeholder="Username"
   className="w-56 h-8 outline-none border-2 border-black rounded-lg pl-3"
   />
    </div>
  {/* input box for  Password  */}
    <div>
   <label htmlFor="password" className="font-bold mr-2">Password:</label>
   <input type="password"
   value={Password}
   onChange={(e)=>SetPassword(e.target.value)}
   placeholder="Password"
   className="w-56 h-8 outline-none border-2 border-black rounded-lg pl-3"
   />
    </div>

   <button onClick={handleSubmit}
    className="bg-blue-700 p-3 w-24 rounded-lg text-white font-extrabold hover:scale-105 hover:bg-blue-900"
   >Login</button>

   <Profile/>
   </div>
   </div>
   </>
  )
}
