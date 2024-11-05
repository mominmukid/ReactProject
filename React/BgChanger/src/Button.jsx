import React from 'react'

function Button({data,color}) {
  const ChangeColor=()=>{
    
  }

  return (
   <button className='p-2 rounded-md' style={{backgroundColor:data}} onClick={ChangeColor}>
      {data} 
   </button>
  )
}

export default Button