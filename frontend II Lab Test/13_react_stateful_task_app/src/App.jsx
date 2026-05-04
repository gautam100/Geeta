import { useState } from "react";

function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React components", completed: false },
    { id: 2, title: "Practice useState hook", completed: true }
  ]);

  const addTask = (event) => {
    event.preventDefault();

    if (taskText.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: taskText,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <main className="app">
      <h1>Stateful Task Management App</h1>

      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          value={taskText}
          placeholder="Enter new task"
          onChange={(event) => setTaskText(event.target.value)}
        />
        <button>Add Task</button>
      </form>

      <section>
        {tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <span className={task.completed ? "completed" : ""}>
              {task.title}
            </span>
            <div>
              <button onClick={() => toggleTask(task.id)}>
                {task.completed ? "Undo" : "Done"}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
