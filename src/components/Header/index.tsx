import React from 'react'
import styles from './styles.module.css'
import LogoImg from '../../assets/logo.svg'

export const Header = () => {
  return (
    <header className={styles.Container}>
      <img src={LogoImg} alt="Logo ToDO"  />
    </header>
  )
}

