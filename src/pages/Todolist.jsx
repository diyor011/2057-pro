import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!text.trim()) return;
    const newTodo = { id: Date.now(), title: text };
    setTodos([...todos, newTodo]);
    setText("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen w-full text-base-100">

    
  
      <div className="max-w-md mx-auto mt-14 p-6 bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 transition">
        <h2 className="text-2xl font-bold mb-4 text-center">Todo List</h2>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Yozing..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input input-bordered w-full bg-white/20 text-white placeholder-gray-300 border-white/20 focus:border-blue-400"
          />
          <button
            onClick={addTodo}
            className="btn btn-primary rounded-xl shadow-md"
          >
            Qo‘shish
          </button>
        </div>

        <ul className="mt-5">
          {todos.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center mb-3 p-3 rounded-lg bg-white/10 border border-white/10 shadow-md hover:bg-white/20 transition-all duration-200"
            >
              <span className="font-medium">{item.title}</span>
              <button
                onClick={() => deleteTodo(item.id)}
                className="btn btn-error btn-sm rounded-lg shadow-md"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
