import React from 'react';
import ParticleTypography from './ParticleTypography';
import './Home.css';

class Home extends React.Component {
	componentDidMount() {
		new ParticleTypography(document.getElementById('Canvas'));
	}
	render() {
		return (
			<div className="home">
				<canvas id="Canvas" />
				<div>
					<p>hi, i'm kimi. i am awesome.</p>
				</div>
			</div>
		);
	}
}
export default Home;