import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function ContactComp() {
   const handleSubmit=(fromData)=>{
     const fromInputData=Object.fromEntries(fromData.entries());
     console.log(fromInputData);
   }
  return (
    <div className='bg-gradient-to-r bg-zinc-900 w-full h-screen flex flex-col justify-center items-center mt-0 md'
    >
      <h1 className='text-4xl font-bold text-white'>Contact Us</h1>


      <form action={handleSubmit} className='w-[95%] md:w-[32%]  h-fit flex flex-col justify-center items-center gap-5 p-2 md:p-5 rounded-lg text-gray-300 bg-slate-800 py-10'>

         <input type="text" placeholder='Enter Your Name' name='name' className='w-[100%] h-10  rounded-md pl-2 bg-slate-900 border border-gray-500' />





            <input type="email" placeholder='Enter Your Email' name='email' className='w-[100%] h-10  rounded-md pl-2 bg-slate-900 border border-gray-500' />

        <textarea placeholder='Enter Your Message' name='message' className='w-[100%] h-24  rounded-md pl-2 bg-slate-900 border border-gray-500'    />


         <button type='submit' className='w-[100%] h-10  rounded-lg  border border-gray-500 flex justify-start gap-2 items-center text-start px-4 bg-slate-700 font-bold text-white'>Send  <FaArrowRight/></button>


      </form>



    </div>

  )
}

export default ContactComp