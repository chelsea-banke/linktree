import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Link from './components/Link/Link.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Link />
    </div>
  )
}

export default App
