import React from 'react';
// import ImageLoader from '../../components/ImageLoader/ImageLoader';
import ProfilePic from '../../../public/assets/resume/profile.jpg';
import './Resume.css';

const Resume = () => (
	<div className="resume padded-top">

		<div className="resume-container padded-width">
			<div className="resume-section" id="Header">
				<div className="left-col"></div>
				<div className="right-col">
					<div className="center">
						<p className="monospace uppercase">hello@kimispencer.com</p>
						<p className="monospace uppercase">Brooklyn, NY</p>
						<img alt="profile" className="circle-img profile-pic" src={ProfilePic} />
						{/*<ImageLoader className="circle-img profile-pic" src="profile.jpg" imgKey="resume" isBg={false} alt="Profile Pic" />*/}
					</div>
				</div>
			</div>
			<div className="resume-section" id="Profile">
				<div className="left-col">
					<h4 className="bold title">PROFILE</h4>
				</div>
				<div className="right-col">
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<p>Hi, I’m Kimi!<br/><br/>I’m a product designer (specializing in user experience + interface design) and senior front-end software engineer.
							I have over 10 years expertise working in interactive technology. From San Francisco startups to NYC digital agencies; spanning industries from interactive advertising,  online magazines/publications, AR games for museum education, to high-end fashion.
							<br/>
							<br/>
							I create digital identity and experiences through concept development, UX & visual design, and creative coding solutions. I also like creating data visualizations, and visuals for live performances/music.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="resume-section" id="WorkExperience">
				<div className="left-col">
					<h4 className="bold title">WORK EXPERIENCE</h4>
				</div>
				<div className="right-col">
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<div className="flex-col institution">
								<h4 className="bold uppercase">KDS Studios</h4>
							</div>
							<p className="job-title monospace attribute">Product Designer & Software Engineer — 2021 to present</p>
						</div>
						<p>Product designer, software engineer and founder of a boutique digital agency.</p>
						<br/>
						<p>Working with multiple clients in diverse technology sectors to help design and build their user experience and web apps.</p>
						<br />
						<p>Figma design files & user research available upon request.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<div className="flex-col institution">
								<h4 className="bold uppercase">lumi</h4>
							</div>
							<p className="job-title monospace attribute">Senior Software Engineer — 2017 to 2021</p>
						</div>
						<p><a href="https://www.lumi.com/" target="_blank">Lumi</a> makes custom manufacturing as scalable as the web.</p>
						<br />
						<p>Software engineer responsible for creating a reusable <a href="https://lumihq.github.io/purescript-lumi-components/#/" target="_blank">UI component library</a>, as well as the design and front-end implementation of Lumi’s internal suite of applications for managing custom packaging designs, manufacturing and distribution for clients, vendors and design experts.</p>
						<br/>
						<p>Worked closely with product team and head of design to create our modular user-interface component library and develop user interfaces when introducing new features.</p>
						<br />
						<ul>
							<li><p>&bull; Designed and developed front-end user experiences across Lumi applications.</p></li>
							<li><p>&bull; Created a UI component library of modular styled components and standardized style guidelines across platforms, as well as improve code efficiency and reusability.</p></li>
							<li><p>&bull; Conversion of a legacy React/ES6/Immutable front-end into PureScript; a strongly typed functional programming language that compiles to JavaScript.</p></li>
						</ul>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<div className="flex-col institution">
								<h4 className="bold uppercase">the arrivals</h4>
								<h4 className="bold uppercase">onomie</h4>
								<h4 className="bold uppercase">brainchild.co</h4>
							</div>
							<p className="job-title monospace attribute">Lead Front-end Engineer & UX Designer — 2014 to 2017</p>
						</div>
						<p>Brainchild.co is a collection of engineers, operators and designers working on projects spanning from fashion, beauty to health care.</p>
						<br/>
						<p>Primary front-end engineer and designer for <a href="http://thearrivals.com" target="_blank">The Arrivals</a>, an architecturally inspired outerwear company. Translating marketing needs and campaigns into a highly polished user experience for thearrivals.com. Additionally, front-end developer and interaction designer for the <a href="http://onomie.com" target="_blank">Onomie</a>, and <a href="http://brainchild.co" target="_blank">Brainchild.co</a> brand sites since launch.</p>
						<br />
						<p>Responsible for the creation and implementation of front-end code and interface design for each brand’s respective responsive, cross-platform e-commerce web app. As well as designing and developing monthly interactive campaigns, supporting multiple product launches, and improving the site interface based on A/B studies.</p>
						<br />
						<ul>
							<li><p>&bull; Co-led conversion of The Arrivals site into a ReactJS application.</p></li>
							<li><p>&bull; Led the implementation of HTML5, CSS3, client-side JavaScript, CSS pre-processing platforms (LESS/SASS), JS task-runners, Git version control.</p></li>
							<li><p>&bull; Created UX/UI mockups, graphic/web designs, as well as translated mockups into code.</p></li>
							<li><p>&bull; Assisted with back-end integration and templating.</p></li>
							<li><p>&bull; Oversaw the launch of multiple successful sites from start to finish under strict deadlines.</p></li>
						</ul>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">suited magazine</h4>
							<p className="job-title monospace">Lead Software Engineer & UX Designer - 2016 to 2017</p>
						</div>
						<p><a href="http://suitedmagazine.com" target="_blank">SUITED</a> is a biannual fashion and art publication with a singular mission in mind: to celebrate those who have found what they are well-suited for. Their objective is to showcase independent thinkers passionate about creating work that is at once inspired, influential, and timeless.</p>
						<br/>
						<ul>
							<li><p>&bull; Created a customized CMS driven template design built on top of the Squarespace developer platform.</p></li>
							<li><p>&bull; Worked one-on-one with the creative director to translate the print publication into a branded online experience.</p></li>
							<li><p>&bull; Built visual mockups and interface designs.</p></li>
						</ul>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">bolster</h4>
							<p className="job-title monospace">Front-end Developer & UX Designer - 2013 to 2014</p>
						</div>
						<p><a href="http://bolster.us" target="_blank">Bolster.us</a> is a web application for home owners & contractors to connect and manage home remodeling projects.<br/><br/>Designed and developed a user-facing public website as well as an admin site for users to log in, find their match, upload/share documents & monitor their project's progression. Built with AngularJS v1.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">Tom Tom Magazine</h4>
							<p className="job-title monospace">UX Designer & Front-end Developer - 2013</p>
						</div>
						<p><a href="https://www.tomtommag.com/" target="_blank">Tom Tom Magazine</a> is a quarterly print magazine and website based out of New York City. Built & designed Tom Tom’s e-commerce platform to leverage site visits into opportunities to sell the publication or goods related to the brand. Using the Shopify CMS created a custom responsive template theme for the Tom Tom store.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">10x management</h4>
							<p className="job-title monospace">UX Designer & Front-end Developer - 2012 to 2013</p>
						</div>
						<p><a href="https://www.10xmanagement.com/" target="_blank">10x Management</a> was born from a simple premise: "Find the best contract tech talent and match them with the world's most amazing companies."<br/><br/>A member of 10x's first class of tech talent in 2012. Freelance UX designer and front-end developer.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">+plusign</h4>
							<p className="job-title monospace">UX Designer & Front-end Developer - 2012 to 2013</p>
						</div>
						<p> <a href="http://plusign.com" target="_blank">+plusign</a> is an award-winning creative studio that does branding, digital, and design.<br/><br/>UX designer and front-end web developer for multiple client projects spanning real-estate, beauty, and the arts. Project work also included creative coding projects such as generative logo designs for the brand.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">r/ga</h4>
							<p className="job-title monospace">Experience Design Intern - 2011</p>
						</div>
						<p><a href="http://rga.com" target="_blank">RGA</a> is a full service digital agency in the connected age.<br/><br/>Developed detailed wireframes and collaborated in the redesign of Verizon Wireless in-store touch screen experiences. Designed and rapidly prototyped a mobile application for MasterCard’s and the High Line Park of NYC’s Priceless Cities campaign. Created user journeys, as well as filmed and edited corresponding concept videos. Participated in the R/GA Data Visualization Incubator. Mined, analyzed and programmed a series of information graphics of Verizon’s service networks for the creative team to better understand customer flows and touch points for the Verizon brand experience.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">guide by cell</h4>
							<p className="job-title monospace">Project Manager & Web/Graphic Designer - 2008 to 2010</p>
						</div>
						<p><a href="http://guidebycell.com/" target="_blank">Guide by Cell</a> develops mobile engagement solutions to support audio tours, games and other location based interactions for museums and other cultural institutions.<br/><br/>Designed, user tested, and launched interactive mobile applications and media content for over 300 museums and exhibitions. Participated in the development of Ghosts of a Chance, the first Augmented Reality Game (ARG) played at the Smithsonian Museum of American Art. Created wireframes, developed mobile games and location-based narratives.</p>
					</div>
				</div>
			</div>
			<div className="resume-section" id="Education">
				<div className="left-col">
					<h4 className="bold title">EDUCATION</h4>
				</div>
				<div className="right-col">
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">nyu, tisch</h4>
							<p className="monospace">Masters in Interactive Technology & Design - 2010 to 2012</p>
						</div>
						<p>ITP is a two-year graduate program located in the Tisch School of the Arts whose mission is to explore the imaginative use of communications technologies — how they might augment, improve, and bring delight and art into people's lives.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">uc berkeley</h4>
							<p className="monospace">BA in Political Science - 2003 to 2007</p>
						</div>
						<p>Political Science major with a focus on the use of emergent, mobile technologies in the advancement of democratic movements.</p>
					</div>
				</div>
			</div>
			<div className="resume-section" id="Skills">
				<div className="left-col">
					<h4 className="bold title">TECHNICAL EXPERTISE</h4>
				</div>
				<div className="right-col">
					<div className="flex-row responsive">
						<div className="flex-col resume-section-item" id="Skillset">
							<h4 className="title bold uppercase">professional skillset</h4>
							<div className="flex-row">
								<ul>
									<li>PureScript & TypeScript</li>
									<li>JavaScript/ES6/ES7</li>
									<li>HTML5</li>
									<li>CSS3/SASS/LESS</li>
									<li>CSS preprocessors & inline CSS</li>
									<li>Git</li>
								</ul>
								<ul>
									<li>ReactJS</li>
									<li>Python</li>
									<li>NPM & Webpack</li>
									<li>Squarespace & Shopify</li>
									<li>Data Visualization</li>
									<li>UX/UI Design</li>
								</ul>
							</div>
						</div>
						<div className="flex-col resume-section-item third-span" id="Tools">
							<h4 className="title bold uppercase">tools</h4>
							<ul>
								<li>Visual Studio Code</li>
								<li>Adobe Creative Suite (Photoshop, Illustrator, InDesign, Premiere)</li>
								<li>Figma, Sketch</li>
								<li>Rhino</li>
								<li>Cinema4D, VDMX</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Resume;
