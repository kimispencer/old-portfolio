import React from 'react';
import './TextContainer.css';

const TextContainer = (props) => {
console.log(props)
	return (
		<div className={`${props.className} text-container`}>{props.children}</div>
	);
}

export default TextContainer;