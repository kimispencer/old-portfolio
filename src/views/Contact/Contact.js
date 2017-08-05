import React from 'react';
import './Contact.css';

const Contact = () => (
    <div className="contact">
        <div className="resume-container">
            <div className="text center">
                <p className="monospace">hello@kimispencer.com</p>
                <p className="monospace">Brooklyn, NY</p>
            </div>
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
        </div>
    </div>
)
export default Contact;