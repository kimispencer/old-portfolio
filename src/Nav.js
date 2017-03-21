import React from 'react';
import {
	Link
} from 'react-router-dom';

import './Nav.css';

const NavTrigger = (props) => (
	<div className="NavTrigger" onClick={props.toggleNav}>
		<h3 className="bold">|||</h3>
	</div>
)

const Nav = (props) => {
	let open = props.isNavOpen ? 'open' : 'closed';
	let cssClasses = `${open} Nav`;
	const toggleNav_boxProjectNavStyle = () => {
		props.toggleNav();
		props.boxProjectNavStyle();
	}
	return (
		<div>
			<NavTrigger toggleNav={props.toggleNav} />
			<div className={cssClasses}>
				<ul>
					<li><Link to="/" onClick={props.toggleNav}><small className="uppercase">Home</small></Link></li>
					<li><Link to="/projects" onClick={toggleNav_boxProjectNavStyle}><small className="uppercase">Projects</small></Link></li>
					<li><Link to="/resume" onClick={props.toggleNav}><small className="uppercase">Resume</small></Link></li>
					<li><Link to="/contact" onClick={props.toggleNav}><small className="uppercase">Contact</small></Link></li>
				</ul>
			</div>
		</div>
	);
}

export default Nav;
