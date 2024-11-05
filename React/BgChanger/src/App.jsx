
import React from 'react'
import { useState } from 'react'
import Button from './Button'


function App() {
  const [color, setcolor] = useState('black')
  return (
    <>
      <div className='w-full h-screen relative flex justify-center items-center'
        style={{ backgroundColor: color }}
      >
        <div className='w-auto gap-10 h-16  absolute bottom-[10%]  bg-white rounded-full shadow-2xl flex justify-evenly items-center p-5'>

          <button className='p-2 rounded-full shadow-2xl' style={{ backgroundColor: 'red' }} onClick={() => { setcolor('red') }}>
            red
          </button>
          <button className='p-2 rounded-full shadow-2xl' style={{ backgroundColor: 'green' }} onClick={() => { setcolor('green') }}>
            green
          </button>
          <button className='p-2 rounded-full shadow-2xl' style={{ backgroundColor: 'blue' }} onClick={() => { setcolor('blue') }}>
            blue
          </button>
          <button className='p-2 rounded-full shadow-2xl' style={{ backgroundColor: 'pink' }} onClick={() => { setcolor('pink') }}>
            pink
          </button>
          <button className='p-2 rounded-full shadow-2xl' style={{ backgroundColor: 'purple' }} onClick={() => { setcolor('purple') }}>
            purple
          </button>
          <button className='p-2 rounded-full shadow-2xl' style={{ backgroundColor: 'orange' }} onClick={() => { setcolor('orange') }}>
            orange
          </button>

        </div>
      </div>
    </>
  )
}

export default App