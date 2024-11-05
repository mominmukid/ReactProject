import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
   const data=useLoaderData();
   return (
      <>
         <div className='w-full min-h-72 flex justify-center items-center'>
            <div className='w-[20%] border h-72'
            >
               <img
                  src={data.avatar_url}
                  alt="Loding..."
                  className='object-scale-down h-full w-full'
               />
            </div>
            <div className='w-[80%] border h-72 flex justify-center items-center text-orange-700 text-3xl font-semibold'>
              <ul>
               <li> Github Followers:{data.followers}</li>
               <li> Public Repos:{data.public_repos}</li> 
              </ul>
               
            </div>
         </div>
      </>
   )
}

export default Github

export const   GitdataLodar= async()=>{
    const respnce=await fetch('https://api.github.com/users/mominmukid');
    return respnce.json();
}