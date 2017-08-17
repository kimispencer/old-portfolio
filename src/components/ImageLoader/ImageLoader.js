/*
	1. should take URL for image source
	2. should hold CSS spinner animation
*/

import React from 'react';
import './ImageLoader.css';

class ImageLoader extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			imageStatus: 'loading',
			loaded: false
		};
	}
 
	handleImageLoaded() {
		this.setState({ 
			imageStatus: 'loaded',
			loaded: true
		});

	}

	handleImageErrored() {
		this.setState({ 
			imageStatus: 'failed to load',
			loaded: false
		 });
	}

	render() {
		let img;
		(this.props.src.indexOf('http') > -1) ? img = this.props.src : img = require(`../../../public/assets/${this.props.imgKey}/${this.props.src}`);

		let classes = `${this.state.loaded ? 'loaded' : null} ${this.props.className ? this.props.className : ''} image-loader bg-img`;
		return (
			<div className={classes} style={ {backgroundImage: 'url(' + img + ')'} }>
				{this.props.children}
				<img
					style={ {display: 'none'} }
					src={img}
					onLoad={this.handleImageLoaded.bind(this)}
					onError={this.handleImageErrored.bind(this)}
					role="presentation"
				/>
				<div className={`${this.state.loaded ? 'loaded' : null} spinner-container`}>
					<div className="spinner"></div>
				</div>
				{/*this.state.imageStatus*/}
			</div>
		);
	}
}
export default ImageLoader;