import React from 'react'
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import logout from '../../store/authSlice'
function LogoutBtn() {
   const dispach=useDispatch();

   const handleLogout =() => {
          authService.logout().then(
            ()=>{
               dispach(logout());
            }
          )   
      }

  return (
   <button
   className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
   onClick={handleLogout}
   >Logout</button>
  )
}

export default LogoutBtn