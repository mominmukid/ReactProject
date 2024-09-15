import React, { useRef } from 'react'
import Card from './Card'



function Forground() {
const ref=useRef(null)

   const data = [
      { dec: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error', fileSize: '0.3mb', close: true, tag: { color: 'green', content: 'download', isopen: true } },

      { dec: 'kandf dldknf nd lakn  amet consectetur adipisicing elit. Error', fileSize: '0.3mb', close: true, tag: { color: 'blue', content: 'download', isopen: true } },

      { dec: ' lkasnd snd alksndl laksnd lksanm lnas isicing elit. Error', fileSize: '0.3mb', close: true, tag: { color: 'green', content: 'download', isopen: false } },
   ]
   return (
      <>
         <div ref={ref} className='fixed w-full h-full p-5  top-0 left-0 bg-red-900/500 z-[10] flex gap-7'>
           {data?.map((item)=>(
            <Card key={item.fileSize} item={item} refrence={ref} />
           ))}
         </div>
      </>
   )
}

export default Forground