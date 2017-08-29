import React from 'react';
import ParticleTypography from './ParticleTypography';

class Home extends React.Component {
    componentDidMount() {
		new ParticleTypography(document.getElementById('Foo'));
    }
    render() {
        return (
            <canvas id="Foo" />
        );
    }
}
export default Home;