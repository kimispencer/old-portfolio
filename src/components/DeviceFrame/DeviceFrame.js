import React from 'react';
import './DeviceFrame.css';

class DeviceFrame extends React.Component {
	constructor() {
		super();
		this.state = {
			inViewport: false
		}
		this._isElementInViewport = this._isElementInViewport.bind(this);
		this._handleScroll = this._handleScroll.bind(this);
	}
	componentDidMount() {
		window.addEventListener('scroll', this._handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this._handleScroll);
	}
	_isElementInViewport (el) {
		var rect = el[0].getBoundingClientRect();
		var height = window.innerHeight
			|| document.documentElement.clientHeight
			|| document.body.clientHeight;
		return (rect.top>-1 && rect.bottom <= height);
	}
	_handleScroll() {
		if(this._isElementInViewport(document.getElementsByClassName('device-frame'))) {
			this.setState({ inViewport: true });
		}
	}
	render() {
		let img = (this.props.src.indexOf('http') > -1) ? img = this.props.src : img = require(`../../../public/assets/${this.props.imgKey}/${this.props.src}`);
		return (
			<div className={`device-frame ${this.props.className} ${this.state.inViewport ? 'in-viewport' : ''}`}>
				{this.props.type === "desktop" && 
				<div className="macbook">
					<div className="screen">
						<div className="viewport">
							<img className="screenshot" src={img} role="presentation" />
						</div>
					</div>
					<div className="base"></div>
					<div className="notch"></div>
				</div>
				}
				{this.props.type === "phone" && 
				<div className="iphone">
					<div className="content">
						<div className="iphone-top">
							<span className="camera"></span>
							<span className="sensor"></span>
							<span className="speaker"></span>
						</div>
						<div className="iphone-screen">
							<img className="screenshot" src={img} role="presentation" />
						</div>
						<div className="buttons">
							<span className="on-off"></span>
							<span className="sleep"></span>
							<span className="up"></span>
							<span className="down"></span>
						</div>
						<div className="iphone-bottom">
							<span></span>
						</div>
					</div>
				</div>
			}
			</div>
		);
	}
}
export default DeviceFrame;