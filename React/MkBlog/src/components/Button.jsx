import React from 'react'

function Button({
   childern,
   type='button',
   bgcolor='bg-blue-600',
   textColor='text-white',
   className='',
   ...props


}) {
  return (
    <button className={`
    px-4 py2 rounded-lg ${className}  ${bgcolor}  ${textColor} 
    `}
    {...props}
    type={type}
    >
      {childern}
    </button>
  )
}

export default Button