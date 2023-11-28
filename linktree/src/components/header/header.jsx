import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profile1 from "../../assets/profiles/profile1.jpg"
import profile2 from "../../assets/profiles/profile2.jpg"
import resume from "../../assets/docs/resume.pdf"
import "./header.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Head({theme}){
    const [viewState, setViewState] = useState(1)
    let view = 1

    const switchProfile = (offset)=>{
        view = viewState
        const prevView = view
        if (view==1 && offset==-1){
            view=2
        }
        else{
            view = ((3%(view+offset))+1)
        }
        console.log(view)
        const currentProfile = document.getElementById(`profile${view}`)
        const prevProfile = document.getElementById(`profile${prevView}`)
        currentProfile.classList.remove('l-in', 'l-out', 'r-in', 'r-out')
        prevProfile.classList.remove('l-in', 'l-out', 'r-in', 'r-out')
        if (offset==-1){
            currentProfile.classList.add('r-in')
            prevProfile.classList.add('l-out')
        }
        else if (offset==1){
            currentProfile.classList.add('l-in')
            prevProfile.classList.add('r-out')
        }
        setViewState(view)
    }

    return(
        <header className="w-screen pt-5 relative">
            <div className="flex justify-center w-fit m-auto">
                <button className='hover:cursor-default'>
                    <FontAwesomeIcon icon="fa-solid fa-chevron-left" className='p-6 pr-0 hover:cursor-pointer' onClick={()=>{switchProfile(-1)}}  color={`${theme=="dark" ? "white" : ""}`} />
                </button>
                <div className="m-auto profile-container relative overflow-x-hidden rounded-full">
                    <img className={`profile absolute profile-1 r-in`} id="profile1" src={profile1} alt="" />
                    <img className={`profile w-screen absolute profile-2 r-out`} id="profile2" src={profile2} alt="" />
                </div>
                <button className='hover:cursor-default'>
                    <FontAwesomeIcon icon="fa-solid fa-chevron-right" className='p-6 pl-0 hover:cursor-pointer' onClick={()=>{switchProfile(1)}} color={`${theme=="dark" ? "white" : ""}`}/>
                </button>
            </div>
            <div className='w-fit m-auto'>
                <button className={`p-1 mr-1 border rounded-full border-black ${viewState==1 ? 'bg-black' : 'bg-white'} dark:border-white`}></button>
                <button className={`p-1 mr-l border rounded-full border-black ${viewState==2 ? "bg-black" : "bg-white"} dark:border-white`}></button>
            </div>
            <h1 className="text-center text-3xl font-medium max-[700px]:text-2xl dark:text-white">Chelsea Banke</h1>
            <div className="m-auto w-fit text-white mt-2 font-medium resume max-[700px]:text-sm">
                <Link to={"/resume"}>
                    <button className="bg-green-600 py-1 px-4 mr-1 rounded-l-full rounded-r-lg">Preview Resume</button>
                </Link>
                <a href={resume} download="chelsea-banke">
                    <button className="bg-blue-600 py-1 px-4 rounded-r-full">Download Resume</button>
                </a>
            </div>
        </header>
    )
}
export default Head