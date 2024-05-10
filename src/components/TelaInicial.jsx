import React from 'react'
import Logo from './Logo'
import styles from './TelaInicial.module.css'

const TelaInicial = ({startGame}) => {
  return (
    <div className={styles.tela}>
        <h1 className={styles.logo}>Roda a Roda</h1>
        <Logo/>
        <p className={styles.cliqueAbaixo}>Clique no botão abaixo para começar o jogo!</p>
        <button onClick={startGame} className={styles.botaoIniciar}>Iniciar</button>
    </div>
  )
}
 
export default TelaInicial