import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const tasks = [
    { id: 1, title: "Complete HTML practical", status: "Pending" },
    { id: 2, title: "Practice Bootstrap components", status: "In Progress" },
    { id: 3, title: "Submit React assignment", status: "Completed" }
  ];

  return (
    <div className="app">
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
