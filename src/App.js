import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      Text: "Doctors Apointment",
      day: "Jul 12th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      Text: "Tailors Apointment",
      day: "Jul 12th at 5:30pm",
      reminder: true,
    },
    {
      id: 3,
      Text: "Band rehearsals",
      day: "Mar 22th at 12:30am",
      reminder: false,
    },
  ]);

  //delete Task
  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
