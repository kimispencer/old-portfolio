import React from 'react';
import {
	Link
} from 'react-router-dom';

import './Nav.css';

const NavTrigger = (props) => (
	<div className="NavTrigger" onClick={props.handleClick}>
		<h3 className="bold">|||</h3>
	</div>
)

const Nav = (props) => {
	let open = props.isNavOpen ? 'open' : 'closed';
	let cssClasses = `${open} Nav`;
	return (
		<div>
			<NavTrigger handleClick={props.handleClick} />
			<div className={cssClasses}>
				<ul>
					<li><Link to="/" onClick={props.handleClick}><small className="uppercase">Home</small></Link></li>
					<li><Link to="/projects" onClick={props.handleClick}><small className="uppercase">Projects</small></Link></li>
					<li><Link to="/resume" onClick={props.handleClick}><small className="uppercase">Resume</small></Link></li>
					<li><Link to="/contact" onClick={props.handleClick}><small className="uppercase">Contact</small></Link></li>
				</ul>
			</div>
		</div>
	);
}

export default Nav;

// <Link to="/" onClick={props.handleClick}><h4 className="bold" id="Logo">kimi</h4></Link>
