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
import Footer from './Footer';

import './App.css';

const ScrollBar = () => {
	return(
		<progress id="ScrollProgress" max="100" value="0"></progress>
	);
}

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
	componentDidMount() {	/* runs on initial mount */
		this._setLayout();
	}
	componentDidUpdate() {	/* run everytime component is updated (past initial mount) */
		this._setLayout();
		this._setScrollProgress();		// not waiting for images to load...
		window.addEventListener('scroll', this._handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this._handleScroll);
	}
	_setLayout() {
		var svg = document.getElementById("StarSVG");
		if(svg) {
			document.getElementById("MobileSVG").appendChild(svg); 			
		}
	}
	_setScrollProgress() {
		var height = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
			document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
// console.log('max,' + (height - window.innerHeight))
		document.getElementById('ScrollProgress').max = (height - window.innerHeight);
	}
	_handleScroll() {
		let scrollTop = window.pageYOffset | document.body.scrollTop;
// console.log('scroll, ' + scrollTop)
		document.getElementById('ScrollProgress').value = scrollTop;

		/* SVG scroll animation */
		// Get a reference to the <path>
		var path = document.querySelector('#StarPath');
		if(path) {
			// Get length of path... ~577px in this case
			var pathLength = path.getTotalLength();

			// Make very long dashes (the length of the path itself)
			path.style.strokeDasharray = pathLength + ' ' + pathLength;

			// Offset the dashes so the it appears hidden entirely
			path.style.strokeDashoffset = pathLength;

			// Jake Archibald says so
			// https://jakearchibald.com/2013/animated-line-drawing-svg/
			path.getBoundingClientRect();

			// When the page scrolls...
			window.addEventListener("scroll", function(e) {

				// What % down is it? 
				// https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
				// Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
				var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

				// Length to offset the dashes
				var drawLength = pathLength * scrollPercentage;

				// Draw in reverse
				path.style.strokeDashoffset = pathLength - drawLength;

				// When complete, remove the dash array, otherwise shape isn't quite sharp
				// Accounts for fuzzy math
				if (scrollPercentage >= 0.99) {
					path.style.strokeDasharray = "none";

				} else {
					path.style.strokeDasharray = pathLength + ' ' + pathLength;
				}

			});
		}
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
		var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
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