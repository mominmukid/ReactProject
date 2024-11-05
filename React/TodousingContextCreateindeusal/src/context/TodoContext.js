import { createContext, useContext } from "react";


export const TodoContext=createContext({
   todos:
     {
      id:1,
      todo:"this is content",
      iscomplete:false
     },
   addTodo:(todo)=>{},
   deleteTodo:(id)=>{},
   updateTodo:(id,todo)=>{},
   toggalTodo:(id)=>{}

});

export const TodoProvider=TodoContext.Provider;

export const useTodo=()=>{
return useContext(TodoContext);
}