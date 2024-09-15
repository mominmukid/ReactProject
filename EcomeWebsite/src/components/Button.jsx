import React from 'react'

function Button({
   children,
   type = 'button',
   content = 'button',
   className = '',
   ...props
}) {
   return (

      <button
         type={type}
         className={`rounded-md  bg-black px-6 py-2 font-semibold text-white shadow-xl hover:bg-green/100 focus-visible:outline focus-visible:outline-2 
              focus-visible:outline-offset-2  text-lg font-boldfocus-visible:outline-black ${className}`}
         {...props} >
         {content}
      </button>
   )
}

export default Button