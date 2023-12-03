import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Contact from '../contact/contact'
import './foot.css'
import { useState } from 'react'

function Foot(){
    const [displayContact, setDisplayContact] = useState(false)
    return(
        <div>
            <Contact displayContactProp={displayContact}/>
            <footer className="w-full py-5 rounded-t-lg h-32 bg-blue-600 absolute bottom-0 max-[700px]:h-28">
                <div className='flex m-auto w-fit'>
                    <button className='mx-2' onClick={()=>{window.location.href = 'mailto:bankechelsea@gmail.com'}}>
                        <FontAwesomeIcon size='2xl' icon="fa-solid fa-envelope" style={{color: "#ffffff",}} />
                    </button>
                    <button className='mx-2' onClick={()=>{setDisplayContact(!displayContact)}}>
                        <FontAwesomeIcon icon="fa-solid fa-comment-dots" size="2xl" style={{color: "#ffffff",}} />
                    </button>
                    <button className='bg-white py-1 px-4 rounded-full text-blue-600'>
                        Buy me a coffee<FontAwesomeIcon icon="fa-solid fa-mug-hot" size="xl" style={{color: "#005eff",}} className='ml-1'/>
                    </button>
                </div>
                <p className='text-white text-center mt-5 max-[700px]:mt-2'>made with <FontAwesomeIcon icon="fa-regular fa-heart" size="lg" style={{color: "#ffffff",}} /> by I</p>
            </footer>
        </div>
    )
}

export default Foot