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
					<p>hi, i'm kimi. i am awesome.</p>
				</TextContainer>
			</div>
		);
	}
}
export default Home;