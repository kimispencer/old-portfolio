import React from 'react';
// import { Route, Link } from 'react-router-dom';

import './WorkList.css';

const WorkItem = (props) => {
	const style = {
		backgroundImage: 'url(' + props.project.coverImg + ')'
	}
	return (
		<div className="WorkItem" style={style}>
			<div className="text">
				{props.project.name}
			</div>
		</div>
	);
}

const WorkList = () => {
	let projects = [
		{name: "John", id: 120, age: 22, gender: "male", coverImg: "https://unsplash.it/500/500"},
		{name: "Beth", id: 443, age: 24, gender: "female", coverImg: "https://unsplash.it/500/500"},
		{name: "Jane", id: 510, age: 19, gender: "female", coverImg: "https://unsplash.it/500/500"}
	];
	return (
		<div className="WorkList">
			<h4 className="title center">Works</h4>
			<ul className="work-list">
				{projects.map((project, index) => <WorkItem project={project} key={index}/>)}
			</ul>
		</div>
	);
}
export default WorkList;