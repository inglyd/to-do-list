import React from 'react';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css'
import AddTask from './components/AddTask/AddTask';
import Tasks from './components/Tasks/Tasks';
import Title from './components/Title/Title';

const App = () => {
const [tasks, setTasks] = useState([
  {
    id: '1',
    title: 'Estudar programação',
    completed: false,
  },
  {
    id: '2',
    title: 'Varrer casa',
    completed: true,
  }
])
const handleTaskClick = (taskId) => {
  const newTasks = tasks.map (task => {
    if (task.id === taskId) return { ...task, completed: !task.completed}
    return task;
  })

setTasks(newTasks)

const handleTaskAddition = (taskTitle) => {
  const newTasks = [
    ...tasks,
    {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    },
  ]
  setTasks(newTasks)
}

  return (
    <>
    <div className='container'>
  <Title />
  <AddTask handleTaskAddition={handleTaskAddition}/>
  <Tasks tasks={tasks}  handleTaskClick={handleTaskClick}/>
 
</div>
    </>
  )
}
}
export default App