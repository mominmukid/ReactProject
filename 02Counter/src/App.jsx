import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
const [count,setCounter]=useState(0);

  
  const des=()=>{
    if(count>0){
      setCounter(count-1);
    }
  }
  const inc=()=>{
   if(count<20){
    setCounter(prvCont=> prvCont+1);
    setCounter(prvCont=> prvCont+1);
    setCounter(prvCont=> prvCont+1);
    setCounter(prvCont=> prvCont+1);
    
    
   }
   
   
  }
  return (
    <>
      <h1>mukid momin</h1>
      <h3>counter value:{count}</h3>
      <button onClick={inc}>add value :{count} </button> 
      <br />
      <button onClick={des}>remove value :{count} </button>
      <p>footer {count} </p>
    
    </>
  )
}

export default App
