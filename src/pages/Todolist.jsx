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

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setList([...list, newTask]);
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
    <div
      style={{
        minHeight: "100vh",
     
        display: "flex",
        justifyContent: "center",
        paddingTop: "80px",
        fontFamily: "Arial",
        color: "white",
      }}
      className="w-full"
    >
      <div
        style={{
          width: "380px",
          padding: "25px",
          background: "#1e1e1e",
          borderRadius: "20px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          border: "1px solid #333",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#f2f2f2",
          }}
        >
          🌙 Dark Todo List
        </h2>


        <div style={{ display: "flex", gap: "10px" }}>
          <input
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
          />

          <button
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
          >
            +
          </button>
        </div>

        <ul style={{ marginTop: "20px", padding: 0, listStyle: "none" }}>
          {list.map((item) => (
            <li
              key={item.id}
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
            >
              <span
                onClick={() => toggleTask(item.id)}
                style={{
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                {item.text}
              </span>

              <button
                onClick={() => deleteTask(item.id)}
                style={{
                  background: "#ff4b4b",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "10px",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        {list.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "10px", color: "#aaa" }}>
            Список пуст 
          </p>
        )}
      </div>
    </div>
  );
}


