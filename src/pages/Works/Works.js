import React from 'react';
import { Route, Link } from 'react-router-dom';


const Work = ({ match }) => (
	<div className="Work">
		<h3>{match.params.topicId}</h3>
	</div>
	)

const Works = ({ match }) => (
	<div className="Works">
		<h2 className="title center">Works</h2>
		<Route exact path={match.url} render={() => (
			<h3>Please select a topic.</h3>
			)}/>
		<Route path={`${match.url}/:topicId`} component={Work}/>

		<ul>
			<li>
				<Link to={`${match.url}/rendering`}>
					Rendering with React
				</Link>
			</li>
			<li>
				<Link to={`${match.url}/components`}>
					Components
				</Link>
			</li>
			<li>
				<Link to={`${match.url}/props-v-state`}>
					Props v. State
				</Link>
			</li>
		</ul>
	</div>
	)
export default Works;