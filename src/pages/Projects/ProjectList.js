import React from 'react';
import { 
	Route, 
	Link 
} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// libraries
import BackgroundImage from 'react-background-image-loader';
// css
import './ProjectList.css';

const PROJECTS = [
	{
		url: 'arrivals',
		name: "The Arrivals NYC", 
		coverImg: "http://kimispencer.com/assets/portfolio/thearrivals/thearrivals.png",
		siteUrl: 'http://thearrivals.com',
		projectType: 'Responsive Ecommerce website',
		projectRole: [
			'Lead Front-end developer',
			'Lead UX designer',
			'Responsive web design',
			'CMS backend integration',
			'Weekly interactive site campaigns'
		],
		technologyUsed: 'HTML5, CSS3/LESS, jQUERY, Gulp, Ajax, PHP, Photoshop, Sketch, Git',
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'
	},
	{
		url: 'suited', 
		name: "Suited Magazine", 
		coverImg: "http://kimispencer.com/assets/portfolio/suited/suited-00.png",
		siteUrl: 'http://suitedmagazine.com',
		projectType: 'Responsive Editorial/Arts Publication website',
		projectRole: [
			'Custom SquareSpace template design & development',
			'Lead Front-end developer',
			'Lead UX designer',
			'Responsive web design',
			'CMS backend integration',
		],
		technologyUsed: 'HTML5, CSS3/LESS, jQUERY, Gulp, Ajax, PHP, Photoshop, Sketch, SquareSpace, Git',
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'
	},
	{
		url: 'kimispencer', 
		name: "Portfolio", 
		coverImg: "https://unsplash.it/1205/580",
		projectType: 'ReactJS portfolio site',
		projectRole: [
			'Lead Front-end developer',
			'Lead Visual & UX designer',
			'Responsive web design',
		],
		technologyUsed: 'ReactJS, HTML5, CSS3/SASS, Webpack, Sketch, Git',
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'
	},
	{
		url: 'onomie', 
		name: "Onomie", 
		coverImg: "http://kimispencer.com/assets/portfolio/onomie/onomie-00.png",
		siteUrl: 'http://onomie.com',
		projectType: 'Responsive Ecommerce website',
		projectRole: [
			'Lead Front-end developer',
			'Lead UX designer',
			'Responsive web design',
			'CMS backend integration',
			'Monthly interactive site campaigns'
		],
		technologyUsed: 'HTML5, CSS3/LESS, jQUERY, Gulp, Ajax, PHP, Photoshop, Sketch, Git',
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'

	},
	{
		url: 'brainchild', 
		name: "Brainchild.Co",  
		coverImg: "http://kimispencer.com/assets/portfolio/brainchild/brainchild-00.png",
		siteUrl: 'http://brainchild.co',
		projectType: 'Corporate Portfolio website',
		projectRole: [
			'Lead Front-end developer',
			'Lead Visual & UX designer',
			'Responsive web design',
			'CMS backend integration',
		],
		technologyUsed: 'HTML5, CSS3/LESS, jQUERY, Gulp, Ajax, Django, Python, Photoshop, Sketch, Git',
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'

	},
	{
		url: 'bolster', 
		name: "Bolster",  
		coverImg: "https://unsplash.it/1214/450",
		siteUrl: 'http://bolster.us',
		projectType: 'AngularJS web application',
		projectRole: [
			'Front-end developer',
			'Visual & UX designer',
		],
		technologyUsed: 'AngularJS, HTML5, CSS3/LESS, jQUERY, Grunt, Ajax, PHP, Photoshop, Git',
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'

	},
	{
		url: 'creep', 
		name: "CREEP",  
		coverImg: "http://kimispencer.com/assets/portfolio/creep/echoes.jpg",
		siteUrl: 'http://officialcreep.com',
		projectType: 'Official Band site',
		projectRole: [
			'Lead Front-end developer',
			'Lead Visual & UX designer',
			'Responsive web design',
			'CMS backend integration',
		],
		technologyUsed: 'HTML5, CSS3/LESS, jQUERY, Grunt, Ajax, PHP, Photoshop, mongoDB, Git',
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.',
		projectImgs: [
			'http://kimispencer.com/assets/portfolio/creep/echoes.jpg',
			'http://kimispencer.com/assets/portfolio/creep/imac.png',
			'http://kimispencer.com/assets/portfolio/creep/ipad.png'
		]

	},
	{
		url: 'plusign', 
		name: "Plusign",  
		coverImg: "https://unsplash.it/1210/450",
		siteUrl: 'http://plusign.com',
		projectType: 'Digital Agency portfolio site + Client Projects',
		projectRole: [
			'Front-end developer',
			'Visual & UXdesigner',
		],
		technologyUsed: 'HTML5, CSS3, jQUERY, Photoshop, Illustrator, Java/Processing',
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'

	},
	{
		url: 'tomtommag', 
		name: "Tom Tom Magazine",  
		coverImg: "https://unsplash.it/1220/350",
		siteUrl: 'http://tomtommag.com',
		projectType: 'Responsive Ecommerce website',
		projectRole: [
			'Custom Shopify template design & development',
			'Front-end development',
			'UX design',
			'CMS backend',
		],
		technologyUsed: 'HTML5, CSS3, jQUERY, Ajax, PHP, Photoshop, Shopify',
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'

	},
	{
		url: 'live-visuals', 
		name: "Live Visuals",  
		coverImg: "https://unsplash.it/1200/540",
		projectType: 'Live Visuals for events',
		projectRole: [
			'Art Director',
			'Visual Designer',
		],
		technologyUsed: 'VDMX, Java/Processing, After Effects, Premiere, MadMapper, Cinema4D',
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'

	},
	{
		url: 'dataviz', 
		name: "Data Visualization",  
		coverImg: "http://kimispencer.com/assets/portfolio/thesis/kimiSpencer_thesis-00.jpg",
		projectType: 'Data Visualization projects',
		projectRole: [
			'Lead Developer & Designer'
		],
		technologyUsed: 'Python, Java/Processing, Natural Language Toolkit, mongoDB',
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.',
		projectImgs: [
			'http://kimispencer.com/assets/portfolio/thesis/kimiSpencer_thesis-01.jpg',
			'http://kimispencer.com/assets/portfolio/thesis/kimiSpencer_thesis-02.jpg',
			'http://kimispencer.com/assets/portfolio/thesis/kimiSpencer_thesis-03.jpg',
			'http://kimispencer.com/assets/portfolio/thesis/kimiSpencer_thesis-04.jpg',
			'http://kimispencer.com/assets/portfolio/thesis/kimiSpencer_thesis-05.jpg',
			'http://kimispencer.com/assets/portfolio/thesis/kimiSpencer_thesis-06.jpg',
			'http://kimispencer.com/assets/portfolio/thesis/kimiSpencer_thesis-loc.jpg'
		]

	}
];

// const ProjectDetail = ({match}) => {
// 	let project = PROJECTS.filter(function (p) {
// 	    return p.url === match.params.id;
// 	})[0];
// 	// console.log(project)
// 	let style = {
// 		backgroundImage: 'url(' + project.coverImg + ')'
// 	}
// 	return(
// 		<div className="ProjectDetail">
// 			<h3 className="title">{project.name}</h3>
// 			<div className="project-detail-cover" style={style}></div>
// 			<div className="text center">
// 				<h4 className="title">Lorem Ipsum</h4>
// 				<p>{project.intro}</p>
// 				<div className="flex-row flex-center">
// 					<div className="flex-col list-container">
// 						<h4 className="title underline">Role</h4>
// 						<ul>
// 							<li>lead front-end engineer</li>
// 							<li>ux design</li>
// 						</ul>
// 					</div>
// 					<div className="flex-col list-container">
// 						<h4 className="title underline">Tools</h4>
// 						<ul>
// 							<li>reactjs</li>
// 							<li>es6</li>
// 						</ul>
// 					</div>
// 				</div>
// 				<p>{project.intro}</p>
// 			</div>
// 		</div>
// 	);
// }

// const ProjectDetail = (props) => {	
// 	let project = PROJECTS.filter(function (p) {
// 	    return p.url === props.routeProps.match.params.id;
// 	})[0];
// 	// console.log(project)
// 	let style = {
// 		backgroundImage: 'url(' + project.coverImg + ')'
// 	}
// 	return(
// 		<div className="ProjectDetail">
// 			<h4 onClick={props._sayHi}>ProjectDetail hello?</h4>
		
// 			<h3 className="title">{project.name}</h3>
// 			<div className="project-detail-cover" style={style}></div>
// 			<div className="text center">
// 				<h4 className="title">Lorem Ipsum</h4>
// 				<p>{project.intro}</p>
// 				<div className="flex-row flex-center">
// 					<div className="flex-col list-container">
// 						<h4 className="title underline">Role</h4>
// 						<ul>
// 							<li>lead front-end engineer</li>
// 							<li>ux design</li>
// 						</ul>
// 					</div>
// 					<div className="flex-col list-container">
// 						<h4 className="title underline">Tools</h4>
// 						<ul>
// 							<li>reactjs</li>
// 							<li>es6</li>
// 						</ul>
// 					</div>
// 				</div>
// 				<p>{project.intro}</p>
// 			</div>
// 		</div>
// 	);
// }

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
		let style = {
			backgroundImage: 'url(' + project.coverImg + ')'
		}
		return(
			<div className="ProjectDetail padded-width">
				<h3 className="title">{project.name}</h3>
				<div className="project-detail-cover" style={style}></div>

				<div className="text-container flex-row responsive">
					<div className="text three-quarter-span" id="ProjectDescription">
						<p className="title uppercase bold">project description</p>
						<p>{project.intro}</p>
						<br />
						<p>{project.intro}</p>
						{project.projectImgs 
							? project.projectImgs.map((img, index) => 
								<img src={img} key={index} />
							)
							: null
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

							{ project.siteUrl
								? <a href={project.siteUrl} target="_blank">
									<div className="button"><p>visit website</p></div>
								</a>
								: null
							}
						</div>
					</div>
				</div>

			</div>
		);
	}
}

// const ProjectListItem = (props) => {
// 	let style = {
// 		backgroundImage: 'url(' + props.project.coverImg + ')'
// 	}
// 	let navStyle = props._projectNavStyle_isList ? 'list-style' : 'box-style';
// 	let classes = `${navStyle} ProjectListItem`;

// 	return (
// 		<div className={classes} onClick={props.handleClick} >
// 			<div className="bg-img" style={style}></div>
// 			<div className="text monospace">
// 				<h4 className="project-name">{props.project.name}</h4>
// 				<p className="project-type">{props.project.projectType}</p>
// 			</div>
// 		</div>
// 	);
// }

const ProjectListItem = (props) => {
	let navStyle = props._projectNavStyle_isList ? 'list-style' : 'box-style';
	let classes = `${navStyle} ProjectListItem`;
	const localImage = '/spin.gif';

	return (
		<div className={classes} onClick={props.handleClick} >
			<BackgroundImage className="bg-img" src={props.project.coverImg} placeholder={localImage} />
			<div className="text monospace">
				<h4 className="project-name">{props.project.name}</h4>
				<p className="project-type">{props.project.projectType}</p>
			</div>
		</div>
	);
}

const ProjectList = (props) => {
	const _handleProjectNavClick = () => {
		props._toggleProjectNav();
		window.scrollTo(0, 0);
	}

	return(
		<div className="ProjectList">

			{ /*props._projectNavStyle_isList 
				? <Link to={props.match.url} onClick={props._handleProjectLanding}>
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
				? <ul className="project-list">
					{ PROJECTS.map((project, index) => 
					<li key={index} >
						 <Link to={props.match.url + '/' + project.url} >
							<ProjectListItem project={project} handleClick={_handleProjectNavClick} _toggleProjectNav={props._toggleProjectNav} _projectNavStyle_isList={props._projectNavStyle_isList}/>
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

/*
class SlideExample extends React.Component{
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return <div>
            <p onClick={this.props._toggleProjectNav}>{this.props._isProjectNavOpen  ? 'Slide up' : 'Slide down'}</p>
            <ReactCSSTransitionGroup 
            	transitionName="example"
            	transitionEnterTimeout={500}
            	transitionLeaveTimeout={250}
            >
				{ this.props._isProjectNavOpen 
					? <ul className="project-list">
						{ PROJECTS.map((project, index) => 
						<li key={index} >
							 <Link to={this.props.match.url + '/' + project.url} >
								<ProjectListItem project={project} handleClick={this.props._toggleProjectNav} _toggleProjectNav={this.props._toggleProjectNav} _projectNavStyle_isList={this.props._projectNavStyle_isList}/>
							</Link>
						</li>
						) }
					</ul>
					: null
				}
            </ReactCSSTransitionGroup>
        </div>
    }
}
*/