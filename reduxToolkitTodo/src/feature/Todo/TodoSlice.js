import { createSlice,nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState={
   todos:[{
      id:1,
      text:"Hello i am Mukid",
      complited:false,
   }],

}

export const todoSlice=createSlice({
  name:'todo',
  initialState,
  reducers:{
   addTodo:(state,action)=>{
     const todo={
      id:nanoid(),
      text:action.payload,
      complited:false,
      }
      state.todos.push(todo);
   },
   removeTodo:(state,action)=>{
      state.todos=state.todos.filter((item) => item.id !== action.payload);
   }, 
    setTodo:(state)=>{
      state.todos=useEffect(()=>{
       
			   JSON.parse(localStorage.getItem('todos'));
        localStorage.setItem('todos',JSON.stringify(state.todos));
      } ,[todos])
        },
       
        
   
}});

export const {addTodo,removeTodo,updateTodo,setTodo} = todoSlice.actions;
export default todoSlice.reducer;