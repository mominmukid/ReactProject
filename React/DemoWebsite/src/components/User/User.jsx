import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
   const {id}=useParams();
  return (
    <div className='w-full flex justify-center items-center text-2xl text-red-500 font-semibold'>User:{id}</div>
  )
}

export default User