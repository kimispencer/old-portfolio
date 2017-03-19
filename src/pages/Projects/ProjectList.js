import React from 'react';
import { 
	Route, 
	Link 
} from 'react-router-dom';

import './ProjectList.css';

const ProjectDetail = ({match}) => (
	<div>
		<h3>ID: {match.params.id}</h3>
	</div>
)

const ProjectItem = (props) => {
	const style = {
		backgroundImage: 'url(' + props.project.coverImg + ')'
	}
	return (
		<div className="ProjectItem" style={style}>
			<div className="text">
				{props.project.name}
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
			<h4 className="title center">Project</h4>		
			<ul className="project-list">
				{projects.map((project, index) => 
					<Link to={project.url} key={index}>
						<ProjectItem project={project}/>
					</Link>
				)}
			</ul>
			<Route path="/:id" component={ProjectDetail}/>
		</div>
	);
}
export default ProjectList;