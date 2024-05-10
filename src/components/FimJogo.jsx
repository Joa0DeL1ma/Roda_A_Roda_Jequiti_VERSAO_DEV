import React from 'react'
import styles from './FimJogo.module.css'

const FimJogo = ({retry, pontuacao}) => {
  return (
    <div className={styles.jogo}>
      <h1>Fim do jogo</h1>
      <h2>Sua pontuação foi: <span>{pontuacao}</span></h2>
      <button onClick={retry} className={styles.botaoReiniciar}>Reiniciar</button>
    </div>
  )
}

export default FimJogo