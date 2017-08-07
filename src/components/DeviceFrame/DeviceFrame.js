import React from 'react';
import './DeviceFrame.css';

class DeviceFrame extends React.Component {
	render() {
		let screenshot = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/datauri-generator-preview.jpg';
		return (
			<div className="device-frame">
				{/* macbook laptop */}
				<div className="macbook">
					<div className="screen">
						<div className="viewport" style={ {backgroundImage: 'url(' + screenshot + ')'} }></div>
					</div>
					<div className="base"></div>
					<div className="notch"></div>
				</div>
				{/* iphone */}
				
			</div>
		);
	}
}
export default DeviceFrame;