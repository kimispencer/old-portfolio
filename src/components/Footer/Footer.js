import React, { } from 'react';

import './Footer.css';

const Footer = (props) => {
	return (
		<div className="Footer">
			<a href="mailto:kimispencer@gmail.com"><h4 className="monospace underline center" id="Hello">hello@kimispencer.com</h4></a>

			<div className="flex-col">
				<ul id="SocialMediaList">
					<li>
						<a href="https://www.linkedin.com/in/kimispencer" target="_blank">
							<object data="http://kimispencer.com/assets/portfolio/logos/linkedin.svg" type="image/svg+xml"></object>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Footer;