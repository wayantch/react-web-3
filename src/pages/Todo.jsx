import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import Form from "../components/Form";

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center ">
        <div className="mt-10 w-80">
          {/* Width set to 300px */}
          <Form addTask={addTask} />
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Todo List</h2>
            <ul className="mb-10">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="bg-gray-200 p-3 rounded mb-3 text-center">
                  {task}
                </li>
              ))}
            </ul>
            <Link
              to="/shopping_cart"
              className="flex justify-center items-center text-blue-500 hover:text-blue-700 px-4 py-2 bg-transparent border border-blue-500 rounded"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
