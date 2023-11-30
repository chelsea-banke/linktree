import { useEffect, useState } from "react"
import "./contact.css"

function Contact({displayContactProp}){
    const [displayContact, setDisplayContact] = useState(false)
    const [count, setCount] = useState(1)
    useEffect(()=>{
        count>1 ? setDisplayContact(true) : setCount(count+1)
    }, [displayContactProp])

    return(
        <div>
            <div className={`contact-overlay fixed w-screen h-screen top-0 left-0 bg-black dark:bg-white ${displayContact ? "block opacity-1" : "hidden opacity-0"}`} onClick={()=>{setDisplayContact(false)}}></div>
            <div className={`contact pb-5 fixed border-2 border-t-0 border-blue-600 bg-white dark:bg-stone-800 rounded-b-lg ${displayContact ? 'contact-in' : 'contact-out'}`}>
                <div className='m-auto mt-10 w-11/12 text-gray-800 dark:text-white'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor iusto ad explicabo cupiditate ducimus molestias aliquam nihil voluptates optio magnam illo non temporibus, enim minima repellendus recusandae expedita distinctio impedit!</p>
                <form action="" className='mt-10'>
                    <div className=''>
                        <label htmlFor="" className='block'>Your name</label>
                        <input className='bg-white dark:bg-stone-800 border-b border-gray-900 dark:border-white w-full' type="text" />
                    </div>
                    <div className='mt-10'>
                        <label htmlFor="" className='block'>Your email</label>
                        <input className='bg-white dark:bg-stone-800 border-b border-gray-900 dark:border-white w-full' type="email" />
                    </div>
                    <div className='mt-10'>
                        <label htmlFor="" className='block'>Your message</label>
                        <textarea className='bg-white dark:bg-stone-800 border-b border-gray-900 dark:border-white w-full' type="email" />
                    </div>
                    <div className='mt-10'>
                        <button className='w-full bg-blue-600 text-center rounded-full py-2 font-medium text-white'>send message</button>
                        <button className='mt-2 w-full border-2 border-red-700 text-center rounded-full py-1 font-medium text-red-700' type="button" onClick={()=>{setDisplayContact(false)}}>cancel</button>
                    </div>
                </form>
                <button className="w-full mt-5 text-blue-400 ">send a direct mail</button>
                </div>
            </div>
        </div>
    )
}

export default Contact