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
		this._toggleNav = this._toggleNav.bind(this);
		this._toggleProjectNav = this._toggleProjectNav.bind(this);
		this._changeProjectNavStyle = this._changeProjectNavStyle.bind(this);
		this._changeProjectNavStyle_toBox = this._changeProjectNavStyle_toBox.bind(this);
		this._changeProjectNavStyle_toList = this._changeProjectNavStyle_toList.bind(this);
		this._smoothScroll = this._smoothScroll.bind(this);
		this._handleProjectLanding= this._handleProjectLanding.bind(this);
		this._handleProjectDetailLanding = this._handleProjectDetailLanding.bind(this);
		this._sayHi = this._sayHi.bind(this);
	}
	_smoothScroll(loc) {
		smoothScroll(loc);
	}
	_toggleNav() {
		this.setState(prevState => ({
			isNavOpen: !prevState.isNavOpen,
		}));
	}
	_toggleProjectNav() {
		this.setState(prevState => ({
			isProjectNavOpen: !prevState.isProjectNavOpen,
		}));
	}
	_changeProjectNavStyle() {
		this.setState(prevState => ({
			projectNavStyle_isList: !prevState.projectNavStyle_isList,
		}));
	}
	_changeProjectNavStyle_toBox() {
		this.setState({
			projectNavStyle_isList: false
		});
	}
	_changeProjectNavStyle_toList() {
		this.setState({
			projectNavStyle_isList: true
		});
	}
	_handleProjectLanding() {
		this.setState(prevState => ({
			isProjectNavOpen: true,
			projectNavStyle_isList: false,
		}));
	}
	_handleProjectDetailLanding() {
		this.setState(prevState => ({
			isProjectNavOpen: false,
			projectNavStyle_isList: true,
		}));
	}
	_sayHi() {
		console.log('hi')
	}
	render() {
		return(
			<div className="App">
			  <Router>
				<div>
					<Nav 
						isNavOpen={this.state.isNavOpen} 
						_toggleNav={this._toggleNav} 
						isProjectNavOpen={this.state.isProjectNavOpen} 
						_toggleProjectNav={this._toggleProjectNav} 
						_changeProjectNavStyle_toBox={this._changeProjectNavStyle_toBox} />
					<div className="main-content">
						<Route exact path="/" component={Home}/>
						<Route path="/projects" component={(props, state, params) => 
							<ProjectList 
								_changeProjectNavStyle={this._changeProjectNavStyle} 
								_changeProjectNavStyle_toList={this._changeProjectNavStyle_toList}
								projectNavStyle_isList={this.state.projectNavStyle_isList} 
								_toggleProjectNav={this._toggleProjectNav} 
								isProjectNavOpen={this.state.isProjectNavOpen} 
								_handleProjectLanding={this._handleProjectLanding}
								_handleProjectDetailLanding={this._handleProjectDetailLanding}
							{...props} />} />
						<Route path="/resume" component={Resume}/>
						<Route path="/contact" component={Contact}/>
					</div>
					<Shroud handleClick={this._toggleNav} isNavOpen={this.state.isNavOpen} />
					<Footer />
				</div>
			  </Router>
			</div>
		);
	}
}
export default App;