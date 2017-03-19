import React from 'react';
import { 
	Route, 
	Link 
} from 'react-router-dom';

import './ProjectList.css';

const PROJECTS = [
	{url: 'john', name: "John", id: 120, age: 22, gender: "male", coverImg: "https://unsplash.it/500/500"},
	{url: 'beth', name: "Beth", id: 443, age: 24, gender: "female", coverImg: "https://unsplash.it/400/540"},
	{url: 'jane', name: "Jane", id: 510, age: 19, gender: "female", coverImg: "https://unsplash.it/500/450"}
];

const ProjectDetail = ({match}) => {
	const project = PROJECTS.filter(function (p) {
	    return p.url === match.params.id;
	})[0];
	// console.log(project)
	const style = {
		backgroundImage: 'url(' + project.coverImg + ')'
	}

	return(
		<div className="ProjectDetail" style={style}>
			<h3 className="title center">ProjectId: {match.params.id}</h3>
		</div>
	);
}

const ProjectItem = (props) => {
	return (
		<div className="ProjectItem">
			<div className="text">
				<h4>{props.project.url}</h4>
			</div>
		</div>
	);
}

const ProjectList = (props) => {
	return (
		<div className="ProjectList">
			<h4 className="title center">Projects</h4>
			<ul className="project-list">
				{PROJECTS.map((project, index) => 
					<li key={index}>
						 <Link to={props.match.url + '/' + project.url}>
							<ProjectItem project={project}/>
						</Link>
					</li>
				)}
			</ul>		
			<Route path={`${props.match.url}/:id`} component={ProjectDetail}/>
		</div>
	);
}
export default ProjectList;