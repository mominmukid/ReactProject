import conf from './conf/conf.js'
import {useDispatch} from  'react-redux';
import React,{ useEffect,useState } from 'react'
import authService from './appwrite/auth';
import {login,logout} from './store/authSlice'
import './App.css'
import { Header,Footer } from './components/index.js';
import { Outlet } from 'react-router-dom';

function App() {
  const[loding, setLoding] = useState(true);
  const dispatch=useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
          dispatch(login({userData}));
      }else{
        dispatch(logout());
      }

    })
    .finally(()=>setLoding(false))
  },[])
 
    return !loding ? (
      <div className='min-h-screen bg-gray-400 text-white  flex flex-wrap justify-between '>
        <div className='w-full block'>
        <Header/>
        <main>
          todo
         <Outlet/>
        </main>
        <Footer/>
        </div>
          
      </div>
    ):null

}

export default App
