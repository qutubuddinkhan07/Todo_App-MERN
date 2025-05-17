import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const addStatus = useSelector((state) => state.todos.addStatus);

  const submitHandler = async (evt) => {
    evt.preventDefault();
    if (task.trim() === "") return;

    try {
      await dispatch(addTodo(task)).unwrap();
      setTask("");
    } catch (error) {
      console.error("Failed to add Todo:", error);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col sm:flex-row gap-2 mb-2"
    >
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="px-2 py-3 sm:py-2 rounded-md border boder-gray-300 w-full focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className={`bg-blue-500 text-white py-2 rounded-md transition sm:w-auto w-full ${
          addStatus === "loading"
            ? "opacity-70 cursor-not-allowed"
            : "hover:bg-blue-600"
        }`}
        disabled={addStatus === "loading"}
      >
        Add Task
      </button>
    </form>
  );
}
