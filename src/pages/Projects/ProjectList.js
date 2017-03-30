import React from 'react';
import { 
	Route, 
	Link 
} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

const ProjectDetail = (props) => {
	// console.log(props)
	/*
		Cannot update during an existing state transition (such as within  render or another component's constructor). 
		Render methods should be a pure function of props and state; constructor side-effects are an anti-pattern, 
		but can be moved to componentWillMount.
	*/
	// props.changeProjectNavStyle_toList();		// need this inside componentWillMount 
	
	let project = PROJECTS.filter(function (p) {
	    return p.url === props.routeProps.match.params.id;
	})[0];
	// console.log(project)
	let style = {
		backgroundImage: 'url(' + project.coverImg + ')'
	}
	return(
		<div className="ProjectDetail">
			<h4 onClick={props.sayHi}>ProjectDetail hello?</h4>
		
			<h3 className="title">{project.name}</h3>
			<div className="project-detail-cover" style={style}></div>
			<div className="text center">
				<h4 className="title">Lorem Ipsum</h4>
				<p>{project.intro}</p>
				<div className="flex-row flex-center">
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
	let navStyle = props.projectNavStyle_isList ? 'list-style' : 'box-style';
	let classes = `${navStyle} ProjectListItem`;
	return (
		<div className={classes} style={style} onClick={props.handleClick}>
			<div className="text">
				<p>{props.project.name}</p>
			</div>
		</div>
	);
}

/* !!! WORKING CSSTRANSITION SLIDE UP/DOWN */
class SlideExample extends React.Component{
    constructor(props) {
        super(props);
        this.state = { visible: false };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
    	this.setState({ visible: ! this.state.visible });
    }

    render() {
        return <div>
            <p onClick={this.handleClick}>{this.state.visible ? 'Slide up' : 'Slide down'}</p>
            <ReactCSSTransitionGroup 
            	transitionName="example"
            	transitionEnterTimeout={300}
            	transitionLeaveTimeout={300}
            >
            	{ this.state.visible ? <div className='panel' /> : null }
            </ReactCSSTransitionGroup>
        </div>
    }
}

const ProjectList = (props) => {
	return(
		<div className="ProjectList">
			<SlideExample />

			<h4 onClick={props.sayHi}>ProjectList hello?</h4>

			<Link to={props.match.url} onClick={props.changeProjectNavStyle}>
				{ props.projectNavStyle_isList 
					? <h4 className="title center" id="PageTitle">Projects</h4>
					: null
				}
			</Link>

			{ props.projectNavStyle_isList 
				? <div className="center title" onClick={props.toggleProjectNav} id="Menu">Menu</div>
				: null
			}

			{ props.isProjectNavOpen 
				? null 
				: <ul className="project-list">
					{ PROJECTS.map((project, index) => 
					<li key={index} >
						 <Link to={props.match.url + '/' + project.url} >
							<ProjectListItem project={project} handleClick={props.toggleProjectNav} projectNavStyle_isList={props.projectNavStyle_isList}/>
						</Link>
					</li>
					) }
				</ul>
			}

			{/* <Route path={`${props.match.url}/:id`} component={ProjectDetail}/> */}
			<Route path={`${props.match.url}/:id`} component={(routeProps, state, params) => 
				<ProjectDetail 
					sayHi={props.sayHi}
					changeProjectNavStyle_toList={props.changeProjectNavStyle_toList}
					routeProps={routeProps}
				{...props} />} />
		</div>
	);
}

export default ProjectList;