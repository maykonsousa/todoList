import React, { useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'
import { EmptyTask } from '../EmptyTask'
import { TaskItem } from '../TaskItem'
import styles from './styles.module.css'

export const TaskList = () => {
  const { tasks } = useContext(TasksContext)
  const hasTask = tasks.length > 0
  return (
    <div className={styles.Container}>
      {hasTask ? (
        <ul>
      
        {tasks.map(task => (
           <TaskItem key={task.id} task={task}/>
        ))}
         
       </ul>
      ):(<EmptyTask/>)}
    </div>
  )
}

