import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';
import './Home.css';

export default class Home extends React.Component {
	constructor(props, context) {
		super(props, context);

		// construct the position vector here, because if we use 'new' within render, 
		// React will think that things have changed when they have not. 
		this.cameraPosition = new THREE.Vector3(0, 0, 5);

		this.state = {
			cubeRotation: new THREE.Euler(),
		};

		this._onAnimate = () => {
			// we will get this callback every frame 

			// pretend cubeRotation is immutable. 
			// this helps with updates and pure rendering. 
			// React will be sure that the rotation has now updated. 
			this.setState({
				cubeRotation: new THREE.Euler(
					this.state.cubeRotation.x + 0.1,
					this.state.cubeRotation.y + 0.1,
					0
				),
			});
		};
	}

	render() {
		const width = window.innerWidth; // canvas width 
		const height = window.innerHeight; // canvas height 

		return (<React3
				mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below 
				width={width}
				height={height}

				onAnimate={this._onAnimate}
			>
			<scene>
			<perspectiveCamera
				name="camera"
				fov={75}
				aspect={width / height}
				near={0.1}
				far={1000}

				position={this.cameraPosition}
			/>
			<mesh
				rotation={this.state.cubeRotation}
			>
			<boxGeometry
				width={1}
				height={1}
				depth={1}
			/>
			<meshBasicMaterial
				color={0x00ff00}
			/>
			</mesh>
			</scene>
		</React3>);
	}
}
/*
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
					<h2 className="title monospace">Is a designer who codes.</h2>
					<div id="MobileSVG"></div>
					<h4 className="title monospace">
						<li>A front-end engineer & UX designer from Brooklyn, New York</li>
						<li>Focusing on interactive experiences & responsive web apps</li>
					</h4>
				</div>
			</div>
		</div>
	</div>
)
export default Home;
*/