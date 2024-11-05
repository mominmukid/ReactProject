import React from 'react'
import authService from './appwrite/auth'
import { Outlet } from 'react-router'
import { useState,useEffect } from 'react'
import {login,logout} from './store/authSlice'
import { useDispatch } from 'react-redux'
import { Header,Footer } from './components/index'

function App() {
 const [loder, setloder] = useState(true)
 const dispatch = useDispatch();

 useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login())
    }else{
      dispatch(logout())
    }
  }).
  finally (()=>{
    setloder(false)
  })
  
 },[])
  
  return !loder ?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header />
      <main>
       <Outlet />
      </main>
      <Footer />
    </div>
  </div>
  ):null
}

export default App