import { useState } from "react";



export const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor App',
            day: 'Monday',
            reminder: true,
        }
    ])
  return (
    <div>
        {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </div>
  )
}
