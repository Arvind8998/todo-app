import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const TodoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
  },
});

export const { saveTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
