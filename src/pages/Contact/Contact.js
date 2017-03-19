import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="Contact">
    <h4 className="title center">Contact</h4>
    <div className="flex-row responsive">
    	<div className="left-row">
    		<p>kimispencer@gmail.com</p>
    		<p>brooklyn, ny</p>
    		<div className="flex-row">
    			<p>linkedin</p>
    			<p>facebook</p>
    		</div>
    	</div>
    	<div className="right-row">
    		<h4>FORM</h4>
    	</div>
    </div>
  </div>
)
export default Contact;