import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaThList } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
function Header() {
   const navitem = [
      {
         name: 'Home',
         link: '/'
      },
      {
         name: 'About',
         link: '/about'
      },
      {
         name: 'Contact',
         link: '/contact'
      },
      {
         name: 'Country',
         link: '/country'
      },
   ]

   const [cancle, setcancle] = useState(true)
   const handelcancle = () => {
      console.log('cancle');
      setcancle(true)
   }
   const handelopen = () => {
      console.log('open');
      setcancle(false)
   }




   return (
      <header className='w-full h-full sticky top-0 left-0 z-50'>
         <div className='  flex justify-between bg-slate-700 text-white items-center shadow-md shadow-slate-600 px-3 cursor-pointer md:px-10 py-4 fixed w-full top-0 left-0 z-50 relative'>
            <h1 className='text-2xl font-bold'>Nationopedia</h1>
            <nav>

               <div
                  className='md:hidden p-2 text-xl bcursor-pointer'
                  onClick={handelopen}>
                  <FaThList />
               </div>

               <ul className=' hidden  md:block md:flex gap-10'>

                  {navitem.map((item) => (
                     <li key={item.name}

                        className='hover:text-slate-200 text-ellipsis text-[1.12rem]  '>
                        <NavLink to={item.link}

                           className={({ isActive }) => isActive ? 'text-orange-500' : 'text-slate-200'}>{item.name} </NavLink>
                     </li>


                  ))}
               </ul>
            </nav>
         </div>


         <div className={`${cancle ? 'hidden' : 'block'}  w-[70%] h-[20rem] absolute top-0 right-0 z-50 bg-slate-800`}>


            <ul className=' flex flex-col gap-10'>
               <div className='flex flex-col gap-5 p-10'>
                  {navitem.map((item) => (
                     <li key={item.name}
                     onClick={handelcancle}
                     className='hover:text-slate-200 text-ellipsis text-[1.12rem]  '>
                       
                        <NavLink to={item.link} className={({ isActive }) => isActive ? 'text-orange-500' : 'text-slate-200'}>{item.name} </NavLink>
                     </li>
                  ))}
                  <div
                     onClick={handelcancle}
                     className='absolute top-5 right-7 p-2 bg-white rounded-full cursor-pointer'><AiOutlineClose /></div>
               </div>


            </ul>


         </div>

      </header>


   )
}

export default Header