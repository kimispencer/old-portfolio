import React from 'react';
import ReactDOM from 'react-dom';

import './styles/reset.css';
import './styles/typography.css';

import App from './App';

ReactDOM.render(
	<App />,
	document.getElementById('Root')
);

/*
	**** how to pass Component props via a Route

	<Route path="/projects" component={ProjectList} />
	vs.
	// create a stateless component that is wrapping the ProjectList component
	<Route path="/projects" component={(props, state, params) => <ProjectList isNavOpen={this.state.isNavOpen} {...props} />} />

	

	**** sample code for different ways of declaring a component

	// I use this syntax when my component fits on one line
	const ListItem = (props) => <li className="list-item">{props.item.name}</li>;

	// I use this when my component has no logic outside JSX
	// !!! does not use 'props' when you have ({ items }) vs (props) -> props.items
	const List = ({ items }) => (
	  <ul className="list">
	    {items.map(item => <ListItem item={item} />)}
	  </ul>
	);

	// I use this when the component needs logic outside JSX.
	const Body = (props) => {
	  let items = transformItems(props.rawItems);
	  return (
	    <div>
	      <h1>{props.header}</h1>
	      <List items={items} />
	    </div>
	  );
	};

	// This is equivalent to the last example
	function Page(props, context) {
	  return (
	    <div>
	      <Body header="My List" rawItems={props.rawItems} />
	    </div>
	  );
	}
	// propTypes and contextTypes are supported
	Page.propTypes = {
	  rawItems: React.PropTypes.array.isRequired,
	};
*/
