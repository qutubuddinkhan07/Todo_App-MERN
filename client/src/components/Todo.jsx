import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleDone } from "../features/todoSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import empty from "../assets/empty.gif";

export default function Todo() {
  const todos = useSelector((state) => state.todos.todos); //updated to match the new state shape
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    try {
      await dispatch(deleteTodo(id)).unwrap();
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  const toggleMark = async (id) => {
    try {
      await dispatch(toggleDone(id)).unwrap();
    } catch (error) {
      console.error("Failed to toggle todo:", error);
    }
  };

  return (
    <div className="bg-white max-h-[19rem] h-[24rem] sm:h-[19rem] rounded p-3 overflow-y-auto">
      {todos.length === 0 ? (
        <div className="text-center text-gray-500 flex flex-col items-center">
          <img src={empty} alt="No Tasks" className="w-32 h-32 mb-2 -ml-8" />
          <p className="text-lg font-semibold">Nothing Here!</p>
        </div>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo._id}
              className="flex justify-between items-start bg-gray-100 p-3 rounded shadow-sm"
            >
              <div className="flex flex-1 gap-2 min-w-0">
                <div className="flex items-start pt-1">
                  <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => toggleMark(todo._id)}
                    className="h-5 w-5 text-blue-600 shrink-0"
                  />
                </div>
                <div className="flex flex-col max-h-[10rem] pr-1 w-full leading-relaxed capitalize ">
                  <div className="overflow-y-auto">
                  <span
                    className={`break-words ${
                      todo.isDone
                        ? "line-through text-gray-500"
                        : "text-gray-800"
                    }`}
                  >
                    {todo.task}
                  </span>
                  </div>
                    <span className="text-sm text-gray-500">{new Date(todo.createdAt).toLocaleString()}</span>
                </div>
              </div>
              <div className="flex-shrink-0 self-start">
                <button
                  onClick={() => deleteHandler(todo._id)}
                  className="text-red-500 hover:text-red-600 transition"
                >
                  <DeleteIcon fontSize="medium" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
