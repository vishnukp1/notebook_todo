import React, { useState } from "react";

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const addTask = () => {
    if (task.trim() !== "") {
      if (editingIndex !== null) {
      
        const updatedTasks = [...tasks];
        updatedTasks[editingIndex] = task;
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
       
        setTasks([...tasks, task]);
      }
      setTask("");
    }
  };

  const editTask = (index: number) => {
    setTask(tasks[index]);
    setEditingIndex(index);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setEditingIndex(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          To-Do List
        </h1>
        <div className="flex items-center mb-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-1 px-4 py-2 border rounded-l-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTask}
            className={`${
              editingIndex !== null ? "bg-yellow-500" : "bg-blue-500"
            } text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition`}
          >
            {editingIndex !== null ? "Update" : "Add"}
          </button>
        </div>
        <ul className="space-y-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 rounded-md p-4 shadow-sm"
            >
              <span className="text-gray-700">{task}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => editTask(index)}
                  className="text-yellow-500 hover:text-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  className="text-red-500 hover:text-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
