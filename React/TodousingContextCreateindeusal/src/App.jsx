
import React, { useEffect, useState } from 'react'
import { TodoForm, Todoitem } from './components'
import { TodoProvider } from './context'

function App() {
  const[todos,setTodos]=useState([]);

  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((item)=>item.id===id?todo:item))
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((item)=>item.id!==id))
  }

  const toggalTodo=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo,iscomplete:!prevTodo.iscomplete}:prevTodo))
  }

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem('todos'));
    if (todos && todos.length > 0) {
       setTodos(todos)
    }
 }, [])

 useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos])

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggalTodo}}>
    <div className='w-full min-h-screen bg-[#3C5B6F] flex justify-center items-center flex-col'>
      <div className='text-white font-bold text-3xl my-2'>This is Do in Today</div>
      <div className='card w-[40%] min-h-[70%] bg-[#948979] rounded-xl flex flex-col gap-3 p-3 '>
       <TodoForm/>
        <div className='w-full min-h-20  flex flex-col   items-center gap-2'> 
          {  
          todos.map((todo)=>(<div key={todo.id}>
            <Todoitem todo={todo}/>
          </div>)
          
            
          )}
         

        </div>

      </div>
    </div>
      </TodoProvider>
  )
}

export default App