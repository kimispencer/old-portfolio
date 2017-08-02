import React from 'react';
import { Route, Link } from 'react-router-dom';
import ImageLoader from '../../components/ImageLoader/ImageLoader';
import './ProjectList.css';
import data from './data';

const PROJECTS = data;

class ProjectDetail extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this._handleProjectNav();
	}
	_handleProjectNav() {
		if(!this.props._projectNavStyle_isList) {
			this.props._handleProjectDetailLanding();
		}
	}
	render() {
		let match = this.props.routeProps.match.params.id;
		let project = PROJECTS.filter(function (p) {
		    return p.url === match;
		})[0];

		return(
			<div className="ProjectDetail padded-width">
				<h3 className="title">{project.name}</h3>
				<ImageLoader className="project-detail-cover" src={project.coverImg} />

				<section className="project-screenshots">

					<div className="column">
						<figure className="fluidratio"></figure>
					</div>
					
					{ /*<div className="desktop-aspect-ratio">
						<div className="content">
							<img src="/frames/desktop.png" />
						</div>
					</div>
					
					<div className="laptop-aspect-ratio">
						<div className="content">
							<img src="/frames/laptop.png" />
						</div>
					</div>
					
					<div className="tablet-aspect-ratio">
						<div className="content">
							<img src="/frames/tablet.png" />
						</div>
					</div>

					<div className="phone-aspect-ratio">
						<div className="content">
							<img src="/frames/phone.png" />
						</div>
					</div> */}

				</section>

				<section className="text-container flex-row responsive">
					<div className="text three-quarter-span" id="ProjectDescription">
						<p className="title uppercase bold">project description</p>
						<p>{project.intro}</p>
						<br />
						<p>{project.intro}</p>
						<ul className="project-image-list">
						{project.projectImgs 
							? project.projectImgs.map((img, index) => 
								<ImageLoader className="project-image" src={img} imgKey={project.imgKey} key={index} />
							)
							: null
						}
						</ul>
					</div>
					<div className="text quarter-span" id="ProjectSkillsList">
						<div className="flex-col">
							<p className="title uppercase bold">project type</p>
							<p className="monospace">{project.projectType}</p>

							<p className="title uppercase bold">project role</p>
							{project.projectRole.map((role, index) =>
								<p className="monospace" key={index} >* {role}</p>
							)}

							<p className="title uppercase bold">technology used</p>
							<p className="monospace">{project.technologyUsed}</p>

							{ project.siteUrl
								? <a href={project.siteUrl} target="_blank">
									<div className="button"><p>visit website</p></div>
								</a>
								: null
							}
						</div>
					</div>
				</section>

			</div>
		);
	}
}

const ProjectListItem = (props) => {
	let navStyle = props._projectNavStyle_isList ? 'list-style' : 'box-style';
	let classes = `${navStyle} ProjectListItem`;

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

const ProjectList = (props) => {
	const _handleProjectNavClick = () => {
		window.scrollTo(0, 0);
		props._handleProjectDetailLanding();
	}
	return(
		<div className="ProjectList">

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

export default ProjectList;