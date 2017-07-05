/*
	1. should take URL for image source
	2. should hold CSS spinner animation
*/

import React from 'react';
import './ImageLoader.css';

const ImageLoader = (props) => {
	console.log(props)
	let classes = `${props.className ? props.className : ''} image-loader bg-img`;
	if(props.src) {
		return (<div className={classes}>image loader</div>);
	}
}

export default ImageLoader;