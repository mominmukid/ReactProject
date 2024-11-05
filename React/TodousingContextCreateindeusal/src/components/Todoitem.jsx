import React, { useState } from 'react'
import { useTodo } from '../context';

function Todoitem({ todo }) {
  const [iseditable, setiseditable] = useState(false);
  const [todomsg, setTodomsg] = useState(todo.todo);

  const { toggalTodo, deleteTodo, updateTodo } = useTodo();

  const editTodo = () => {
    if (todomsg) {
      updateTodo(todo.id, { ...todo, todo: todomsg });
      setiseditable(false);
    }
  }


  return (
    <>
      <div className={`todoitem w-[33rem] h-11 rounded-md transition  duretion-600  ease flex justify-center items-center gap-2
    ${todo.iscomplete ? 'bg-[rgb(235,133,145)]':'bg-[#87fb96]'}
      `}>
        <div className='w-[10%] flex items-center justify-center'>
          <input type="checkbox"
            checked={todo.iscomplete}
            onChange={() => toggalTodo(todo.id)}
          />
        </div>

        <input type="text" className={`w-[70%] h-8 outline-none p-2 bg-transparent ${iseditable ? "border-black" : ''}
             ${todo.iscomplete ? 'line-through' : ''}
             `}
          value={todomsg}
          onChange={(e) => setTodomsg(e.target.value)}
          readOnly={!iseditable} />

        <div className='w-[10%] flex items-center justify-center'>
          <button
            onClick={() => {
              if (todo.iscomplete) return;
              if (iseditable) {
                editTodo()
              } else {
                setiseditable(true);
              }
            }}
            disabled={todo.iscompleted}
          >
            {iseditable ? '📁' : '🖊'}
          </button>
        </div>


        <div className='w-[10%] flex items-center justify-center'>
          <button
            onClick={() => deleteTodo(todo.id)}
          >❌</button>
        </div>



      </div>
    </>
  )

}

export default Todoitem








