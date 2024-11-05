import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({
   children,
   authentication=true,
}) {
   const navigate=useNavigate();
   const authStatus= useSelector(state=>state.auth.status)
   const [loding, setloder] = useState(true);

   useEffect(()=>{
      if(authentication && authStatus !== authentication){
         navigate('/login')
      }else if(!authentication && authStatus !== authentication){
         navigate('/');
      }
      setloder(false)
   },[authStatus,navigate,authentication])

  return loding ? <h1>Loding...</h1>:{children}
}

