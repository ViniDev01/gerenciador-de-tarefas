import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Title from "./components/Title";


import { useEffect, useState } from "react";
import { v4 } from "uuid";
function App() { 

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onClickTask(taskId) {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onSubmitTask(title, description) {
    const newTasks = {
      id: v4(),
      title,
      description,
      isCompleted: false
    };

    setTasks([...tasks, newTasks]);
  }
  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
      <Title>Gerenciador de Tarefas</Title>
      <AddTask onSubmitTask={onSubmitTask} />
      <Tasks tasks={tasks} onclickTask={onClickTask} onDeleteTask={onDeleteTask} />

      </div>
    </div>
  )
 }
export default App;