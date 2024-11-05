import { createContext, useContext } from "react";


export const TodoContext =createContext({
   todos:{
      id:1,
      todo:'msg',
      iscompleted:false
   },
   addTodo:(todo)=>{},
   updateTodo:(id,todo)=>{},
   deleteTodo:(id)=>{},
   toglTodo:(id)=>{}
});

export const TodoContextProvider=TodoContext.Provider;

export const useTodo=()=>{
   return useContext(TodoContext);
}
