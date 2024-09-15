import React from 'react'

function Background() {
  return (
   <>
    <div className='w-full h-screen reletive bg-slate-800'>
      <div className='absolute top-[7%] left-0 w-full bg-pink flex justify-center items-center text-gray-300'>Document</div>
      <div className='absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%]  text-9xl text-slate-900 tracking-tighter'> Docs.</div>
    </div>
    </>
  )
}

export default Background