import React from 'react';
import { Link } from 'react-router-dom';
import LinkedIn from '../../../public/assets/logos/linkedin.svg';
import Github from '../../../public/assets/logos/github.svg';
import './Contact.css';

const Contact = () => (
    <div className="contact">
        <div className="text center">
            <h3 className="title bold">Let's make cool things together!</h3>
            <a href="mailto:kimispencer@gmail.com"><h4 className="monospace underline" id="Hello">hello@kimispencer.com</h4></a>
            <h4 className="monospace">Brooklyn, NY</h4>
        </div>
        {/*
        <div id="ContactForm" className="flex-center flex-col">
            <form>
                <div className="flex-col">
                    <input id="Name" type="text" placeholder="Your Name" />
                    <input id="Email" type="email" placeholder="Your Email" />
                    <textarea id="Message" placeholder="Your Message"></textarea>
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
        </div>
        */}
    </div>
)
export default Contact;