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
			showProjectNav: false,
			projectNavStyle_list: false,
		}
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleProjectNav = this.toggleProjectNav.bind(this);
		this.changeProjectNavStyle = this.changeProjectNavStyle.bind(this);
	}
	toggleNav() {
		this.setState(prevState => ({
			isNavOpen: !prevState.isNavOpen,
		}));
	}
	toggleProjectNav() {
		this.setState(prevState => ({
			showProjectNav: !prevState.showProjectNav,
			projectNavStyle_list: true,
		}));
	}
	changeProjectNavStyle() {
		this.setState(prevState => ({
			showProjectNav: false,
			projectNavStyle_list: !prevState.projectNavStyle_list,
		}));
	}
	boxProjectNavStyle() {
		this.setState({
			projectNavStyle_list: false
		});
	}
	render() {
		return(
			<div className="App">
			  <Router>
				<div>
					<Nav toggleNav={this.toggleNav} isNavOpen={this.state.isNavOpen} boxProjectNavStyle={this.boxProjectNavStyle}/>
					<div className="main-content">
						<Route exact path="/" component={Home}/>
						<Route path="/projects" component={(props, state, params) => 
							<ProjectList 
								changeProjectNavStyle={this.changeProjectNavStyle} 
								listStyle={this.state.projectNavStyle_list} 
								toggleProjectNav={this.toggleProjectNav} 
								showProjectNav={this.state.showProjectNav} 
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