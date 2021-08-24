import React from 'react'
import './Task.css'

const Task = ({ task,  handleTaskClick }) => {
  return (
<>
<div className="task-container" 
 style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
<div className="task-title" onClick={() => handleTaskClick(task.id)}>
  {task.title}
</div>
</div>
{/* <div className='task-container'>
<h1 className='title'>{task.title}</h1>
</div> */}
</>
  )
}

export default Task;