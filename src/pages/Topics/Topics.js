import React from 'react';
import { Route, Link } from 'react-router-dom';


const Topic = ({ match }) => (
  <div>
    <p>{match.params.topicId}</p>
  </div>
)

const Topics = ({ match }) => (
  <div>
    
    <h4 className="title center">Topics</h4>
      <Route exact path={match.url} render={() => (
      <p>Please select a topic.</p>
    )}/>
    <Route path={`${match.url}/:topicId`} component={Topic}/>

    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          <p>Rendering with React</p>
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          <p>Components</p>
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          <p>Props v. State</p>
        </Link>
      </li>
    </ul>
  </div>
)
export default Topics;