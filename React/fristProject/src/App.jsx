
import React, { useState } from 'react'
import Card from './Card'
// import Products from './Products'

function App() {

  return (
    <>
    <div className='flex justify-evenly items-center w-[80%] bg-white min-h-52 gap-2 flex-wrap'>
     
      <Card value="This is a frist product" btntext="Click me"/>
      <Card value="This is a sec product" btntext="hit me"/>
      <Card value="This is a third product" btntext="push me"/>

      
     
      
    </div>


    </>
  )
}

export default App