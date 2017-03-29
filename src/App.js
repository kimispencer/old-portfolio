import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// libraries
import smoothScroll from 'smoothscroll';

import Nav from './Nav';
import Shroud from './Shroud';
import Home from './pages/Home/Home';
import ProjectList from './pages/Projects/ProjectList';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';

import './App.css';

const Footer = (props) => {
	return (
		<div className="Footer">
			<p>footer content</p>
			<br />
			<p onClick={props.smoothScrollTop} >smooth scroll top ^</p>
		</div>
	);
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isProjectNavOpen: false,
			projectNavStyle_isList: false,
		}
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleProjectNav = this.toggleProjectNav.bind(this);
		this.changeProjectNavStyle = this.changeProjectNavStyle.bind(this);
		this.changeProjectNavStyle_toBox = this.changeProjectNavStyle_toBox.bind(this);
		this.smoothScrollTop = this.smoothScrollTop.bind(this);
		this.sayHi = this.sayHi.bind(this);
	}
	toggleNav() {
		this.setState(prevState => ({
			isNavOpen: !prevState.isNavOpen,
		}));
	}
	toggleProjectNav() {
		this.setState(prevState => ({
			isProjectNavOpen: !prevState.isProjectNavOpen,
			projectNavStyle_isList: true,
		}));
	}
	changeProjectNavStyle() {
		this.setState(prevState => ({
			isProjectNavOpen: false,
			projectNavStyle_isList: !prevState.projectNavStyle_isList,
		}));
	}
	changeProjectNavStyle_toBox() {
		this.setState({
			projectNavStyle_isList: false
		});
	}
	smoothScrollTop() {
		smoothScroll(0); // tech should fire when Route change is complete
	}
	sayHi() {
		console.log('hi')
	}
	render() {
		return(
			<div className="App">
			  <Router>
				<div>
					<Nav toggleNav={this.toggleNav} isNavOpen={this.state.isNavOpen} changeProjectNavStyle_toBox={this.changeProjectNavStyle_toBox}/>
					<div className="main-content">
						<Route exact path="/" component={Home}/>
						<Route path="/projects" component={(props, state, params) => 
							<ProjectList 
								isProjectNavOpen={this.state.isProjectNavOpen} 
								toggleProjectNav={this.toggleProjectNav} 
								projectNavStyle_isList={this.state.projectNavStyle_isList} 
								changeProjectNavStyle={this.changeProjectNavStyle} 
								sayHi={this.sayHi}
							{...props} />} />
						<Route path="/resume" component={Resume}/>
						<Route path="/contact" component={Contact}/>
					</div>
					<Shroud handleClick={this.toggleNav} isNavOpen={this.state.isNavOpen} />
					<Footer smoothScrollTop={this.smoothScrollTop} />
				</div>
			  </Router>
			</div>
		);
	}
}
export default App;