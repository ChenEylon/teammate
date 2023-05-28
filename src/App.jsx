import { useContext, useState,react, createContext } from 'react'
import './App.css'
import Cells from './components/cells'
import Board from './components/board';

const MyContext = createContext();
function App() {
const [board,setboard]=useState(Array(9).fill(null))
const [X, isX] = useState(true)
const handleclick=(idx)=>{
  const newboard= board.map((value,index)=>{
    if (index===idx) { return value===X
    } else {return value}
  } )
  setboard(newboard)
  isX(!X)
}
  return (
    <><MyContext.Provider>
      <Board board={board} onClick={handleclick} />
      </MyContext.Provider>
    </>
  )
}

export default App
