import { useState } from 'react'
import Contact from '../contact/contact'
import './home.css'

function Home(){
    return(
        <div>
            <section id='profile'>
                <div><img id='profile__img' src="images/profile.png" /></div>
                <h1>Chelsea Banke</h1>
                <div id='usr-names'>
                <h2 id='twitter'>Chelsea Banke</h2>
                <h2 id='slack'>Banke</h2>
                </div>
            </section>
            <section id='links'>
                <a href='https://training.zuri.team/' className='link' id='btn__zuri'>Zuri Team</a><br/>
                <a href='https://books.zuri.team' className='link' id='books'>Zuri Books</a><br/>
                <a href='https://books.zuri.team/python-for-beginners?ref_id=<Banke>' className='link' id='book__python'>Python Books</a><br/>
                <a href='https://background.zuri.team' className='link' id='pitch'>Background check for coders</a><br/>
                <a href='https://books.zuri.team/design-rules' className='link' id='book__design'>Design Books</a><br/>
                <a className='link' id='contact' href='/contact'>Contact</a>
            </section>
        </div>
    )
}

export default Home