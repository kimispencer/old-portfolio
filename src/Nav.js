import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

import './Nav.css';

/*
	3 different ways to write a stateless functional component:
*/

/* traditional JS */
// function NavTrigger(props) {
// 	return(
// 		<div className="NavTrigger" onClick={props.handleClick}>
// 			<p>nav trigger</p>
// 		</div>		
// 	);
// }

/* ES6 */
// const NavTrigger = (props) => {
// 	return (
// 		<div className="NavTrigger" onClick={props.handleClick}>
// 			<p>nav trigger</p>
// 		</div>
// 	);
// }

/* ES 6 */
const NavTrigger = (props) => (
	<div className="NavTrigger" onClick={props.handleClick}>
		<p>|||</p>
	</div>
)

class Nav extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}));
	}
	render() {
		let open = this.state.isOpen ? 'open' : 'closed';
		let cssClasses = `${open} Nav`;
		return(
			<div>
				<NavTrigger handleClick={this.handleClick} />
				<div className={cssClasses}>
					<ul>
						<li><Link to="/" onClick={this.handleClick}><p>Home</p></Link></li>
						<li><Link to="/about" onClick={this.handleClick}><p>About</p></Link></li>
						<li><Link to="/works" onClick={this.handleClick}><p>Works</p></Link></li>
						<li><Link to="/topics" onClick={this.handleClick}><p>Topics</p></Link></li>
					</ul>
				</div>
			</div>
		);
	}
}

// function logUpdate() {
// 	console.log('current url: ' + window.location.pathname);
// }

export default Nav;