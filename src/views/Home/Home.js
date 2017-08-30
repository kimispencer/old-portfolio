import React from 'react';
import ParticleTypography from './ParticleTypography';
import TextContainer from '../../components/TextContainer/TextContainer';
import './Home.css';

class Home extends React.Component {
	componentDidMount() {
		new ParticleTypography(document.getElementById('Canvas'));
	}
	render() {
		return (
			<div className="home">
				<canvas id="Canvas" />
				<TextContainer>
					<h4 className="monospace">Hi, I'm Kimi. I am awesome a engineer/designer.</h4>
				</TextContainer>
			</div>
		);
	}
}
export default Home;