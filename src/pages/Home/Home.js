import React from 'react';
import './Home.css';

const Home = () => (
	<div className="Home">
		<div className="home-container flex-row responsive padded-width">
			<div className="left-col">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.6 107.6" id="StarSVG">
				    <path fill="none" stroke="black" strokeWidth="2" id="StarPath" d="M43.7,65.8L19.9,83.3c-2.9,1.9-5.1,3.2-7.9,3.2c-5.7,0-10.5-5.1-10.5-10.8
				        c0-4.8,3.8-8.2,7.3-9.8l27.9-12L8.8,41.4c-3.8-1.6-7.3-5.1-7.3-9.8c0-5.7,5.1-10.5,10.8-10.5c2.9,0,4.8,1,7.6,3.2l23.8,17.4
				        l-3.2-28.2c-1-6.7,3.5-12,9.8-12c6.3,0,10.8,5.1,9.8,11.7L57,41.8l23.8-17.4c2.9-2.2,5.1-3.2,7.9-3.2c5.7,0,10.5,4.8,10.5,10.5
				        c0,5.1-3.5,8.2-7.3,9.8L63.9,53.8l27.9,12c3.8,1.6,7.3,5.1,7.3,10.1c0,5.7-5.1,10.5-10.8,10.5c-2.5,0-4.8-1.3-7.6-3.2L57,65.8
				        l3.2,28.2c1,6.7-3.5,12-9.8,12c-6.3,0-10.8-5.1-9.8-11.7L43.7,65.8z"/>
				</svg>
			</div>
			<div className="right-col">
				<div className="">
					<h2 className="title bold uppercase">Kimi Spencer</h2>
					<h2 className="title monospace">A front-end engineer & UX designer from Brooklyn, New York, focusing on interactive experiences & responsive web apps.</h2>
					<div id="MobileSVG"></div>
					<h4 className="title monospace">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies ac diam non dignissim. Donec vehicula orci ultrices nunc pellentesque, ut luctus arcu condimentum.</h4>
				</div>
			</div>
		</div>
	</div>
)
export default Home;