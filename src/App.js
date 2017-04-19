import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// libraries
import smoothScroll from 'smoothscroll';
// components
import Nav from './layout/Nav/Nav';
import ScrollBar from './common/ScrollBar/ScrollBar';
import Shroud from './common/Shroud/Shroud';
import Home from './pages/Home/Home';
import ProjectList from './pages/Projects/ProjectList';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';
import Footer from './layout/Footer/Footer';
// css
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			_isNavOpen: false,
			_isProjectNavOpen: true,
			_projectNavStyle_isList: false,
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
	/* runs on initial mount */
	componentDidMount() {
	}
	/* run everytime component is updated (past initial mount) */
	componentDidUpdate() {
	}
	componentWillUnmount() {
	}

	_smoothScroll(loc) {
		smoothScroll(loc);
	}
	_toggleNav() {
		this.setState(prevState => ({
			_isNavOpen: !prevState._isNavOpen,
		}));
	}
	_toggleProjectNav() {
		this.setState(prevState => ({
			_isProjectNavOpen: !prevState._isProjectNavOpen,
		}));
	}
	_changeProjectNavStyle() {
		this.setState(prevState => ({
			_projectNavStyle_isList: !prevState._projectNavStyle_isList,
		}));
	}
	_changeProjectNavStyle_toBox() {
		this.setState({
			_projectNavStyle_isList: false
		});
	}
	_changeProjectNavStyle_toList() {
		this.setState({
			_projectNavStyle_isList: true
		});
	}
	_handleProjectLanding() {
		this.setState(prevState => ({
			_isProjectNavOpen: true,
			_projectNavStyle_isList: false,
		}));
	}
	_handleProjectDetailLanding() {
		this.setState(prevState => ({
			_isProjectNavOpen: false,
			_projectNavStyle_isList: true,
		}));
		/* breakpoint 769px */
		let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if(width > 768) {
			this.setState(prevState => ({
				_isProjectNavOpen: true,
			}));
		}
	}
	_sayHi() {
		console.log('hi')
	}
	render() {
		return(
			<div className="App">
				<Router>
				<div>
					<ScrollBar />
					<Nav 
						_isNavOpen={this.state._isNavOpen} 
						_toggleNav={this._toggleNav} 
						_isProjectNavOpen={this.state._isProjectNavOpen} 
						_toggleProjectNav={this._toggleProjectNav} 
						_changeProjectNavStyle_toBox={this._changeProjectNavStyle_toBox} />
					<div className="main-content">
						<Route exact path="/" component={Home}/>
						<Route path="/projects" component={(props, state, params) => 
							<ProjectList 
								_changeProjectNavStyle={this._changeProjectNavStyle} 
								_changeProjectNavStyle_toList={this._changeProjectNavStyle_toList}
								_projectNavStyle_isList={this.state._projectNavStyle_isList} 
								_toggleProjectNav={this._toggleProjectNav} 
								_isProjectNavOpen={this.state._isProjectNavOpen} 
								_handleProjectLanding={this._handleProjectLanding}
								_handleProjectDetailLanding={this._handleProjectDetailLanding}
							{...props} />} />
						<Route path="/resume" component={Resume}/>
						<Route path="/contact" component={Contact}/>
					</div>
					<Shroud handleClick={this._toggleNav} _isNavOpen={this.state._isNavOpen} />
					<Footer />
				</div>
				</Router>
			</div>
		);
	}
}
export default App;