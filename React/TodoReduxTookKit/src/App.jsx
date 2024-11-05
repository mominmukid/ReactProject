import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
   <>
   <div className='w-[50%] min-h-60 rounded-lg p-2 flex justify-center flex-col bg-[#6A9C89] items-center'>
   <AddTodo/>
   <Todos/>
   </div>
   </>
  )
}

export default App