import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Link from './components/Link/Link.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <header>
      <div><img src="images/profile.png" /></div>
      <h1>Chelsea Banke</h1>
    </header>
  )
}

export default App
