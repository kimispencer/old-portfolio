import React from 'react';
import { Route, Link } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';
import ImageLoader from '../../components/ImageLoader/ImageLoader';
import data from './data';
import './Projects.css';

const PROJECTS = data;

const ProjectListItem = (props) => {
	let navStyle = props._projectNavStyle_isList ? 'list-style' : 'box-style';
	let classes = `${navStyle} project-list-item`;

	return (
		<div className={classes} onClick={props.handleClick} >
			<ImageLoader src={props.project.coverImg} />
			<div className="text monospace">
				<h4 className="project-name">{props.project.name}</h4>
				<p className="project-type">{props.project.projectType}</p>
			</div>
		</div>
	);
}

const Projects = (props) => {
	const _handleProjectNavClick = () => {
		window.scrollTo(0, 0);
		props._handleProjectDetailLanding();
	}
	return(
		<div className="projects">

			{ /*props._projectNavStyle_isList 
				? <Link to={props.match.url} onClick={props._handleProjectPageLanding}>
					<h4 className="title center" id="PageTitle">Projects</h4>
				</Link>
				: null
			*/ }
			
			{ props._projectNavStyle_isList
				? <div className="center title monospace" onClick={props._toggleProjectNav} id="Menu">Menu</div>
				: null
			}

			{ /*<SlideExample match={props.match} _isProjectNavOpen={props._isProjectNavOpen} _toggleProjectNav={props._toggleProjectNav} /> */ }

			{ props._isProjectNavOpen 
				? <ul className={`project-list ${props._projectNavStyle_isList ? 'list-style' : 'box-style'}`}>
					{ PROJECTS.map((project, index) => 
					<li key={index} >
						 <Link to={props.match.url + '/' + project.url} >
							<ProjectListItem 
								project={project} 
								handleClick={_handleProjectNavClick} 
								_projectNavStyle_isList={props._projectNavStyle_isList}/>
						</Link>
					</li>
					) }
				</ul>
				: null
			}

			<Route path={`${props.match.url}/:id`} component={(routeProps, state, params) => 
				<ProjectDetail 
					_handleProjectDetailLanding={props._handleProjectDetailLanding}
					routeProps={routeProps}
				{...props} />} />

		</div>
	);
}

export default Projects;