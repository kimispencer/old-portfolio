import React from 'react';
import './StaticImage.css';

class StaticImage extends React.Component {
    render() {
        let img = (this.props.src.indexOf('http') > -1) ? this.props.src : require(`../../../public/assets/${this.props.imgKey}/${this.props.src}`);
        return (
           <div className="static-image" style={ {backgroundImage: 'url(' + img + ')'} } />
        );
    }
}
export default StaticImage;