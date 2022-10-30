import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Link from './components/Link/Link.jsx'
import './App.css'

function App() {
  const links = [
    {
      title: 'zuri Team',
      id: 'btn__zuri',
      url: 'https://training.zuri.team/',
      subtext: ''
    },
    {
      title: 'Zuri Books',
      id: 'books',
      url: 'https://books.zuri.team',
      subtext: ''
    },
    {
      title: 'Python Books',
      id: 'book__python',
      url: 'https://books.zuri.team/python-for-beginners?ref_id=<Chelsea Banke>',
      subtext: ''
    },
    {
      title: 'Background check for coders',
      id: 'pitch',
      url: 'https://background.zuri.team',
      subtext: ''
    },
  ]
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
