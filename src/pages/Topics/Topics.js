import React from 'react';
import { Route, Link } from 'react-router-dom';


const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    
    <h2 className="title center">Topics</h2>
      <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
    <Route path={`${match.url}/:topicId`} component={Topic}/>

    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>
  </div>
)
export default Topics;