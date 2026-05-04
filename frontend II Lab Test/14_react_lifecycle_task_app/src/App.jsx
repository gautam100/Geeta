import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskText: "",
      tasks: [],
      message: "Component is loading..."
    };
  }

  componentDidMount() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.setState({
      tasks: savedTasks,
      message: "Component mounted successfully. Tasks loaded from local storage."
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }
  }

  componentWillUnmount() {
    console.log("Task app component removed from screen.");
  }

  handleInputChange = (event) => {
    this.setState({ taskText: event.target.value });
  };

  addTask = (event) => {
    event.preventDefault();

    if (this.state.taskText.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: this.state.taskText,
      completed: false
    };

    this.setState({
      tasks: [...this.state.tasks, newTask],
      taskText: "",
      message: "New task added successfully."
    });
  };

  toggleTask = (id) => {
    const updatedTasks = this.state.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    this.setState({
      tasks: updatedTasks,
      message: "Task status updated."
    });
  };

  deleteTask = (id) => {
    const filteredTasks = this.state.tasks.filter((task) => task.id !== id);

    this.setState({
      tasks: filteredTasks,
      message: "Task deleted successfully."
    });
  };

  render() {
    return (
      <main className="app">
        <h1>Task App with Lifecycle Methods</h1>
        <p className="message">{this.state.message}</p>

        <form onSubmit={this.addTask} className="task-form">
          <input
            type="text"
            value={this.state.taskText}
            placeholder="Enter task"
            onChange={this.handleInputChange}
          />
          <button>Add Task</button>
        </form>

        {this.state.tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          this.state.tasks.map((task) => (
            <div className="task-card" key={task.id}>
              <span className={task.completed ? "completed" : ""}>
                {task.title}
              </span>
              <div>
                <button onClick={() => this.toggleTask(task.id)}>
                  {task.completed ? "Undo" : "Done"}
                </button>
                <button onClick={() => this.deleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </main>
    );
  }
}

export default App;
