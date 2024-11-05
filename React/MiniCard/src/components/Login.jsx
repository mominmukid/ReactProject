import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import userContext from '../context/UserContext';
import PopurposeofObject from './PopurposeofObject';
import Profile from './Profile';



function Login() {
   const [username, setusername] = useState('');
   const [password, setpassword] = useState('');

   const {setUser} = useContext(userContext);

   const handelSubmit = (e) => {
      e.preventDefault();
      setUser({username,password});
   }
   return (
      <>
   <div className="w-full h-screen flex bg-slate-700 justify-center flex-col items-center">

    <div className="w-[30%] min-h-56  flex justify-evenly items-center flex-col bg-[#bde0fe]  rounded-xl">
   <h1 className="text-4xl  top-0">Login</h1>
   <div>

    {/* input box for username  */}

   <label htmlFor="usrename" className="font-bold mr-2">Username:</label>
   <input type="text"
   value={username}
   onChange={(e)=>setusername(e.target.value)}
   placeholder="Username"
   className="w-56 h-8 outline-none border-2 border-black rounded-lg pl-3"
   />
    </div>
  {/* input box for  Password  */}
    <div>
   <label htmlFor="password" className="font-bold mr-2">Password:</label>
   <input type="password"
   value={password}
   onChange={(e)=>setpassword(e.target.value)}
   placeholder="Password"
   className="w-56 h-8 outline-none border-2 border-black rounded-lg pl-3"
   />
    </div>

   <button onClick={handelSubmit}
    className="bg-blue-700 p-3 w-24 rounded-lg text-white font-extrabold hover:scale-105 hover:bg-blue-900"
   >Login</button>

  <Profile/>
   </div>
   </div>
   </>
   )
}

export default Login 