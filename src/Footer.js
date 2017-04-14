import React, { } from 'react';

import './Footer.css';

const Footer = (props) => {
	return (
		<div className="Footer">
			<a href="mailto:kimispencer@gmail.com"><h3 className="monospace underline center" id="Hello">hello@kimispencer.com</h3></a>

			<div className="flex-col">
				<ul id="SocialMediaList">
					<li>
						<a href="https://www.linkedin.com/in/kimispencer" target="_blank"><p className="grey underline">LinkedIn</p></a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/kimispencer" target="_blank"><p className="grey underline">LinkedIn</p></a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Footer;