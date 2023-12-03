import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import emailjs from "@emailjs/browser"
import "./contact.css"

function Contact({displayContactProp}){
    const [displayContact, setDisplayContact] = useState(false)
    const [modalDisplay, setModalDisplay] = useState('form')
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [message, setMessage] = useState("")
    const [count, setCount] = useState(1)
    
    useEffect(()=>{emailjs.init(import.meta.env.VITE_EMAIL_KEY)}, [])
    useEffect(()=>{count>1 ? setDisplayContact(true) : setCount(count+1)}, [displayContactProp])
    const sendMail = async (e)=>{
        e.preventDefault()
        setFirstName('')
        setLastName('')
        setMessage('')
        setModalDisplay('loader')
        console.log(firstName, lastName, message)
        await emailjs.send('gmail_service', 'contact_template', {
            sender: `${firstName} ${lastName}`,
            message: message,
            recipient: 'Banke'
        }).then(results=>{
            console.log(results)
            setModalDisplay('success')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return(
        <div>
            <div className={`contact-overlay fixed w-screen h-screen top-0 left-0 bg-black dark:bg-white ${displayContact ? "block opacity-1" : "hidden opacity-0"}`} onClick={()=>{setDisplayContact(false); setModalDisplay('form')}}></div>
            <div className={`contact pb-5 fixed border-2 border-t-0 border-blue-600 bg-white dark:bg-stone-800 rounded-b-lg ${displayContact ? 'contact-in' : 'contact-out'}`}>
                <div className='m-auto mt-10 w-11/12 text-gray-800 dark:text-white transition-all'>
                    {modalDisplay=='form' ?
                        <form action="" className='mt-10' onSubmit={(e)=>{sendMail(e)}}>
                            <h2 className="text-3xl font-medium">Leave a message</h2>
                            <div className='mt-10'> 
                                <label htmlFor="" className='block'>First Name</label>
                                <input className='bg-white dark:bg-stone-800 border-b border-gray-900 dark:border-white w-full' type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} required />
                            </div>
                            <div className='mt-10'>
                                <label htmlFor="" className='block'>Last Name</label>
                                <input className='bg-white dark:bg-stone-800 border-b border-gray-900 dark:border-white w-full' type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} required />
                            </div>
                            <div className='mt-10'>
                                <label htmlFor="" className='block'>Your message</label>
                                <textarea className='bg-white dark:bg-stone-800 border-b border-gray-900 dark:border-white w-full' value={message} onChange={(e)=>{setMessage(e.target.value)}} required/>
                            </div>
                            <div className='mt-10'>
                                <button className='w-full bg-blue-600 text-center rounded-full py-2 font-medium text-white' type="submit">send message</button>
                                <button className='mt-2 w-full border-2 border-red-700 text-center rounded-full py-1 font-medium text-red-700' type="button" onClick={()=>{setDisplayContact(false)}}>cancel</button>
                            </div>
                            <button className="w-full mt-5 text-blue-400 " type="button" onClick={()=>{window.location.href = 'mailto:bankechelsea@gmail.com'}}>compose with mail app</button>
                        </form>

                        : modalDisplay == 'loader' ?
                        <div className="m-auto w-fit text-center mb-5">
                            Sending Message <FontAwesomeIcon icon="fa-solid fa-circle-notch" spin size="l" style={{color: "#ffffff",}} />
                            <button className='mt-2 w-full border-2 text-center rounded-full py-1 font-medium text-white' type="button" >Hold on a sec</button>
                        </div> 
                    
                        :
                        <div className="m-auto w-fit text-center mb-5">
                            Successfuly sent Message <FontAwesomeIcon icon="fa-solid fa-circle-check" size="xl" style={{color: "#179258",}} />
                            <button className='mt-2 w-full border-2 border-green-700 text-center rounded-full py-1 font-medium bg-green-700 text-white' type="button" onClick={()=>{setDisplayContact(false); setModalDisplay('form')}}>close</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact