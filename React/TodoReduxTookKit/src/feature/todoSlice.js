import { createSlice, nanoid } from "@reduxjs/toolkit";

const InitaialState = {
  todos: [ { id: 1,text: "msg" }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: InitaialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      console.log("reach here")
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export const todoreducer = todoSlice.reducer;
