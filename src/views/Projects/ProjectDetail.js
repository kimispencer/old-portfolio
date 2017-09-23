import React from 'react';
import { Link } from 'react-router-dom';
import { isDesktop } from '../../components/Responsive/Responsive';
import ImageLoader from '../../components/ImageLoader/ImageLoader';
import DeviceFrame from '../../components/DeviceFrame/DeviceFrame';
import TextContainer from '../../components/TextContainer/TextContainer';
import RightArrow from '../../../public/assets/icons/right-arrow.svg';
import LeftArrow from '../../../public/assets/icons/left-arrow.svg';
import Triangle from '../../../public/assets/icons/triangle.svg';
import ReactPlayer from 'react-player'
import data from './data';

import HighlinePDF from '../../../public/assets/projects/rga/highline_user_study.pdf';
import UniqloPDF from '../../../public/assets/projects/rga/uniqlo.pdf';
import ArrivalsWireframesPDF from '../../../public/assets/projects/arrivals/wireframes.pdf';
import ThesisPDF from '../../../public/assets/projects/data-visualization/thesis.pdf';
import BolsterPDF from '../../../public/assets/projects/bolster/bolster.pdf';
import BolsterSitemapPDF from '../../../public/assets/projects/bolster/bolster-sitemap.pdf';

const PDF_data = {
	highline_user_study: 'https://docs.google.com/presentation/d/e/2PACX-1vSBLWnJ7j5YSHGTOH05TEXetXfA5AgBYg2oazxmBILEbwPE1PrZXzMVNTTajffqyJs6hV8JKWCm2CAl/embed?start=false&loop=false&delayms=3000', //HighlinePDF,
	uniqlo_pitch: 'https://docs.google.com/presentation/d/e/2PACX-1vQYsB-snAT80AkoRhKP8r9HKFpFixHxbVppySxVTazhUldtUS_1ze04MVcZerYm5paPFLVyZec17imH/embed?start=false&loop=false&delayms=3000'//UniqloPDF,
	// arrivals_wireframes: ArrivalsWireframesPDF,
	// thesis: ThesisPDF,
	// bolster: BolsterPDF,
	// bolster_sitemap: BolsterSitemapPDF
}

const PROJECTS = data;

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop += perTick;
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
		scrollTo(document.body, 0, 750);
	}
	_handleProjectNav() {
		if(!this.props._projectNavStyle_isList) {
			this.props._handleProjectDetailLanding();
		}
	}
	render() {
		let projectIndex = null;
		const length = PROJECTS.length;
		const match = this.props.routeProps.match.params.id;
		let project = PROJECTS.filter(function (p, i) {
			if(p.url === match) {
				projectIndex = i;
			    return p;
			}
		})[0];
        const previous = (projectIndex + length - 1) % length;
        const next = (projectIndex + 1) % length;

		const prevLink = PROJECTS[previous] ? PROJECTS[previous].url : null;
		const nextLink = PROJECTS[next] ? PROJECTS[next].url : null;

		// const embeds = async Promise => {
		// 	project.projectPDFs.map(async (pdf, index) => {
		// 		// const pdfPath = await import(pdf);
		// 		// console.log(pdf)
		// 	    // return (<embed className="pdf-viewer" src={pdfPath} width="100%" key={index} />);
		// 	});
		// }
		// const embeds = async Promise.all(project.projectPDFs.map(async (pdf, index) => {
		// 	const pdfPath = await import(pdf);
		//     return (<embed className="pdf-viewer" src={pdfPath} width="100%" key={index} />);
		// }));
		
		return(
			<div className="project-detail padded-width">
				<h3 className="title page-title serif">{project.name}</h3>
				<TextContainer className="flex-row responsive">
					<div className="text three-quarter-span" id="ProjectDescription">
						<p className="title uppercase bold">project description</p>
						<p dangerouslySetInnerHTML={{ __html: project.intro }}></p>

						<section className="project-html-list">
						{project.projectHtml 
							? project.projectHtml.map((html, index) => 
								<span dangerouslySetInnerHTML={{ __html: html }} key={index}></span>
							)
							: null
						}
						</section>

						<section className="project-screenshot-list">
						{project.screenShots 
							? project.screenShots.map((img, index) => 
								<DeviceFrame className={index === 0 ? 'can-bounce' : ''} type={img.split('-')[0]} src={img} imgKey={project.imgKey} key={index} />
							)
							: null
						}
						</section>

						{/* !!! use Promises... figure out later */}
						<section className="project-pdf-list">
							{project.projectPDFs
								?	project.projectPDFs.map((pdf, index) =>
<iframe className="pdf-viewer" src={PDF_data[pdf]} frameborder="0" width="100%" height="auto" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
								)
								: null
							}
						</section>

						<section className="project-video-list">
						{project.projectVids 
							? project.projectVids.map((video, index) => 
								<ReactPlayer className="project-video" id={`ProjectVideo${index}`} url={video} key={index} width="100%" />
							)
							: null
						}
						</section>

						<ul className="project-image-list">
						{project.projectImgs 
							? project.projectImgs.map((img, index) => 
								<ImageLoader className="project-image" src={img} imgKey={project.imgKey} key={index} alt={`Project Detail Image -- ${project.imgKey}/${img}`} />
							)
							: null
						}
						</ul>

						{(!isDesktop() && project.siteUrl) &&
							<a href={project.siteUrl} target="_blank">
								<div className="button secondary"><p>visit website</p></div>
							</a>
						}
					</div>
					<div className="text quarter-span" id="ProjectSkillsList">
						<div className="flex-col">
							<p className="title uppercase bold">project type</p>
							<p className="monospace">{project.projectType}</p>

							<div className="project-roles">
								<p className="title uppercase bold">project role</p>
								{project.projectRole.map((role, index) =>
									<p className="monospace" key={index} >* {role}</p>
								)}
							</div>

							<p className="title uppercase bold">technology used</p>
							<p className="monospace">{project.technologyUsed}</p>

							{(isDesktop() && project.siteUrl) &&
								<a href={project.siteUrl} target="_blank">
									<div className="button secondary"><p>visit website</p></div>
								</a>
							}
						</div>
					</div>
				</TextContainer>
				<div className="bottom-navigation">
					<div className="prev-next-navigation">
						<div className="prev">
							{prevLink &&
							<Link to={`${this.props.match.url}/${prevLink}`} onClick={this.props._handleProjectNavClick}>
								<p className="uppercase text-arrow-container"><img className="arrow-icon" alt="Prev Arrow" id="LeftArrow" src={LeftArrow} /> prev</p>
							</Link>
							}
						</div>
						<div className="next">
							{nextLink &&
							<Link to={`${this.props.match.url}/${nextLink}`} onClick={this.props._handleProjectNavClick}>
								<p className="uppercase text-arrow-container">next <img className="arrow-icon" alt="Next Arrow" id="RightArrow" src={RightArrow} /></p>
							</Link>
							}
						</div>
					</div>
					{/*<small className="back-to-top link-text uppercase" onClick={this._scrollTop}><img alt="BackToTop" id="Triangle" src={Triangle} />Back Top</small>*/}
				</div>
			</div>
		);
	}
}
export default ProjectDetail;