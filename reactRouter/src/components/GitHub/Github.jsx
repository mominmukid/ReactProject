import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
   const data=useLoaderData();
   // const [data,setdata]=useState([]);
   //  useEffect(()=>{
   //    fetch(`https://api.github.com/users/hiteshchoudhary`)
   //    .then(res=>res.json())
   //    .then(data=>{
   //       setdata(data)
   //    })
   //  }
      
   //  ,[])
  return (
    <div className=" flex justify-center items-center h-[300px] bg-slate-900 flex-col">
      <span className="text-4xl text-white "  >My follower teacher  followers:{data?.id}</span>
      <button className='bg-blue-500 mt-10 p-3 rounded-lg '>
         <a href="https://github.com/mominmukid" target='_blank'
           className="text-white mt-10 text-lg "
          >My GitHub Account </a>
      </button>
    </div>
  )
}

export const Gitinfo= async()=>{
   const res= await fetch('https://api.github.com/users/hiteshchoudhary');
   return res.json();
}