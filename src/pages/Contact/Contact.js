import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="Contact">
    <h4 className="title center">Contact</h4>
    <div className="flex-col center">
    	<div className="left-row">
            <div className="text center">
        		<p>kimispencer@gmail.com</p>
        		<p>brooklyn, ny</p>
        		<div className="flex-row">
        			<p>linkedin</p>
        			<p>facebook</p>
        		</div>
            </div>
    	</div>
    	<div className="right-row">
            <div className="center text">
        		<h4>Form</h4>
        		<form >
        			<input type="email" placeholder="Email" />
        			<button type="submit">submit</button>
        		</form>
            </div>
    	</div>
    </div>
  </div>
)
export default Contact;