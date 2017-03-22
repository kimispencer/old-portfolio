import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Nav from './Nav';
import Shroud from './Shroud';
import Home from './pages/Home/Home';
import ProjectList from './pages/Projects/ProjectList';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';

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
			isNavOpen: false,
			isProjectNavOpen: false,
			projectNavStyle_isList: false,
		}
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleProjectNav = this.toggleProjectNav.bind(this);
		this.changeProjectNavStyle = this.changeProjectNavStyle.bind(this);
		this.changeProjectNavStyle_toBox = this.changeProjectNavStyle_toBox.bind(this);
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
	render() {
		return(
			<div className="App">
			  <Router>
				<div>
					<Nav toggleNav={this.toggleNav} isNavOpen={this.state.isNavOpen} toggleProjectNav={this.state.toggleProjectNav} changeProjectNavStyle_toBox={this.changeProjectNavStyle_toBox}/>
					<div className="main-content">
						<Route exact path="/" component={Home}/>
						<Route path="/projects" component={(props, state, params) => 
							<ProjectList 
								changeProjectNavStyle={this.changeProjectNavStyle} 
								listStyle={this.state.projectNavStyle_isList} 
								toggleProjectNav={this.toggleProjectNav} 
								isProjectNavOpen={this.state.isProjectNavOpen} 
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