import { useState } from 'react'
import Stopwatch from './stopwatch'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <Stopwatch />
    </div>
    </>
  )
}

export default App