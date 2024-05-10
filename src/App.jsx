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

  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState([])
  const [letraErradas, setLetrasErradas] = useState([])
  const [tentativas, setTentativas] = useState(5)
  const [pontuacao, setPontuacao] = useState (0)

  const pickWordAndCategory = useCallback(() => {

    //escolhe uma categoria random
    const categorias = Object.keys(Palavras)
    const categoria = categorias[Math.floor(Math.random() * Object.keys(categorias).length)]
   
    // escolhe uma palavra random dessa categoria
    const palavra = Palavras[categoria][Math.floor(Math.random() * Palavras[categoria].length)]

    return {palavra, categoria};
  }, [Palavras])
  //começa o jogo
  const startGame = useCallback(() => {
    clearEstados()
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
  }, [pickWordAndCategory])

  //processa o input da letra
  const verifyLetter = (letter) => {
    
    const letraNormalizada = letter.toLowerCase()

    //checa se a letra já foi utilizada
    if(letrasAdivinhadas.includes(letraNormalizada) || letraErradas.includes(letraNormalizada)){
      return
    }

    //da o input da letra ou remove a tentativa
    if(letters.includes(letraNormalizada)) {
      setLetrasAdivinhadas((actualLetrasAdivinhadas) => [...actualLetrasAdivinhadas, letraNormalizada])
    }
    else {
      setLetrasErradas((actualLetrasErradas) => [...actualLetrasErradas, letraNormalizada])
    
      setTentativas((actualTentativas) => actualTentativas - 1)
    }
  }

  const clearEstados = () => {
    setLetrasAdivinhadas([])
    setLetrasErradas([])
  }

  useEffect(() => {
    if (tentativas <=0){
      //reseta os estados
      clearEstados()

      setGameStage(stages[2].name)
    }
  }, [tentativas])

  //checa se venceu
  useEffect(() => {
    const letrasUnicas = [... new Set(letters)]

    // condição de vitória
    if(letrasAdivinhadas.length === letrasUnicas.length && gameStage === stages[1].name) {
      setPontuacao ((actualPontuacao) => actualPontuacao += 100)
      startGame()
    }
  }, [letrasAdivinhadas, letters, startGame])

  

  //reinicia o jogo
  const retry = () => {
    setPontuacao(0)
    setTentativas(5)
    setGameStage(stages[0].name)
  }

  

  return (
      <div>
       {gameStage === 'comeco' && <TelaInicial startGame={startGame}/>}
       {gameStage === 'jogo' && <Jogo 
       verifyLetter={verifyLetter}
       pickedWord = {pickedWord}
       pickedCategory = {pickedCategory}
       letters = {letters}
       letrasAdivinhadas={letrasAdivinhadas}
       letraErradas={letraErradas}
       tentativas={tentativas}
       pontuacao={pontuacao}
       />}
       {gameStage === 'fim' && <FimJogo 
       retry={retry}
       pontuacao={pontuacao}
       />}
      </div>
  )
}

export default App
