import React from 'react';
import { 
	Route, 
	Link 
} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-transition-group';

import './ProjectList.css';

const PROJECTS = [
	{
		url: 'arrivals', 
		name: "The Arrivals NYC", 
		coverImg: "https://unsplash.it/1200/500",
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'
	},
	{
		url: 'suited', 
		name: "Suited Magazine", 
		coverImg: "https://unsplash.it/1210/540",
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'
	},
	{
		url: 'kimispencer', 
		name: "Portfolio", 
		coverImg: "https://unsplash.it/1205/580",
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'
	},
	{
		url: 'onomie', 
		name: "Onomie", 
		coverImg: "https://unsplash.it/1215/540",
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'

	},
	{
		url: 'brainchild', 
		name: "Brainchild.Co",  
		coverImg: "https://unsplash.it/1222/450",
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'

	},
	{
		url: 'bolster', 
		name: "Bolster",  
		coverImg: "https://unsplash.it/1214/450",
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'

	},
	{
		url: 'creep', 
		name: "CREEP",  
		coverImg: "https://unsplash.it/1200/450",
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'

	},
	{
		url: 'plusign', 
		name: "Plusign",  
		coverImg: "https://unsplash.it/1210/450",
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'

	},
	{
		url: 'tomtommag', 
		name: "Tom Tom Magazine",  
		coverImg: "https://unsplash.it/1220/350",
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'

	},
	{
		url: 'live-visuals', 
		name: "Live Visuals",  
		coverImg: "https://unsplash.it/1200/540",
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'

	},
	{
		url: 'dataviz', 
		name: "Data Visualization",  
		coverImg: "https://unsplash.it/1201/450",
		intro: 'Mauris ullamcorper erat sed velit luctus semper. Praesent ornare fringilla erat id dapibus. Integer dictum nisi et finibus congue. Suspendisse mollis cursus magna, sit amet fermentum magna rhoncus in. Nam suscipit luctus purus eu posuere. Etiam accumsan porttitor nulla vitae ultricies. Duis ut facilisis risus, id ornare tellus. Pellentesque eu orci eget lectus sollicitudin facilisis vitae vel diam. Nullam viverra neque in arcu placerat molestie. Praesent fermentum, enim accumsan venenatis interdum, turpis nibh faucibus ex, et lacinia mauris magna ut diam.'

	}
];

const ProjectDetail = ({match}) => {
	let project = PROJECTS.filter(function (p) {
	    return p.url === match.params.id;
	})[0];
	// console.log(project)
	let style = {
		backgroundImage: 'url(' + project.coverImg + ')'
	}
	return(
		<div className="ProjectDetail">
			<div className="project-detail-cover" style={style}></div>
			<div className="text center">
				<h3 className="title">{project.name}</h3>
				<p>{project.intro}</p>
				<div className="flex-row">
					<div className="flex-col list-container">
						<h4 className="title underline">Role</h4>
						<ul>
							<li>lead front-end engineer</li>
							<li>ux design</li>
						</ul>
					</div>
					<div className="flex-col list-container">
						<h4 className="title underline">Tools</h4>
						<ul>
							<li>reactjs</li>
							<li>es6</li>
						</ul>
					</div>
				</div>
				<p>{project.intro}</p>
			</div>
		</div>
	);
}

const ProjectListItem = (props) => {
	let style = {
		backgroundImage: 'url(' + props.project.coverImg + ')'
	}
	let navStyle = props.listStyle ? 'list-style' : 'box-style';
	let classes = `${navStyle} ProjectListItem`;
	return (
		<div className={classes} style={style} onClick={props.handleClick}>
			<div className="text">
				<p>{props.project.name}</p>
			</div>
		</div>
	);
}

const ProjectList = (props) => {
	return(
		<div className="ProjectList">
			
			<Link to={props.match.url} onClick={props.changeProjectNavStyle}>
				{ props.listStyle 
					? <h4 className="title center" id="PageTitle">Projects</h4>
					: null
				}
			</Link>

			{ props.listStyle 
				? <div className="center title" onClick={props.toggleProjectNav} id="Menu">Menu</div>
				: null
			}

			<ReactCSSTransitionGroup
				transitionName="example"
				transitionAppear={true}
			>
			{ props.showProjectNav 
				? null 
				: <ul className="project-list">
					{ PROJECTS.map((project, index) => 
						<li key={index} >
							 <Link to={props.match.url + '/' + project.url} >
								<ProjectListItem project={project} handleClick={props.toggleProjectNav} listStyle={props.listStyle}/>
							</Link>
						</li>
					) }
				</ul>
			}
			</ReactCSSTransitionGroup>	

			<Route path={`${props.match.url}/:id`} component={ProjectDetail}/>
		</div>
	);
}

export default ProjectList;