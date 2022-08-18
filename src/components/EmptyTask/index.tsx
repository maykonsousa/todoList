import { ClipboardText } from 'phosphor-react'
import React from 'react'
import styles from './styles.module.css'

export const EmptyTask = () => {
  return (
    <div className={styles.Container}>
      <ClipboardText size={56} className={styles.Icon}/>
      <h1>Você ainda não tem tarefas cadastradas</h1>
      <h2>Crie tarefas e organize os seus itens a fazer</h2>
    </div>
  )
}

