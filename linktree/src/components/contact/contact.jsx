import { useState } from "react";
import './contact.css'

function Contact(){
    return(
        <form className="Contact">
            <div id="head">
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask about anything you have in mind</p>
            </div>
            <div className="row" id="names">
                <div className="feild">
                    <label for="first_name">First name</label>
                    <input id="first_name" type='text' placeholder="Enter your first name" required/>
                </div>
                <div className="feild">
                    <label for="last_name">Last name</label>
                    <input id="last_name" type='text' placeholder="Enter your last name" required/>
                </div>
            </div>
            <div className="row">
                <label for="email">Email</label>
                <input id="email" type='email' placeholder="yourname@gmail.com" required/>
                <p className="p">make sure your email ends with @gmail.com</p>
            </div>
            <div className="row">
                <label for="message">Message</label><br/>
                <textarea id="message" type='text' placeholder="Send me a message and I'll reply you as soon as possible" rows='7' required></textarea>
                <p className="p">Please enter a message</p>
            </div>
            <div className="row" id="check">
                <input id="check" type='checkbox'/>
                <label for='check'>You agree to providing your data so we may contact you</label>
            </div>
            <button type='submit' id="btn_submit">Send message</button>
        </form>
    )
}

export default Contact