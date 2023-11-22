import './App.css'

import { useCallback, useEffect, useState } from 'react'

import { StartScreen } from './components/StartScreen'
import { Game } from './components/Game'
import { GameOver } from './components/GameOver'

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
]

export function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)

  const startGame = () => {
    setGameStage(stages[1].name)
  }

  return (
   <div className='App'>
    {gameStage === 'start' && < StartScreen startGame={startGame}/>}
    {gameStage === 'game' && < Game />}
    {gameStage === 'end' && < GameOver />}
   </div>
  )
}


