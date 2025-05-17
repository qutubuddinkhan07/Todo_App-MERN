import AddForm from "./components/AddForm";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import { store } from "./app/store.js";
import { fetchTodos } from "./features/todoSlice.js";
import Todo from "./components/Todo.jsx";

function AppContent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[90%] max-w-md h-auto sm:h-[30rem] flex flex-col bg-purple-500 p-5 rounded-lg">
        <h2 className="text-center text-xl sm:text-2xl font-bold">Todo List App</h2>
        <div className="mt-3">
          <AddForm />
          <Todo />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </>
  );
}

export default App;
