import React from 'react';
import './Contact.css';

const Contact = () => (
    <div className="Contact">
        <div className="resume-container">
            <div className="text center">
                <h4 className="bold title underline ">CONTACT</h4>
                <p className="serif"><small>CURRENTLY AVAILABLE FOR CONTRACT OR FULL-TIME WORK.</small></p>
                <p className="serif"><small>hello@kimispencer.com</small></p>
                <p className="serif"><small>Brooklyn, NY | Portland, OR</small></p>
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