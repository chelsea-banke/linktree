import { useState } from 'react'
import { Routes, Route, Link, useRoutes } from 'react-router-dom'
import './App.css'
import Contact from './components/contact/contact'
import Home from './components/home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
      </Routes>
      <br/>
      <hr/>
      <section>
        <div id='foot'>
          <div><a href=''><img src='images/zuri.svg' /></a></div>
          <p>HNG internship 9 frontend task</p>
          <div><a href=''><img src='images/i4g.png' /></a></div>
        </div>
      </section>
    </div>
  )
}

export default App
