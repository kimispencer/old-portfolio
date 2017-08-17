import React from 'react';
import { isDesktop } from '../../components/Responsive/Responsive';
import ImageLoader from '../../components/ImageLoader/ImageLoader';
import DeviceFrame from '../../components/DeviceFrame/DeviceFrame';
import Triangle from '../../../public/assets/icons/triangle.svg';
import ReactPlayer from 'react-player'
import data from './data';

// import PDF from '../../../public/assets/projects/rga/highline_user_study.pdf';
import PDF2 from '../../../public/assets/projects/rga/uniqlo.pdf';

const PROJECTS = data;

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

class ProjectDetail extends React.Component {
	constructor() {
		super();
		this._scrollTop = this._scrollTop.bind(this);
	}
	componentDidMount() {
		this._handleProjectNav();
	}
	_scrollTop() {
		scrollTo(document.body, 0, 600);
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
				{/*<ImageLoader className="project-detail-cover" src={project.heroImg} imgKey={project.imgKey} />*/}
				<ImageLoader className="project-detail-cover" src={project.hoverImg} />

				<section className="text-container flex-row responsive">
					<div className="text three-quarter-span" id="ProjectDescription">
						<p className="title uppercase bold">project description</p>
						<p dangerouslySetInnerHTML={{ __html: project.intro }}></p>

						<section className="project-video-list">
						{project.projectVids 
							? project.projectVids.map((video, index) => 
								<ReactPlayer className="project-video" id={`ProjectVideo${index}`} url={video} key={index} width="100%" />
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
						<section className="project-pdf-list">
							{project.projectPDFs
								?	project.projectPDFs.map((pdf, index) =>
									<embed className="pdf-viewer" src={PDF2} width="100%" key={index} />
								)
								: null
							}
							</section>
						{(!isDesktop() && project.siteUrl) &&
							<a href={project.siteUrl} target="_blank">
								<div className="button"><p>visit website</p></div>
							</a>
						}
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

							{(isDesktop() && project.siteUrl) &&
								<a href={project.siteUrl} target="_blank">
									<div className="button"><p>visit website</p></div>
								</a>
							}
						</div>
					</div>
				</section>
				<small className="back-to-top" onClick={this._scrollTop}><img alt="BackToTop" id="Triangle" src={Triangle} />Back Top</small>
			</div>
		);
	}
}
export default ProjectDetail;