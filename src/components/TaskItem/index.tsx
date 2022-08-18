import { Trash } from 'phosphor-react'
import React, { useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'
import styles from './styles.module.css'

interface Task {
  id: string,
  text: string,
  isDone: boolean,
}

interface TaskItemProps {
  task: Task,
}

export const TaskItem = ({task}:TaskItemProps) => {
  const {id, text, isDone} = task
  const {onDeleteTask, onFinishTask} = useContext(TasksContext)
  return (
    <li className={isDone?styles.Done:''}>
       <div className={styles.Checkbox}> 
       <input type="checkbox" checked={isDone} id={id} onClick={()=>onFinishTask(id)}/>
       <label htmlFor={id} className={styles.Text}>{text}</label>
       </div>
        
        
        <button type="button" onClick={()=>onDeleteTask(id)}>
        <Trash size={24}/>
        </button>
      </li>
  )
}

