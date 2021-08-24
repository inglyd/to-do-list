import React from 'react';
import { useState } from 'react';
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

const handleTaskAddition = (taskTitle) => {
  const newTasks = [
    ...tasks,
    {
      title: taskTitle,
      id: Math.random(10),
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
  <Tasks tasks={tasks} />
 
</div>
    </>
  )
}

export default App;