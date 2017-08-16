import React from 'react';
import './DeviceFrame.css';

const DeviceFrame = (props) => {
	let img;
	(props.src.indexOf('http') > -1) ? img = props.src : img = require(`../../../public/assets/${props.imgKey}/${props.src}`);
	return (
		<div className="device-frame">
			{props.type === "desktop" && 
			<div className="macbook">
				<div className="screen">
					<div className="viewport" style={ {backgroundImage: 'url(' + img + ')'} }></div>
				</div>
				<div className="base"></div>
				<div className="notch"></div>
			</div>
			}
			{props.type === "phone" && 
			<div className="iphone">
				<div className="content">
					<div className="iphone-top">
						<span className="camera"></span>
						<span className="sensor"></span>
						<span className="speaker"></span>
					</div>
					<div className="iphone-screen">
						<div className="viewport" style={ {backgroundImage: 'url(' + img + ')'} }></div>
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

export default DeviceFrame;