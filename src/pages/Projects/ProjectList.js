import React from 'react';
import { 
	Route, 
	Link 
} from 'react-router-dom';

import './ProjectList.css';

const ProjectDetail = ({match}) => (
	<div className="ProjectDetail">
		<h3 className="title center">ProjectId: {match.params.projectId}</h3>
	</div>
)

const ProjectItem = (props) => {
	const style = {
		backgroundImage: 'url(' + props.project.coverImg + ')'
	}
	return (
		<div className="ProjectItem" style={style}>
			<div className="text">
				<h4>{props.project.url}</h4>
			</div>
		</div>
	);
}

const ProjectList = (props) => {
	let projects = [
		{url: 'john', name: "John", id: 120, age: 22, gender: "male", coverImg: "https://unsplash.it/500/500"},
		{url: 'beth', name: "Beth", id: 443, age: 24, gender: "female", coverImg: "https://unsplash.it/500/500"},
		{url: 'jane', name: "Jane", id: 510, age: 19, gender: "female", coverImg: "https://unsplash.it/500/500"}
	];
	return (
		<div className="ProjectList">
			<h4 className="title center">Projects</h4>		
			
			<Route exact path={props.match.url} render={() => (
			  <p>Please select a project.</p>
			)}/>
			<Route path={`${props.match.url}/:projectId`} component={ProjectDetail}/>

			<ul className="project-list">
				{projects.map((project, index) => 
					<li key={index}>
						 <Link to={props.match.url + '/' + project.url}>
							<ProjectItem project={project}/>
						</Link>
					</li>
				)}
			</ul>
		</div>
	);
}
export default ProjectList;