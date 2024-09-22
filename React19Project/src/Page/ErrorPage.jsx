import React from 'react'
import { useRouteError } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


function ErrorPage() {
   const error = useRouteError();
   console.log(error);

  return (
    <div
    className= 'bg-slate-800 text-white flex flex-col items-center justify-center h-screen'>
        <h1 className='text-4xl font-bold'>Oops!</h1>
        <h1 className='text-2xl font-bold'>{error.status}</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            <i>{error.data || error.message}</i>
        </p>
        <NavLink to='/'>   <button className='bg-slate-500 mt-4 text-white px-4 py-2 rounded-md'>Go Home</button></NavLink>
    </div>
  )


}


export default ErrorPage