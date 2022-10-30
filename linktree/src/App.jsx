import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Link from './components/Link/Link.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header>
        <div><img src="images/profile.png" /></div>
        <h1>Chelsea Banke</h1>
      </header>
      <main>
        <Link />
      </main>
    </div>
  )
}

export default App
