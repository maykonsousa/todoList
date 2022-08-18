import React, { FormEvent, useContext } from 'react'
import styles from './styles.module.css'
import {PlusCircle} from 'phosphor-react'
import { EmptyTask } from '../EmptyTask'
import { TaskList } from '../TaskList'
import { TasksContext } from '../../context/TasksContext'

export const Content = () => {
  const {doneTasks, totalTasks, onAddTask} = useContext(TasksContext)
  const [newTask, setNewTask] = React.useState('')

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault()
    onAddTask(newTask)
    setNewTask('')
  }
  return (
    <div className={styles.Container}>
      <form >
        <input 
          placeholder='Adicione uma nova tarefa'
          value={newTask}
          onChange={(e: FormEvent<HTMLInputElement>) => setNewTask(e.currentTarget.value)}
        />
        <button 
          type="submit"
          onClick={handleAddTask}
          disabled={!newTask}
        > 
        Criar <PlusCircle size={24}/>
        </button>
      </form>
      <div className={styles.ToDoList}>
        <div className={styles.ToDoHeader}>
          <div className={styles.TotalTasks}>Tarefas Criadas <span>{totalTasks}</span></div>
          <div className={styles.DoneTasks}>Concluídas <span>{`${doneTasks} de ${totalTasks}`}</span></div>
        </div>
        <TaskList/>
      </div>


    </div>
  )
}

