import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"
function Card({ item,refrence }) {
   return (
      < motion.div drag dragConstraints={refrence}  whileDrag={{ scale: 1.1 }}  dragElastic={0.2}  dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className='w-[11rem] relative cursor-pointer h-[13.5rem] bg-slate-900/80 rounded-[1rem] overflow-hidden text-white'>
         <div className='w-fit absolute top-[10%] left-[10%] h-fit '>
            <FaFileAlt />
         </div>
         <div className=' w-fit h-fit mt-6 tracking-normal leading-tight  absolute top-[15%] left-[10%]'>
            {item.dec}
         </div>
         <div className=' absolute bottom-0  left-0   w-full flex-col'>

            <div className='w-full flex px-6  py-1 justify-between'>
               <h5 className='font-medium'>{item.fileSize}</h5>
               <span className='p-1.5 flex justify-center items-center rounded-full bg-gray-900/80'>
                  {item.close ? <IoCloseSharp color='white' /> : <LuDownload color='white' />}

               </span>

            </div>
            {
               item.tag.isopen && <div className={` ${item.tag.color === 'green' ? `bg-green-600`:'bg-blue-600'} font-semibold h-10 text-white w-full flex justify-center items-center`}>
                  {item.tag.content}
               </div>
            }

         </div>
      </motion.div>
   )
}

export default Card