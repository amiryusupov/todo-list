import { createSlice } from "@reduxjs/toolkit";
const localStore = JSON.parse(localStorage.getItem("todo"))
const initialState = {
     items: localStore ? localStore : []
}
const todoSlice = createSlice({
     name: "todo",
     initialState,
     reducers: {
          addTodo(state, action) {
               state.items.push(action.payload);
               localStorage.setItem("todo", JSON.stringify(state.items))
          },
          removeTodo(state, { payload }) {
               state.items = state.items.filter((item) => item.id !== payload);
               localStorage.setItem("todo", JSON.stringify(state.items))
          },
          toggleTodo(state, { payload }) {
               const todo = state.items.find((todo) => todo.id === payload);
               if (todo) {
                    todo.completed = !todo.completed;
               }
               localStorage.setItem("todo", JSON.stringify(state.items))
          },
          updateTodo: (state, {payload}) => {
               const { id, text } = payload;
               const todo = state.items.find((todo) => todo.id === id);
               if (todo) {
                 todo.todo = text;
               }
             },
     }

})
export const { addTodo, removeTodo, toggleTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer