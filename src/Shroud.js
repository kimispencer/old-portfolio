import React from 'react';
import './Shroud.css';

// try using a ReactCSSTransition animation thingy here for onShow and onHide
const Shroud = (props) => {
	let show = props.isNavOpen ? 'show' : 'hide';
	let cssClasses = `${show} Shroud`;
	return (
		<div className={cssClasses} onClick={props.handleClick}></div>
	);
}

export default Shroud;