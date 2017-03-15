import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Topics from './pages/Topics/Topics';

import './App.css';

const NavBar = () => (
	<div className="NavBar">
	  <ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/about">About</Link></li>
		<li><Link to="/topics">Topics</Link></li>
	  </ul>
	</div>
)

const Footer = () => (
	<div className="Footer">
		<p>footer content</p>
	</div>
)

class App extends Component {
	render() {
		return(
			<div className="App">
			  <Router>
				<div>
					<NavBar />
					<div className="main-content">
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
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

// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
// 	render() {
// 		return (
// 			<div class="App">
// 				<h1>hi</h1>
// 			</div>
// 		);
// 	}
// }

// export default App;
