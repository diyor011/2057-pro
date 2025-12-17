import React, { useState, useEffect } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("todoList");
    if (saved) {
      setList(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  const addTask = () => {
    if (!task.trim()) return;

    setList([
      ...list,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);
    setTask("");
  };

  const toggleTask = (id) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTask = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen w-full flex justify-center pt-20 bg-base-100 text-base-content font-sans">
      <div className="w-[380px] p-6 bg-base-200 rounded-2xl shadow-xl border border-base-300">
        <h2 className="text-center text-xl font-bold mb-5">
          🌙 Dark Todo List
        </h2>

        {/* Input */}
        <div className="flex gap-2">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Введите задачу..."
            className="flex-1 px-4 py-3 rounded-xl bg-base-300 border border-base-300 outline-none focus:ring-2"
          />

          <button
            onClick={addTask}
            className="px-5 py-3 rounded-xl bg-base-100 font-bold hover:opacity-90 transition"
          >
            +
          </button>
        </div>

        {/* List */}
        <ul className="mt-5 space-y-3">
          {list.map((item) => (
            <li
              key={item.id}
              className={`flex justify-between items-center p-3 rounded-xl border transition
                ${item.completed
                  ? "bg-success/20 border-success text-success line-through"
                  : "bg-base-300 border-base-300"
                }`}
            >
              <span
                onClick={() => toggleTask(item.id)}
                className="cursor-pointer text-sm"
              >
                {item.text}
              </span>

              <button
                onClick={() => deleteTask(item.id)}
                className="px-3 py-1 rounded-lg bg-error text-error-content font-bold hover:opacity-90 transition"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        {list.length === 0 && (
          <p className="text-center mt-3 text-neutral-content opacity-70">
            Список пуст
          </p>
        )}
      </div>
    </div>
  );
}
