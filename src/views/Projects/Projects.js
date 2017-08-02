import React from 'react';
import { Route, Link } from 'react-router-dom';
// import ProjectStore from '../../stores/ProjectStore';
// import ProjectActions from '../../actions/ProjectActions';
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

class Projects extends React.Component {
	constructor() {
		super();
		this._handleProjectNavClick = this._handleProjectNavClick.bind(this);
	}
	_handleProjectNavClick() {
		window.scrollTo(0, 0);
		this.props._handleProjectDetailLanding();
	}
	render() {
		return(
			<div className="projects">

				{ /*props._projectNavStyle_isList 
					? <Link to={props.match.url} onClick={props._handleProjectPageLanding}>
						<h4 className="title center" id="PageTitle">Projects</h4>
					</Link>
					: null
				*/ }
				
				{ this.props._projectNavStyle_isList
					? <div className="center title monospace" onClick={this.props._toggleProjectNav} id="Menu">Menu</div>
					: null
				}

				{ /*<SlideExample match={props.match} _isProjectNavOpen={props._isProjectNavOpen} _toggleProjectNav={props._toggleProjectNav} /> */ }

				{ this.props._isProjectNavOpen 
					? <ul className={`project-list ${this.props._projectNavStyle_isList ? 'list-style' : 'box-style'}`}>
						{ PROJECTS.map((project, index) => 
						<li key={index} >
							 <Link to={this.props.match.url + '/' + project.url} >
								<ProjectListItem 
									project={project} 
									handleClick={this._handleProjectNavClick} 
									_projectNavStyle_isList={this.props._projectNavStyle_isList}/>
							</Link>
						</li>
						) }
					</ul>
					: null
				}

				<Route path={`${this.props.match.url}/:id`} component={(routeProps, state, params) => 
					<ProjectDetail 
						_handleProjectDetailLanding={this.props._handleProjectDetailLanding}
						routeProps={routeProps}
					{...this.props} />} />

			</div>
		);
	}
}

export default Projects;