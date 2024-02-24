import { useContext} from "react"
import UserContext from "../Context/UserContext"
import React from 'react'

function Profile() {
   const {user}=useContext(UserContext);
  if (!user) return <div>Please Login</div>
  return <div>Welcome Dear, {user.username}</div>
 
}

export default Profile