'use client'
import { useState } from 'react';

const Home = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">To-Do List</h1>

      <div className="flex mb-5">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-l-md"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button
          className="p-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>

      <ul className="list-none space-y-2 w-full max-w-md">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="bg-white p-3 rounded-md shadow-md flex justify-between items-center"
          >
            <span>{task}</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
