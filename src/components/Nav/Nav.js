import React from 'react';
import {
	Link
} from 'react-router-dom';

import './Nav.css';

const NavTrigger = (props) => (
	<div className="NavTrigger" onClick={props._toggleNav}>
		<h3 className="bold">|||</h3>
	</div>
)

const Nav = (props) => {
	let open = props._isNavOpen ? 'open' : 'closed';
	let cssClasses = `${open} Nav`;

	const handle_navClick = () => {
		props._toggleNav();
		window.scrollTo(0, 0);
	}
	const handle_navClick_Projects = () => {
		props._toggleNav();
		if(!props._isProjectNavOpen) props._toggleProjectNav();
		props._toggleProjectNavStyle_toBox();
		window.scrollTo(0, 0);
	}

	return (
		<div>
			<NavTrigger _toggleNav={props._toggleNav} />
			<div className={cssClasses}>
				<ul>
					<li><Link to="/" onClick={handle_navClick}><small className="uppercase">Home</small></Link></li>
					<li><Link to="/projects" onClick={handle_navClick_Projects}><small className="uppercase">Projects</small></Link></li>
					<li><Link to="/resume" onClick={handle_navClick}><small className="uppercase">Resume</small></Link></li>
					{ /*<li><Link to="/contact" onClick={handle_navClick}><small className="uppercase">Contact</small></Link></li>*/ }
				</ul>
			</div>
		</div>
	);
}

export default Nav;
