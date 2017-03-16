import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Nav from './Nav';
import Shroud from './Shroud';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Works from './pages/Works/Works';
import Topics from './pages/Topics/Topics';

import './App.css';

const Footer = () => (
	<div className="Footer">
		<p>footer content</p>
	</div>
)

class App extends Component {
	constructor() {
		super();
		this.state = {
			isNavOpen: false
		}
		this.toggleNav = this.toggleNav.bind(this);
	}
	toggleNav() {
		this.setState(prevState => ({
			isNavOpen: !prevState.isNavOpen
		}));
	}
	render() {
		return(
			<div className="App">
			  <Router>
				<div>
					<Nav handleClick={this.toggleNav} isNavOpen={this.state.isNavOpen} />
					<Shroud handleClick={this.toggleNav} isNavOpen={this.state.isNavOpen} />
					<div className="main-content">
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/works" component={Works}/>
						<Route path="/topics" component={Topics}/>
					</div>
					<Footer />
				</div>
			  </Router>
			</div>
		);
	}
}
export default App;
