import React from 'react';
import * as THREE from 'three';
import './Home.css';
import Particle from '../../../public/assets/icons/particle.png';

class Home extends React.Component {
	componentDidMount() {
		var height = document.getElementsByClassName('home')[0].clientHeight,
			width = document.getElementsByClassName('home')[0].clientWidth;

		// 3 must haves - SCENE , CAMERA, RENDERER

		var scene = new THREE.Scene(); // Creates a new scene

		var camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 ); // Creates a camera and passes (field of view, aspect ratio, near clipping plane, far clipping plane)
			  camera.position.set(0, 0, 5);// moves the camera back some so we won't be inside of the cube
			  camera.lookAt( scene.position ); // makes the camera always point toward the scene
			  scene.add(camera);

		var light = new THREE.PointLight( 0xFFFF00 );
			  light.position.set( 10, 0, 10 );
			  scene.add(light);

		var renderer = new THREE.WebGLRenderer();
			  renderer.setSize( width, height ); // sets size of render to the screen size
			  document.getElementsByClassName('home')[0].appendChild( renderer.domElement); // Renders a canvas tag to the DOM

		// var geometry = new THREE.BoxGeometry( 2, 2, 2); // give the cube it's dimensions (width, height, depth)
		// var material = new THREE.MeshLambertMaterial( { color: 0xFF0000, wireframe: false} ); // creates material and gives it a color
		// material.wireframe = false;
		// var cube1 = new THREE.Mesh( geometry, material ); // crates the cube using the geometry and the material
		// var cube2 = new THREE.Mesh( geometry, material );
		// 	  cube2.position.set(5, -2, -5);
		// var cube3 = new THREE.Mesh( geometry, material );
		// 	  cube3.position.set(-5, -2, -5);

		// scene.add( cube1, cube2, cube3); // adds the cube to the scene

		// create the particle variables
		var particleCount = 10,
		    particles = new THREE.BoxGeometry(2, 2, 2),
			pMaterial = new THREE.MeshLambertMaterial( { color: 0xFF0000, wireframe: false} ); // creates material and gives it a color

		// now create the individual particles
		for (var p = 0; p < particleCount; p++) {
		  // create a particle with random
		  // position values, -250 -> 250
		  var pX = Math.random() * 500 - 250,
		      pY = Math.random() * 500 - 250,
		      pZ = Math.random() * 500 - 250,
		      particle = new THREE.Vertex(
		        new THREE.Vector3(pX, pY, pZ)
		      );
console.log(pX + "," + pY + "," + pZ)

		  // add it to the geometry
console.log(particle)
		  particles.vertices.push(particle);
		}

		// create the particle system
		var particleSystem = new THREE.ParticleSystem(
		    particles,
		    pMaterial);
console.log(particleSystem)

		// add it to the scene
		scene.add(particleSystem);

		// Resize Three.js scene on window resize
		window.addEventListener( 'resize', onWindowResize, false );

		function onWindowResize(){

			camera.aspect = document.getElementsByClassName('home')[0].clientWidth / document.getElementsByClassName('home')[0].clientHeight;
			camera.updateProjectionMatrix();

			renderer.setSize( document.getElementsByClassName('home')[0].clientWidth, document.getElementsByClassName('home')[0].clientHeight );

		}

		// Render loop to display cube
		function render() {
			requestAnimationFrame( render ); // requestAnimationFrame will pause when the user navigates to a new tab
			// cube1.rotation.z += 0.01;
			// cube1.rotation.x += 0.01;
			// cube1.rotation.y += 0.01;  // Runs every frame giving it the animation

			// cube2.rotation.x += 0.01; 

			// cube3.rotation.y += 0.01;

			renderer.render( scene, camera ); 
		};

		render();
	}
	render() {
		return (
			<div className='home' id="Home"></div>
		);
	}
}
export default Home;