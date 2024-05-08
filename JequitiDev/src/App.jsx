import './App.css'
//react
import { useCallback, useEffect, useState } from 'react'
//data
import {PalavrasLista} from './data/Palavras'
//components
import TelaInicial from './components/TelaInicial'
import Jogo from './components/Jogo'
import FimJogo from './components/FimJogo'

//estágios do jogo
const stages = [
  {id: 1, name:'comeco'},
  {id: 2, name:'jogo'},
  {id: 3, name:'fim'},
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [Palavras] = useState(PalavrasLista);
  const [pickedWord, setPickedWord] = useState ("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState("")

  const pickWordAndCategory = () => {

    //escolhe uma categoria random
    const categorias = Object.keys(Palavras)
    const categoria = categorias[Math.floor(Math.random() * Object.keys(categorias).length)]
   
    // escolhe uma palavra random dessa categoria
    const palavra = Palavras[categoria][Math.floor(Math.random() * Palavras[categoria].length)]

    return {palavra, categoria};
  }
  //começa o jogo
  const startGame = () => {
    //escolhe a palavra e a categoria
    const {palavra, categoria} = pickWordAndCategory()
    //cria um array das letras da palavra selecionada
    let letras = Array.from(palavra)
    letras = letras.map((l) => l.toLowerCase())
    //preenche os estados
    setPickedWord(palavra)
    setPickedCategory(categoria)
    setLetters(letras)

    setGameStage(stages[1].name)
  }

  //processa o input da letra
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  //reinicia o jogo
  const retry = () => {
    setGameStage(stages[0].name)
  }

  

  return (
      <div>
       {gameStage === 'comeco' && <TelaInicial startGame={startGame}/>}
       {gameStage === 'jogo' && <Jogo verifyLetter={verifyLetter}/>}
       {gameStage === 'fim' && <FimJogo retry={retry}/>}
      </div>
  )
}

export default App
