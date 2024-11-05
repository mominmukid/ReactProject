import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoForm() {
  const [todo,settodo]=useState('');
const{addTodo}=  useTodo();

const add=(e)=>{
  e.preventDefault();
  if(!todo)return;
  addTodo({todo,iscomplete:false});
  settodo('');
}


  return (
    <>
     <form onSubmit={add} className='w-full h-10 bg '>
        <div className='w-full h-full flex  ' >
          <input type="text" className='w-[85%] h-full px-10 outline-none rounded-l-xl text-xl' 
          value={todo}
          onChange={(e)=>settodo(e.target.value)} 
          />
          <button className='w-[15%] h-full outline-none border-none  rounded-r-xl bg-[#399918] 
          font-bold text-white hover:bg-[#00712D]
          '
          onClick={add}>
            Add
          </button>
        </div>
        </form>
    </>
  )
}

export default TodoForm