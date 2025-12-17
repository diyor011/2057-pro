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
<<<<<<< HEAD
          bg-base-100 text-base-content
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Введите задачу..."
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #444",
              background: "#2a2a2a",
              color: "white",
              outline: "none",
            }}
=======
            type="text"
            placeholder="Yozing..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input input-bordered w-full bg-white/20 text-white placeholder-gray-300 border-white/20 focus:border-blue-400"
>>>>>>> 0e4e2f0d57e4a72218eec37847b98994f3159a46
          />
          <button
<<<<<<< HEAD
            onClick={addTask}
            style={{
              
              padding: "12px 20px",
              background: "#5a5cff",
              border: "none",
              borderRadius: "10px",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.2s",
            }}
=======
            onClick={addTodo}
            className="btn btn-primary rounded-xl shadow-md"
>>>>>>> 0e4e2f0d57e4a72218eec37847b98994f3159a46
          >
            Qo‘shish
          </button>
        </div>

        <ul className="mt-5">
          {todos.map((item) => (
            <li
              key={item.id}
<<<<<<< HEAD
              style={{
                
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: item.completed ? "#113311" : "#2b2b2b",
                padding: "12px",
                borderRadius: "12px",
                marginBottom: "10px",
                textDecoration: item.completed ? "line-through" : "none",
                color: item.completed ? "#6dff6d" : "#eee",
                border: "1px solid #333",
                transition: "0.3s",
              }}
=======
              className="flex justify-between items-center mb-3 p-3 rounded-lg bg-white/10 border border-white/10 shadow-md hover:bg-white/20 transition-all duration-200"
>>>>>>> 0e4e2f0d57e4a72218eec37847b98994f3159a46
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
<<<<<<< HEAD

        {list.length === 0 && (
          <p className="bg-base-100 text-base-content" style={{ textAlign: "center", marginTop: "10px", color: "#aaa" }}>
            Список пуст 
          </p>
        )}
=======
>>>>>>> 0e4e2f0d57e4a72218eec37847b98994f3159a46
      </div>
    </div>
  );
}
