import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const API_URL = "http://localhost:5000/api/todos";

// Use the environment variable
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api/todos";
console.log("API_URL", import.meta.env.VITE_API_URL);

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
    lastAddedId: null,
    status: "idle", // overall fetch status
    addStatus: "idle",
    toggleStatus: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchTodos
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // addTodo
      .addCase(addTodo.pending, (state) => {
        state.addStatus = "loading";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.addStatus = "succeeded";
        state.todos.push(action.payload);
        state.lastAddedId = action.payload._id;
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.addStatus = "failed";
        state.error = action.error.message;
      })

      // deleteTodo
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo._id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.error = action.error.message;
      })

      // toggleDone — see optimistic update below!
      .addCase(toggleDone.pending, (state, action) => {
        state.toggleStatus = "loading";
        // Optimistic update here (explained below)
        const id = action.meta.arg; // the id passed to the thunk
        const todo = state.todos.find((t) => t._id === id);
        if (todo) todo.isDone = !todo.isDone; // instantly toggle in UI
      })
      .addCase(toggleDone.fulfilled, (state, action) => {
        state.toggleStatus = "succeeded";
        const updated = action.payload;
        const index = state.todos.findIndex((todo) => todo._id === updated._id);
        if (index !== -1) state.todos[index] = updated;
      })
      .addCase(toggleDone.rejected, (state, action) => {
        state.toggleStatus = "failed";
        state.error = action.error.message;
        // You can also revert optimistic update here if you implemented it
      });
  },
});

export default todoSlice.reducer;
