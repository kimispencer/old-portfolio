import React from 'react';

import './Resume.css';

const Resume = ({}) => (	
	<div className="Resume">

		<div className="resume-container">
			<div className="resume-section" id="Header">
				<div className="left-col"></div>
				<div className="right-col">
					<div className="center">
						<h2 className="bold title">KIMI SPENCER</h2>
						<p className="serif uppercase">kimispencer@gmail.com</p>
						<p className="serif uppercase">Brooklyn, NY</p>
					</div>
				</div>
			</div>
			<div className="resume-section" id="Profile">
				<div className="left-col">
					<h4 className="bold title underline">PROFILE</h4>
				</div>
				<div className="right-col">
					<p>Nunc vestibulum enim ut cursus bibendum. In maximus quam enim, non interdum lectus porta quis. Nam dictum, velit ut porta iaculis, leo dolor vestibulum nisi, vel tincidunt sapien eros id est. Sed tristique congue facilisis. In neque ante, mattis at vehicula vitae, tincidunt et est. Fusce mollis feugiat libero, eu dictum nunc dictum nec. Suspendisse sollicitudin turpis magna, in consequat dui tincidunt at. Vestibulum interdum dictum eros, in efficitur dui. Sed sed est tortor. Integer sit amet tortor id augue malesuada fermentum. Suspendisse consectetur mi quis vestibulum condimentum.</p>
				</div>
			</div>
			<div className="resume-section" id="WorkExperience">
				<div className="left-col">
					<h4 className="bold title underline">WORK EXPERIENCE</h4>
				</div>
				<div className="right-col">
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<div className="flex-col institution">
								<h4 className="bold uppercase">brainchildco</h4>
								<h4 className="bold uppercase">the arrivals</h4>
								<h4 className="bold uppercase">onomie</h4>
							</div>
							<p className="job-title serif">front-end engineer</p>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra velit a convallis pellentesque. Nullam congue enim lorem. Cras ut varius ante. Cras et nibh augue. Etiam dapibus tincidunt ullamcorper. Donec in mollis diam. Nunc imperdiet elementum leo.</p>
						<p>Nunc vestibulum enim ut cursus bibendum. In maximus quam enim, non interdum lectus porta quis. Nam dictum, velit ut porta iaculis, leo dolor vestibulum nisi, vel tincidunt sapien eros id est. Sed tristique congue facilisis. In neque ante, mattis at vehicula vitae, tincidunt et est. Fusce mollis feugiat libero, eu dictum nunc dictum nec. Suspendisse sollicitudin turpis magna, in consequat dui tincidunt at. Vestibulum interdum dictum eros, in efficitur dui. Sed sed est tortor. Integer sit amet tortor id augue malesuada fermentum. Suspendisse consectetur mi quis vestibulum condimentum.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">suited magazine</h4>
							<p className="job-title serif">front-end engineer</p>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra velit a convallis pellentesque. Nullam congue enim lorem. Cras ut varius ante. Cras et nibh augue. Etiam dapibus tincidunt ullamcorper. Donec in mollis diam. Nunc imperdiet elementum leo.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">bolster</h4>
							<p className="job-title serif">front-end engineer</p>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra velit a convallis pellentesque. Nullam congue enim lorem. Cras ut varius ante. Cras et nibh augue. Etiam dapibus tincidunt ullamcorper. Donec in mollis diam. Nunc imperdiet elementum leo.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">10x management</h4>
							<p className="job-title serif">front-end engineer</p>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra velit a convallis pellentesque. Nullam congue enim lorem. Cras ut varius ante. Cras et nibh augue. Etiam dapibus tincidunt ullamcorper. Donec in mollis diam. Nunc imperdiet elementum leo.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">+plusign</h4>
							<p className="job-title serif">front-end engineer</p>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra velit a convallis pellentesque. Nullam congue enim lorem. Cras ut varius ante. Cras et nibh augue. Etiam dapibus tincidunt ullamcorper. Donec in mollis diam. Nunc imperdiet elementum leo.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">r/ga</h4>
							<p className="job-title serif">front-end engineer</p>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra velit a convallis pellentesque. Nullam congue enim lorem. Cras ut varius ante. Cras et nibh augue. Etiam dapibus tincidunt ullamcorper. Donec in mollis diam. Nunc imperdiet elementum leo.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">guide by cell</h4>
							<p className="job-title serif">front-end engineer</p>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra velit a convallis pellentesque. Nullam congue enim lorem. Cras ut varius ante. Cras et nibh augue. Etiam dapibus tincidunt ullamcorper. Donec in mollis diam. Nunc imperdiet elementum leo.</p>
					</div>
				</div>
			</div>
			<div className="resume-section" id="Education">
				<div className="left-col">
					<h4 className="bold title underline">EDUCATION</h4>
				</div>
				<div className="right-col">
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">nyu, tisch school of the arts</h4>
							<p className="serif">M.P.S - Interactive Technology & Design</p>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra velit a convallis pellentesque. Nullam congue enim lorem. Cras ut varius ante. Cras et nibh augue. Etiam dapibus tincidunt ullamcorper. Donec in mollis diam. Nunc imperdiet elementum leo.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">uc berkeley</h4>
							<p className="serif">B.A. Politics</p>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra velit a convallis pellentesque. Nullam congue enim lorem. Cras ut varius ante. Cras et nibh augue. Etiam dapibus tincidunt ullamcorper. Donec in mollis diam. Nunc imperdiet elementum leo.</p>
					</div>
				</div>
			</div>
			<div className="resume-section" id="Skills">
				<div className="left-col">
					<h4 className="bold title underline">TECHNICAL EXPERTISE</h4>
				</div>
				<div className="right-col">
					<div className="flex-row responsive">
						<div className="flex-col resume-section-item" id="Skillset">
							<h4 className="title bold uppercase">professional skillset</h4>
							<div className="flex-row">
								<ul>
									<li>HTML5</li>
									<li>CSS3 via SASS/LESS</li>
									<li>Javascript/ES6</li>
									<li>Webpack</li>
									<li>Git</li>
									<li>UX Design</li>
								</ul>
								<ul>
									<li>Javascript frameworks (React, AngularJS)</li>
									<li>Python</li>
									<li>PHP</li>
									<li>Wordpress, Squarespace</li>
									<li>Data Visualization</li>
									<li>Projection Mapping</li>
								</ul>
							</div>
						</div>
						<div className="flex-col resume-section-item" id="Tools">
							<h4 className="title bold uppercase">software tools</h4>
							<ul>
								<li>Adobe Creative Suite</li>
								<li>Sketch</li>
								<li>VDMX</li>
								<li>Cinema4D</li>
								<li>Rhino</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Resume;