import React from 'react';
import {
	Link
} from 'react-router-dom';

import './Nav.css';

const NavTrigger = (props) => (
	<div className="NavTrigger" onClick={props.handleClick}>
		<p>|||</p>
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
					<li><Link to="/" onClick={props.handleClick}><p>Home</p></Link></li>
					<li><Link to="/projects" onClick={props.handleClick}><p>Projects</p></Link></li>
					<li><Link to="/resume" onClick={props.handleClick}><p>Resume</p></Link></li>
					<li><Link to="/contact" onClick={props.handleClick}><p>Contact</p></Link></li>
				</ul>
			</div>
		</div>
	);
}

export default Nav;