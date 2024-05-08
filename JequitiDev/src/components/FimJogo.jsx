import React from 'react'
import styles from './FimJogo.module.css'

const FimJogo = ({retry}) => {
  return (
    <div>
      <h1>Fim do jogo</h1>
      <button onClick={retry} className={styles.botaoReiniciar}>Reiniciar</button>
    </div>
  )
}

export default FimJogo