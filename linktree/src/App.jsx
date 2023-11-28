import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Link from './components/link/link'
import Head from './components/header/header'
import resume from './assets/docs/resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Foot from './components/footer/foot'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState("dark")

  const links = [
    {
      "name": "Twitter",
      "handle": "ChelseaBanke",
      "icon": "fa-twitter",
      "url": "http://x.com/ChelseaBanke"
    },
    {
      "name": "Github",
      "handle": "chelsea-banke",
      "icon": "fa-github",
      "url": "https://github.com/chelsea-banke"
    },
    {
      "name": "LinkedIn",
      "handle": "chelsea-banke",
      "icon": "fa-linkedin",
      "url": "https://www.linkedin.com/in/chelsea-banke"
    }
  ]

  const techs = ["python", "square-js", "react", "angular", "node"]

  const Home = ()=>{
    return(
      <div className={`App ${theme}`}>
      <div className='bg-stone-200 dark:bg-gray-800 underlay overflow-hidden relative'>
        <img src={`images/${theme=="dark" ? "green" : "black"}-binary-rain.png`} className='tree absolute' alt="" />
        <Head theme={theme} />
        <div className='text-stone-600 m-auto px-8 rounded-lg py-4 w-3/4 mt-2 max-[700px]:w-full relative'>
          {links.map(link=>{
            return (
              <Link theme={theme} name={link.name} handle={link.handle} icon={link.icon} url={link.url} /> 
            )
          })}
        </div>
        <div className='w-fit m-auto relative'>
          {techs.map(tech=>{
            return(
              <FontAwesomeIcon icon={`fa-brands fa-${tech}`} className='px-1 hover:scale-150 transition-all' size='lg'  color={`${theme=="dark" ? "green" : ""}`}/>
            )
          })}
        </div>
        <div className='fixed bg-white p-1 rounded-b-lg top-0 right-2 dark:bg-black'>
          <button className='p-3 bg-gray-700 mt-1 rounded-lg block  max-[700px]:p-2 dark:bg-white' onClick={()=>{theme=="dark" ? setTheme("light") : setTheme("dark")}}>
            <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke"  color={`${theme=="dark" ? "" : "white"}`}/>
          </button>
        </div>
      </div>
      <Foot/>
    </div>
    )
  }

  const Resume = ()=>{
    return(
      <div className='w-screen h-fit'>
        <iframe className='z-10 h-screen' src={resume} width="100%" height="500px"></iframe>
      </div>
    )
  }

  return (
    <Routes>
        <Route exact path="/" element={Home()} />
        <Route path='/resume' element={Resume()} />
    </Routes>
  )

}

export default App
library.add(fab, fas, far)