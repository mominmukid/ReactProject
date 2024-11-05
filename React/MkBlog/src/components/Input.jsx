import { useId } from "react"
import React from 'react'


function Input({
   label,
   type = 'text',
   className = '',
   ...props
}, ref) {
   const id = useId();
   <div className="w-full">
      {label && <label className="inline-block pl-1 mb-1"
         htmlFor={id}>
         {label}
      </label>}
      <input type={type}
         className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full${className}`} {...props} ref={ref} id={id} />
   </div>
}

export default React.forwardRef(Input)