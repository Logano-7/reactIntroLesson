import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Into Exercise</h1>
      <div className="mainCont">
        <p>
          I am a React app built with Vite.
        </p>

        <h2>Favorite Tv <Shows></Shows></h2>
        <ul>
          <li>Psych</li>
          <li>Chuck</li>
          <li>Bones</li>
          <li>Friends</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

    </>
  )
}

export default App
