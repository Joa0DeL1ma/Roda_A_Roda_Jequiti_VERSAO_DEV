import React from 'react'
import styles from './Jogo.module.css'

const Jogo = ({verifyLetter}) => {
  return (
    <div className={styles.jogo}>
        <p className={styles.pontos}>
            <span>Pontuação: 000</span>
        </p>
        <h1>Adivinhe a palavra</h1>
        <h3 className={styles.dica}>Dica sobre a palavra:</h3><span>Dica...</span>
        <div className={styles.containerPalavra}>
            <span className={styles.letra}>A</span>
            <span className={styles.quadradoBranco}></span>
        </div>
        <div className={styles.containerDaLetra}>
            <p>Tente adivinhar uma letra da palavra:</p>
            <form>
                <input type="text" name='letra' maxLength="1" required/>
                <button>Jogar!</button>
            </form>
        </div>
        <div className={styles.ContainerLetraErrada}>
            <p>Letras já utilizadas:</p>
            <span>a,</span>
            <span>b,</span>

        </div>
    </div>
  )
}

export default Jogo