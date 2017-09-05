import React from 'react';
import './TextAnimation.css';

const TextAnimation = (props) => {
	let copy = props.text;
	let letters = copy.split('');
	letters.map((letter, index) => {
		letters[index] = `<span class="fade-in-letter">${letter}</span>`;
	});
	let html = letters.join('');
	return (
		<div className={`${props.className} text-animation`}>
			<h4 className="monospace" dangerouslySetInnerHTML={{ __html: html }}></h4>
		</div>
	);
}

export default TextAnimation;