import React from 'react';
import ParticleTypography from './ParticleTypography';

class Home extends React.Component {
    componentDidMount() {
		new ParticleTypography(document.getElementById('Canvas'));
    }
    render() {
        return (
            <canvas id="Canvas" />
        );
    }
}
export default Home;