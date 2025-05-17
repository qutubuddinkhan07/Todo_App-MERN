import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/todos";

// Async Thunks
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

export const addTodo = createAsyncThunk("todos/addTodo", async (task) => {
  const res = await axios.post(API_URL, { task });
  return res.data;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

export const toggleDone = createAsyncThunk("todos/toggleDone", async (id) => {
  const res = await axios.patch(`${API_URL}/${id}`);
  return res.data;
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo._id !== action.payload);
      })
      .addCase(toggleDone.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.todos.findIndex((todo) => todo._id === updated._id);
        if (index !== -1) state.todos[index] = updated;
      });
  },
});

export default todoSlice.reducer;
