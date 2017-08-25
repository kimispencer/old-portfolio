import Ball from './Ball';
import utils from './utils';

export default class ParticleTypography {
	/**
	* Setup DOM references and event listeners
	*/
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext('2d');
		this.w = window.innerWidth;
		this.h = window.innerHeight;

		this.ctx.canvas.width  = this.w;
		this.ctx.canvas.height = this.h;
		this.utils             = window.utils;
	    this.requestAnimationFrame = window.requestAnimationFrame.bind(window);

		this.mouse     = this.utils.captureMouse(this.canvas);
		this.mouseBall = new Ball(100, 'transparent');

		this.image       = new Image();
		this.imageSrc    = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3640/leila-jade.v3.png";
		this.imagePixels = [];

		this.particles    = [];
		this.hueTopRange  = 280;
		this.hueBotRange  = 200;
		this.hueOffset    = 60;

		// Set particle size based on screensize
		this.particleSize = 0;
		if (this.w > 1200){
			this.particleSize = 8;
		} else if (this.w > 900) {
			this.particleSize = 6;
		} else {
			this.particleSize = 4;
		}

		// Environment Physics
		this.spring   = 0.1;
		this.friction = 0.95;

	    // Start animation
		this._init();
	}

	/**
	* Initialize canvas and image
	*/
    _init() {
		// Set Canvas size to fullscreen
		this.ctx.canvas.width  = this.w;
		this.ctx.canvas.height = this.h;

		// Environment events
		// w.addEventListener('resize', () => this._onWindowResize());
		this.ctx.canvas.addEventListener('mousemove', () => this._onMouseMove(), false);

		// CORS enabled image
		// https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
		this.image.crossOrigin = "Anonymous";
		this.image.src         = this.imageSrc;
		// this.image.addEventListener('load', () => this._drawImage());
		this.image.onload = () => {
			this.ctx.drawImage(this.image, 100, 100);
			this._drawImage();
		}

		this._animate();
    }

	/**
	* Draw image to canvas (in-memory)
	*/
	_drawImage() {
		// Create in-memory canvas to get image pixels
		let analysisCanvas  = document.createElement('canvas'),
		    analysisContext = analysisCanvas.getContext('2d');

		analysisCanvas.width  = this.w;
		analysisCanvas.height = this.h;

		// Get image proportions
		let ratio       = this.image.width / this.image.height,
		    imageWidth  = this.ctx.canvas.width,
		    imageHeight = imageWidth / ratio;

		// If image is portrait, swap proportion ratio
		if (imageHeight > this.ctx.canvas.height) {
			imageHeight = this.ctx.canvas.height;
			imageWidth  = imageHeight * ratio;
		}

		// Scale image down so there's some padding
		imageHeight = imageHeight * 0.9;
		imageWidth  = imageWidth * 0.9;

		let verticalCenter   = (this.ctx.canvas.height - imageHeight) / 2,
		    horizontalCenter = (this.ctx.canvas.width - imageWidth) / 2;

		// Draw image to canvas and center it
		analysisContext.clearRect(0, 0, analysisCanvas.width, analysisCanvas.height);
		analysisContext.drawImage(this.image, horizontalCenter, verticalCenter, imageWidth, imageHeight);

		this._getPixelData(analysisCanvas, analysisContext);
    }

	/**
	* Create image pixel map with x, y, and color properties
	* for individual pixels
	*
	* @param {Object} canvas - Canvas element
	* @param {Object} context - 2D canvas context
	*/
	_getPixelData(canvas, context) {
		// Get canvas pixel data
		let imageData = this.ctx.getImageData(0, 0, this.ctx.canvas.width, this.ctx.canvas.height),
			pixels    = imageData.data,
			x         = 0,
			y         = 0;
			// Iterate over canvas pixels
			for (let offset = 0; offset < pixels.length; offset += 4){
				let r = pixels[offset],
				g = pixels[offset + 1],
				b = pixels[offset + 2],
				a = pixels[offset + 3];

				// Skip transparent or all-white pixels
				if (a > 0 && !(r === 255 && g === 255 && b === 255)){
					let x = (offset / 4) % canvas.width,
					y = Math.floor(Math.floor(offset / canvas.width) / 4);

					if((x && x % this.particleSize == 0) && (y && y % this.particleSize == 0)){
						this.imagePixels.push({ 
							x: x, 
							y: y, 
							color: 'rgba('+ r + ', ' + g + ', ' + b + ', ' + a + ')'
						});
					}
				}
			}
			// Generate particles
			this._generateParticles(this.imagePixels);
		}


	_generateParticles(pixels) {
		for (let i = 0; i < pixels.length; i++){
			let particle = new Ball(
				this.particleSize / 2, // size
				pixels[i].color,  // color
			);

			particle.x = particle.targetX = pixels[i].x;
			particle.y = particle.targetY = pixels[i].y;

			this.particles.push(particle);
		}
		return this.particles;
    }
	_animate() {
		// Call request animation frame recursively
		this.requestAnimationFrame(this._animate.bind(this), this.canvas);

		// Clear canvas every frame
		this.ctx.fillStyle = '#111';
		this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.width);

		// Animate stuff...
		if (this.particles){
			// for (var i = 0; i < this.particles.length; i++){
			// 	this._collisionDetection(this.particles[i]);
			// 	this._drawParticles(this.particles[i]);
			// }
		}
    }
	/**
	* Collision detection between mouse and particles
	*
	 * @param {Object} particle - Instance 2D Ball context
	*/
	_collisionDetection(particle) {
		console.log('_collisionDetection')
	}
	/**
	* Draw particles
	*
	* @param {Object} particle - Instance 2D Ball context
	*/
	_drawParticles(particle) {
		console.log('_drawParticles')
	}
	_onMouseMove() {
    	// console.log('_onMouseMove')
    }
}