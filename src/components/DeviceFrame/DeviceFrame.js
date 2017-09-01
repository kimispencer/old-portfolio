import React from 'react';
import './DeviceFrame.css';

class DeviceFrame extends React.Component {
	constructor() {
		super();
		this.state = {
			bounce: false
		}
		this._scrollBounce = this._scrollBounce.bind(this);
	}
	_scrollBounce() {
		this.setState({ bounce: !this.state.bounce });
	}
	render() {
		let img = (this.props.src.indexOf('http') > -1) ? img = this.props.src : img = require(`../../../public/assets/${this.props.imgKey}/${this.props.src}`);
		return (
			<div className={`device-frame ${this.state.bounce ? 'bounce' : ''}`}>
				<p onClick={this._scrollBounce}>click me</p>
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