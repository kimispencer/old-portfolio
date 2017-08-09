import React from 'react';
import ImageLoader from '../../components/ImageLoader/ImageLoader';
import DeviceFrame from '../../components/DeviceFrame/DeviceFrame';
import ReactPlayer from 'react-player'
import data from './data';

const PROJECTS = data;

class ProjectDetail extends React.Component {
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
			<div className="project-detail padded-width">
				<h3 className="title page-title serif">{project.name}</h3>
				<ImageLoader className="project-detail-cover" src={project.coverImg} />

				<section className="text-container flex-row responsive">
					<div className="text three-quarter-span" id="ProjectDescription">
						<p className="title uppercase bold">project description</p>
						<p dangerouslySetInnerHTML={{ __html: project.intro }}></p>

						<section className="project-video-list">
						{project.projectVids 
							? project.projectVids.map((video, index) => 
								<ReactPlayer className="project-video" url={video} key={index} width="100%" />
							)
							: null
						}
						</section>
						<section className="project-screenshot-list">
						{project.screenShots 
							? project.screenShots.map((img, index) => 
								<DeviceFrame type={img.split('-')[0]} src={img} imgKey={project.imgKey} key={index} />
							)
							: null
						}
						</section>
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

							{project.siteUrl
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
export default ProjectDetail;