import React from 'react';
import { 
	Route, 
	Link 
} from 'react-router-dom';

import './ProjectList.css';

const PROJECTS = [
	{
		url: 'arrivals', 
		name: "The Arrivals", 
		coverImg: "https://unsplash.it/500/500"
	},
	{
		url: 'suited', 
		name: "Suited Magazine", 
		coverImg: "https://unsplash.it/410/540"
	},
	{
		url: 'onomie', 
		name: "Onomie", 
		coverImg: "https://unsplash.it/420/540"
	},
	{
		url: 'brainchild', 
		name: "BrainchildCo",  
		coverImg: "https://unsplash.it/500/450"
	},
	{
		url: 'bolster', 
		name: "Bolster",  
		coverImg: "https://unsplash.it/510/450"
	},
	{
		url: 'plusign', 
		name: "Plusign",  
		coverImg: "https://unsplash.it/520/450"
	},
	{
		url: 'live-visuals', 
		name: "Live Visuals",  
		coverImg: "https://unsplash.it/530/450"
	},
	{
		url: 'dataviz', 
		name: "Data Visualization",  
		coverImg: "https://unsplash.it/540/450"
	}
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
			<h3 className="title center">{project.name}</h3>
		</div>
	);
}

const ProjectItem = (props) => {
	const style = {
		backgroundImage: 'url(' + props.project.coverImg + ')'
	}
	return (
		<div className="ProjectItem" style={style}>
			<div className="text">
				<p>{props.project.name}</p>
			</div>
		</div>
	);
}

const ProjectList = (props) => {
	return (
		<div className="ProjectList">
			<Link to={props.match.url}>
				<h4 className="title center">Projects</h4>
			</Link>
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