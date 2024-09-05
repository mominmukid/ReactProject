import { useState } from 'react'
import './App.css'


function App() {
  let [color, setColor] = useState("rgba(0,0,0,0.9)");
  return (
    <>
      <div  className=' flex justify-center w-[1349px] h-[610px]' style={{backgroundColor:color}}>
      
      <div className=' flex flex-wrap justify-evenly bg-white items-center absolute bottom-10 rounded-3xl  w-[60%] h-[50px]'>
         <button onClick={()=>setColor("orange")}   className='hover:scale-105 outline-none bg-orange-500'>orange</button>
         <button onClick={()=>setColor("black")}  className='hover:scale-105 outline-none bg-black'>black</button>
         <button onClick={()=>setColor("green")}  className='hover:scale-105 outline-none bg-green-500'> green </button>
         <button onClick={()=>setColor("blue")}  className='hover:scale-105 outline-none bg-blue-500'> blue</button>
         <button onClick={()=>setColor("yellow")}   className='hover:scale-105 outline-none bg-yellow-500'> yellow</button>
         <button onClick={()=>setColor("red")}  classassName='hover:scale-105 outline-none  ' style={{backgroundColor:"red"}}> red</button>
         <button onClick={()=>setColor("pink")}  className='hover:scale-105 outline-none bg-pink-500'> pink</button>
      </div>
    </div>
    </>
  )
}

export default App
