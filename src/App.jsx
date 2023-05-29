import { useContext, useState, react, createContext } from 'react'
import './App.css'
import Cells from './components/cells'
import Board from './components/board';
import { Winner } from './components/winner';
import { Reset } from './components/Reset';

const MyContext = createContext();
function App() {
  const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ]
  const [score, setscore] = useState("")
  const [board, setboard] = useState(Array(9).fill(null))
  const [X, isX] = useState(true)
  const [gameover, setgameover] = useState(false)
  const [gameEnded, setGameEnded] = useState(false);


  const handleclick = (idx) => {
    const newboard = board.map((value, index) => {
      if (index === idx) {
        return X === true ? "X" : "O"
      } else { return value }
    })
    const isBoardFull = newboard.every((cell) => cell !== null);

    const winning = checkwin(newboard);
    if (winning) {
      if (winning === 'X') {
        setscore("X")
      } else if (winning === 'O') { 
        setscore('O') 
      }  }
      else if (isBoardFull) {
        setGameEnded(true);
      
    }
    setboard(newboard)
    isX(!X)
  }
  const checkwin = (board) => {
    for (let i = 0; i < winner.length; i++) {
      let [x, y, z] = winner[i]
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setgameover(true)
        setGameEnded(false)
        return (board[x])
      }
    }
  }
  const reset = () => {
    setscore("")
    setGameEnded(false)
    setgameover(false)
    setboard(Array(9).fill(null))
  }
  return (
    <>
      <Winner score={score} gameEnded={gameEnded} />
      <Board board={board} onClick={gameover ? reset : handleclick} />
      <Reset reset={reset} />

    </>
  )
}

export default App
