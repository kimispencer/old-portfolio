import React from 'react';
import './Home.css';

const Home = () => (
	<div className="Home">
		<div className="home-container flex-row responsive padded-width">
			<div className="left-col">
				<p>left</p>
			</div>
			<div className="right-col">
				<p>right</p>
				{/*
				<div className="">
					<h4 className="title bold uppercase">Kimi Spencer</h4>
					<h2 className="title monospace">Is a designer who codes.</h2>
				</div>
				*/}
			</div>
		</div>
	</div>
)
export default Home;