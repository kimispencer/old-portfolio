import React from 'react';
import { Link } from 'react-router-dom';
import { isDesktop } from '../../components/Responsive/Responsive';
import Logo from '../../../public/assets/logo.svg';
import './Nav.css';

const NavTrigger = (props) => (
	<div className="nav-trigger" onClick={props._toggleNav}>
		<h3 className="bold">|||</h3>
	</div>
)

const Nav = (props) => {
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
			{!isDesktop() &&
				<div className="logo-container">
					<Link to="/"><img alt="logo" id="Logo" src={Logo} /></Link>
				</div>	
			}	
			<div className={`${props._isNavOpen ? 'open' : 'closed'} nav`}>
				{isDesktop() &&
					<div className="logo-container">
						<Link to="/" onClick={handle_navClick}><img alt="logo" id="Logo" src={Logo} /></Link>
					</div>	
				}	
				<ul className="nav-links">
					<li><Link to="/projects" onClick={handle_navClick_Projects}><small className="uppercase">Projects</small></Link></li>
					<li><Link to="/resume" onClick={handle_navClick}><small className="uppercase">Resume</small></Link></li>
					<li><Link to="/contact" onClick={handle_navClick}><small className="uppercase">Contact</small></Link></li>
				</ul>
			</div>
		</div>
	);
}

export default Nav;
