import './App.css'
import Link from './components/link/link'
import Head from './components/header/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Foot from './components/footer/foot'

function App() {
  let theme = ""

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

  return (
    <div className={`App ${theme} `}>
      <Head/>
      <div className='text-stone-600 m-auto px-8 rounded-lg py-4 w-3/4 mt-2 max-[700px]:w-full'>
        {links.map(link=>{
          return (
            <Link name={link.name} handle={link.handle} icon={link.icon} url={link.url} /> 
          )
        })}
      </div>
      <div className='w-fit m-auto'>
        {techs.map(tech=>{
          return(
            <FontAwesomeIcon icon={`fa-brands fa-${tech}`} className='px-1 hover:scale-150 transition-all' size='lg'/>
          )
        })}
      </div>
      <Foot/>
      <img src="images/binary-rain.png" className='fixed tree' alt="" />
      <div className='fixed bg-black p-1 rounded-b-lg top-0 right-2'>
        <button className='p-3 bg-white rounded-lg block max-[700px]:p-2'>
          <FontAwesomeIcon icon="fa-regular fa-sun" />
        </button>
        <button className='p-3 bg-white mt-2 rounded-lg block  max-[700px]:p-2'>
          <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" />
        </button>
      </div>
    </div>
  )

}

export default App
library.add(fab, fas, far)