import React from 'react';
import './ImageLoader.css';

class ImageLoader extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			imageStatus: 'loading',
			loaded: false
		};
	}
 
	handleImageLoaded() {
		this.setState({ 
			imageStatus: 'loaded',
			loaded: true
		});

	}

	handleImageErrored() {
		this.setState({ 
			imageStatus: 'failed to load',
			loaded: false
		 });
	}

	render() {
		let img = (this.props.src.indexOf('http') > -1) ? this.props.src : require(`../../../public/assets/${this.props.imgKey}/${this.props.src}`);

		if(this.props.isBg === false) {
			return (
				<div className={`${this.state.loaded ? 'loaded' : null} image-loader`}>
					{ this.props.children }
					<img
						style={ {display: `${this.state.loaded ? 'block' : 'none'}` } }
						src={img}
						className={`${this.props.className ? this.props.className : ''}`}
						onLoad={this.handleImageLoaded.bind(this)}
						onError={this.handleImageErrored.bind(this)}
						role="presentation"
						alt={this.props.alt}
					/>
					{ this.state.loaded ?
						<div className="spinner-container">
							<div className="spinner"></div>
						</div>
						: null
					}
					{/*this.state.imageStatus*/}
				</div>
			);
		} else {
			return (
				<div className={`${this.props.className ? this.props.className : ''} ${this.state.loaded ? 'loaded' : null} image-loader bg-img`} style={ {backgroundImage: 'url(' + img + ')'} }>
					{ this.props.children }
					{ this.state.loaded ?
						<div className="spinner-container">
							<div className="spinner"></div>
						</div>
						: null
					}
					{/*this.state.imageStatus*/}
				</div>
			);
		}
	}
}
export default ImageLoader;