import React from 'react';
import './Shroud.css';

const Shroud = (props) => {
	let show = props._isNavOpen ? 'show' : 'hide';
	let cssClasses = `${show} Shroud`;
console.log('handleClick, ' + props.handleClick)
	return (
		<div className={cssClasses} onClick={props.handleClick}></div>
	);
}

export default Shroud;