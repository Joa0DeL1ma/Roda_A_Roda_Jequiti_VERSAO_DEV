import React from 'react'
import Jequiti from '../assets/jequiti.png'
import styles from './Logo.module.css'

const Logo = () => {

  return (
    <div>
    <h1 className={styles.logo}>Roda a Roda</h1>
    <img src={Jequiti} alt="Logo da página"/>
    </div>
    
  )
}

export default Logo
