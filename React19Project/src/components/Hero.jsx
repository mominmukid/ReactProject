import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate=useNavigate();
  return (
    <div className='w-full min-h-fit  bg-slate-900 text-white flex flex-col justify-start items-center mt-[7rem]  border-slate-700'>
     <div className='w-full h-fit flex flex-col md:flex-row  justify-center items-center'>
        <div className='w-[95%] md:w-[45%] h-[24rem] p-10 gap-10  flex flex-col justify-center items-center'>


         <h1 className='text-4xl font-bold'>Welcome to Nationopedia</h1>
         <p className='text-xl text-center'>Nationopedia is a website that provides information about countries around the world.</p>

           <button
           onClick={()=>navigate('/country')}
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2 shadow-md shadow-blue-500/50 mb-10'>Explore Now  <FaArrowRight/></button>

        </div>

        <div className='w-[95%] md:w-[55%] h-fit bg-blue-500 flex flex-col justify-center items-center rounded-lg overflow-hidden'>
         <img src={`./images/earth.jpeg`} alt="loading" className='  object-cover  w-full h-[28rem]  ' />
        </div>


     </div>





    </div>

  )
}

export default Hero