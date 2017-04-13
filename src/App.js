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
		</div>
	);
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			isNavOpen: false,
			isProjectNavOpen: true,
			projectNavStyle_isList: false,
		}
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleProjectNav = this.toggleProjectNav.bind(this);
		this.changeProjectNavStyle = this.changeProjectNavStyle.bind(this);
		this.changeProjectNavStyle_toBox = this.changeProjectNavStyle_toBox.bind(this);
		this.changeProjectNavStyle_toList = this.changeProjectNavStyle_toList.bind(this);
		this.smoothScroll = this.smoothScroll.bind(this);
		this.handleProjectLanding= this.handleProjectLanding.bind(this);
		this.handleProjectDetailLanding = this.handleProjectDetailLanding.bind(this);
		this.sayHi = this.sayHi.bind(this);
	}
	smoothScroll(loc) {
		smoothScroll(loc);
	}
	toggleNav() {
		this.setState(prevState => ({
			isNavOpen: !prevState.isNavOpen,
		}));
	}
	toggleProjectNav() {
		this.setState(prevState => ({
			isProjectNavOpen: !prevState.isProjectNavOpen,
		}));
	}
	changeProjectNavStyle() {
		this.setState(prevState => ({
			projectNavStyle_isList: !prevState.projectNavStyle_isList,
		}));
	}
	changeProjectNavStyle_toBox() {
		this.setState({
			projectNavStyle_isList: false
		});
	}
	changeProjectNavStyle_toList() {
		this.setState({
			projectNavStyle_isList: true
		});
	}
	handleProjectLanding() {
		this.setState(prevState => ({
			isProjectNavOpen: true,
			projectNavStyle_isList: false,
		}));
	}
	handleProjectDetailLanding() {
		this.setState(prevState => ({
			isProjectNavOpen: false,
			projectNavStyle_isList: true,
		}));
	}
	sayHi() {
		console.log('hi')
	}
	render() {
		return(
			<div className="App">
			  <Router>
				<div>
					<Nav 
						isNavOpen={this.state.isNavOpen} 
						toggleNav={this.toggleNav} 
						isProjectNavOpen={this.state.isProjectNavOpen} 
						toggleProjectNav={this.toggleProjectNav} 
						changeProjectNavStyle_toBox={this.changeProjectNavStyle_toBox} />
					<div className="main-content">
						<Route exact path="/" component={Home}/>
						<Route path="/projects" component={(props, state, params) => 
							<ProjectList 
								changeProjectNavStyle={this.changeProjectNavStyle} 
								changeProjectNavStyle_toList={this.changeProjectNavStyle_toList}
								projectNavStyle_isList={this.state.projectNavStyle_isList} 
								toggleProjectNav={this.toggleProjectNav} 
								isProjectNavOpen={this.state.isProjectNavOpen} 
								handleProjectLanding={this.handleProjectLanding}
								handleProjectDetailLanding={this.handleProjectDetailLanding}
							{...props} />} />
						<Route path="/resume" component={Resume}/>
						<Route path="/contact" component={Contact}/>
					</div>
					<Shroud handleClick={this.toggleNav} isNavOpen={this.state.isNavOpen} />
					<Footer />
				</div>
			  </Router>
			</div>
		);
	}
}
export default App;