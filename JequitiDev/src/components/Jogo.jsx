import React, { useState, useRef } from 'react'
import styles from './Jogo.module.css'

const Jogo = ({
    verifyLetter, 
    pickedWord, 
    pickedCategory, 
    letters, 
    letrasAdivinhadas, 
    letraErradas, 
    tentativas, 
    pontuacao }) => {

        const [letter, setLetter] = useState("")
        const letterInputRef = useRef(null)

        const handleSubmit = (e) => {
            e.preventDefault()

            verifyLetter(letter)

            setLetter("")

            letterInputRef.current.focus()
        }
  return (
    <div className={styles.jogo}>
        <p className={styles.pontos}>
            <span>Pontuação: {pontuacao}</span>
        </p>
        <h1>Adivinhe a palavra</h1>
        <h3 className={styles.dica}>Dica sobre a palavra: 
        <br />
        <br />
        <span className={styles.dicaPalavra}>{pickedCategory}</span></h3>
        <p>Você ainda tem {tentativas} tentativa(s)</p>
        <div className={styles.containerPalavra}>
            {letters.map((letter, i) => (letrasAdivinhadas.includes(letter) ? (
                <span key={i} className={styles.letra}>{letter}</span>
            ) : (
                <span key={i} className={styles.quadradoBranco}></span>
            )
            ))}
        </div>
        <div className={styles.containerDaLetra}>
            <p>Tente adivinhar uma letra da palavra:</p>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name='letra' 
                maxLength="1" 
                required onChange={(e) => setLetter (e.target.value)}
                value={letter} 
                ref={letterInputRef}
                />
                <button className={styles.botao}>Jogar!</button>
            </form>
        </div>
        <div className={styles.ContainerLetraErrada}>
            <p>Letras já utilizadas:</p>
            {letraErradas.map((letter, i) => (
                <span key={i}>{letter}</span>
            ))}
        </div>
    </div>
  )
}

export default Jogo