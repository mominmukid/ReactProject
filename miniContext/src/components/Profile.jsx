import { useContext} from "react"
import UserContext from "../Context/UserContext"
import React from 'react'

function Profile() {
   const {user}=useContext(UserContext);
  if (!user) return <div>Please Login</div>
  return <div className="text-lg font-semibold"
  >Welcome Dear, {user.username}</div>
 
}

export default Profile