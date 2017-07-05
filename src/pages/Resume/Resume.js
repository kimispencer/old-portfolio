import React from 'react';

import './Resume.css';

const Resume = () => (	
	<div className="Resume">

		<div className="resume-container padded-width">
			<div className="resume-section" id="Header">
				<div className="left-col"></div>
				<div className="right-col">
					<div className="center">
						<h2 className="bold title">KIMI SPENCER</h2>
						<p className="monospace uppercase">hello@kimispencer.com</p>
						<p className="monospace uppercase">Brooklyn, NY</p>
					</div>
				</div>
			</div>
			<div className="resume-section" id="Profile">
				<div className="left-col">
					<h4 className="bold title underline">PROFILE</h4>
				</div>
				<div className="right-col">
					<p>`Hi, I’m Kimi! I’m a front-end engineer and interaction designer based in NYC. 
						I have over 9 years experience working in interactive technology from San Francisco startups to NYC digital agencies; 
						and spanning industries from museum education, high-end fashion to music production. 
						I create digital identity and experiences through concept development, UX & visual design, and creative coding solutions. 
						I also have a personal passion for music videos, conceptual art, arugula & alliteration.`</p>
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
								<h4 className="bold uppercase">brainchild</h4>
								<h4 className="bold uppercase">the arrivals</h4>
								<h4 className="bold uppercase">onomie</h4>
							</div>
							<p className="job-title monospace attribute">Lead Front-end Engineer & UX Designer — 2014 to present</p>
						</div>
						<p>Brainchild is a collection of engineers, operators and designers working on projects spanning from fashion, beauty to health care.</p>
						<br />
						<p>As the lead front-end engineer and interaction designer for the <a href="http://thearrivals.com" target="_blank">TheArrivals.com</a>, <a href="http://onomie.com" target="_blank">Onomie.com</a>, and <a href="http://brainchild.co" target="_blank">Brainchild.co</a> brand sites I was individually responsible for the creation and implementation of all front-end code and interface design for each brand’s respective responsive, cross-platform e-commerce web app. As well as designing and developling monthly interactive campaigns, supporting multiple product launches, and improving the site interface based on A/B studies.</p>
						<br />
						<ul>
							<li><p>&bull; Co-led conversion of TheArrivals.com into a ReactJS application.</p></li>
							<li><p>&bull; Led the implementation of HTML5, CSS3, client-side Javascript, CSS pre-processing platforms (LESS/SASS), JS task-runners, Git version control.</p></li>
							<li><p>&bull; Created UX/UI mockups, graphic/web designs, as well as translated mockups into code.</p></li>
							<li><p>&bull; Assisted with back-end integration and templating.</p></li>
							<li><p>&bull; Oversaw the launch of multiple successf`ul sites from start to finish under strict deadlines.</p></li>
						</ul>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">suited magazine</h4>
							<p className="job-title monospace">Lead Full-stack Engineer & UX Designer - 2016 to present</p>
						</div>
						<p>SUITED is a biannual fashion and art publication with a singular mission in mind: to celebrate those who have found what they are well-suited for. Our objective is to showcase independent thinkers passionate about creating work that is at once inspired, influential, and timeless.</p>
						<br />
						<p>Full-stack engineer and UX designer for <a href="http://suitedmagazine.com" target="_blank">SuitedMagazine.com</a>; created a customized CMS driven template design built on top of the Squarespace developer platform. Worked one-on-one with the creative director to build visual mockups and interface designs.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">bolster</h4>
							<p className="job-title monospace">Front-end Developer & UX Designer - 2013 to 2014</p>
						</div>
						<p><a href="http://bolster.us" target="_blank">Bolster.us</a> is a web application for home owners & contractors to connect and manage home remodeling projects. Designed and developed a user-facing public website as well as an admin site for users to log in, find their match, upload/share documents & monitor their project's progression. Built with AngularJS using modern web standards.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">10x management</h4>
							<p className="job-title monospace">UX Designer & Front-end Developer - 2012 to 2013</p>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra velit a convallis pellentesque. Nullam congue enim lorem. Cras ut varius ante. Cras et nibh augue. Etiam dapibus tincidunt ullamcorper. Donec in mollis diam. Nunc imperdiet elementum leo.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">+plusign</h4>
							<p className="job-title monospace">UX Designer & Front-end Developer - 2012 to 2013</p>
						</div>
						<p>+plusign is an award-winning creative studio that does branding, digital, and design. UX designer and front-end web developer for multiple client projects spanning real-estate, beauty, and the arts. <a href="http://plusign.com" target="_blank">Plusign.com</a></p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">r/ga</h4>
							<p className="job-title monospace">Experience Design Intern - 2011</p>
						</div>
						<p>Developed detailed wireframes and collaborated in the redesign of Verizon Wireless in-store touch screen experiences. Designed and rapidly prototyped a mobile application for MasterCard’s and the High Line Park of NYC’s Priceless Cities campaign. Created user journeys, as well as filmed and edited corresponding concept videos. Participated in the R/GA Data Visualization Incubator. Mined, analyzed and programmed a series of information graphics of Verizon’s service networks for the creative team to better understand customer flows and touch points of the Verizon brand experience. <a href="http://rga.com" target="_blank">RGA.com</a></p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">guide by cell</h4>
							<p className="job-title monospace">Project Manager & Web/Graphic Designer - 2008 to 2010</p>
						</div>
						<p>Designed, user tested, and launched interactive mobile applications and media content for over 300 museums and exhibitions. Participated in the development of Ghosts of a Chance the first Augmented Reality Game (ARG) played at the Smithsonian Museum of American Art. Created wireframes, developed mobile games and location-based narratives.</p>
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
							<p className="monospace">M.P.S - Interactive Technology & Design</p>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra velit a convallis pellentesque. Nullam congue enim lorem. Cras ut varius ante. Cras et nibh augue. Etiam dapibus tincidunt ullamcorper. Donec in mollis diam. Nunc imperdiet elementum leo.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">uc berkeley</h4>
							<p className="monospace">B.A. Political Science</p>
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
									<li>CSS3/SASS/LESS</li>
									<li>Javascript/ES6</li>
									<li>Webpack</li>
									<li>Git</li>
									<li>UX Design</li>
								</ul>
								<ul>
									<li>Javascript frameworks (ReactJS, AngularJS)</li>
									<li>Python</li>
									<li>PHP</li>
									<li>Processing/Java</li>
									<li>Wordpress, Squarespace</li>
									<li>Data Visualization</li>
								</ul>
							</div>
						</div>
						<div className="flex-col resume-section-item third-span" id="Tools">
							<h4 className="title bold uppercase">tools</h4>
							<ul>
								<li>Sublime</li>
								<li>Adobe Creative Suite (Photoshop, Illustrator, InDesign, Premiere)</li>
								<li>Sketch</li>
								<li>VDMX</li>
								{/*
								<li>Cinema4D</li>
								<li>Rhino</li>
								*/}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Resume;