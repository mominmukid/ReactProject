import React, { useEffect,useState } from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router'

export default function AuthLayout({
   children,
   authentication = true
}) {
   const [loder, setloder] = useState(true);
  const navigate=useNavigate();
  const authStatus=useSelector(state=>state.auth.status);

  useEffect(()=>{
   if( authentication && authStatus !== authentication){
      navigate('/login')
   }else if(!authentication && authStatus !== authentication){
      navigate('/')
   }
   setloder(false)
  },[navigate,authStatus,authentication])

  return loder ?(<div className='text-3xl font-bold'>Loding...</div>):<>{children}</>
}
