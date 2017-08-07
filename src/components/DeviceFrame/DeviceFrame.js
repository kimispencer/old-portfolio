import React from 'react';
import './DeviceFrame.css';

import DesktopScreenShot from '../../../public/assets/projects/onomie/00.png';
import PhoneScreenShot from '../../../public/assets/projects/onomie/01.png';

class DeviceFrame extends React.Component {
	render() {
		// let desktop_screenshot = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/datauri-generator-preview.jpg';
		// let phone_screenshot = 'http://www.planwallpaper.com/static/images/Awesome-iPhone-Wallpapers.jpg';
		return (
			<div className="device-frame">
				{/* macbook laptop */}
				<div className="macbook">
					<div className="screen">
						<div className="viewport" style={ {backgroundImage: 'url(' + DesktopScreenShot + ')'} }></div>
					</div>
					<div className="base"></div>
					<div className="notch"></div>
				</div>
				{/* iphone */}
				<div className="iphone">
					<div className="content">
						<div className="iphone-top">
							<span className="camera"></span>
							<span className="sensor"></span>
							<span className="speaker"></span>
						</div>
						<div className="iphone-screen">
							<div className="viewport" style={ {backgroundImage: 'url(' + PhoneScreenShot + ')'} }></div>
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
			</div>
		);
	}
}
export default DeviceFrame;