import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
const {id}=useParams()
  return (
    <div className="text-center font-bold h-16 flex items-center justify-center text-3xl text-red-600">User:{id}</div>
  )
}

export default User