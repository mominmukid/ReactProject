import { forwardRef, useId } from "react"
import React from 'react'

function Select({
   options = [],
   label,
   className = '',
   ...props
}, ref) {
   const id = useId();
   return (
      <div>
         {label && <label
            htmlFor={id}
         >
            {label}
         </label>}

         <select id={id}
            className={`${className}px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}
            {...props}
            ref={ref}>
            {options?.map((option) => (
               <option key={option} id={id} value={option}>
                  {option}
               </option>
            ))}
         </select>

      </div>
   )
}

export default forwardRef(Select)