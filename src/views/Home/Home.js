import React from 'react';
import ParticleTypography from './ParticleTypography';
import TextContainer from '../../components/TextContainer/TextContainer';
import BgImg from '../../../public/assets/bg.png';
import './Home.css';

class Home extends React.Component {
	componentDidMount() {
		new ParticleTypography(document.getElementById('Canvas'));
	}
	render() {
		let styles = {
			backgroundImage: `url(${BgImg})`
		}
		return (
			<div className="home" style={styles}>
				<canvas id="Canvas" />
				<TextContainer>
					<h4 className="monospace">Hi, I'm Kimi. I an engineer/designer.</h4>
				</TextContainer>
			</div>
		);
	}
}
export default Home;