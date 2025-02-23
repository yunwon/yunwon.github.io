import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Layout } from '../../../../components/Layout/Layout';
import common from '../common.module.scss';
import GoToPortfolio from 'src/components/GoToPortfolio/GoToPortfolio';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Video from 'src/assets/portfolio/apple-portal/apple-portal-homepage.mov';
import classNames from 'classnames';
import CTOBefore from 'src/assets/portfolio/apple-portal/ingramnz-CTO_home--before@2x.webp';
import CTOWireframe from 'src/assets/portfolio/apple-portal/cto_wireframe.webp';
import CTOStyleGuide from 'src/assets/portfolio/apple-portal/cto_style-guide.webp';
import CTOFinal from 'src/assets/portfolio/apple-portal/cto_home-all.webp';

export default class Bouqo extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<Layout>
				<Fade top cascade distance="3rem">
					<div className={common.hero}>
						<Link to="/portfolio">
							<h1>Work</h1>
						</Link>
						<h2>A website redesign / front-end development for Apple Portal</h2>
						<video
							width="100%"
							autoPlay="true"
							loop="true"
							controls="true"
						>
							<source src={Video} type="video/mp4" />
						</video>
					</div>
				</Fade>
				<div className={common.body}>
					<Fade bottom cascade distance="3rem">
						<div className={common.intro}>
							<div className={common.brief}>
								<div>
									<h6>Year</h6>
									<p>2024</p>
								</div>
								<div>
									<h6>Role</h6>
									<p>UX/UI design / Front-end development</p>
								</div>
								<div>
									<h6>Software & Technology</h6>
									<p>Figma / HTML / CSS(SCSS)</p>
								</div>
								<div>
									<h6>
										<a
											href="https://ingramnz.com/CTO"
											target="_blank"
											rel="noopener noreferrer"
											className={common.visit}
										>
											Visit website
										</a>
									</h6>
								</div>
							</div>
							<p>Ingram Micro Apple Portal is a platform where the partner resellers can customise the order of Apple products through Ingram Micro. The initial request that I was given to do was to simply redesign and develop the look and feel with some minor content updates. However, I have identified a few more problems that can significantly improve the user experience when they are solved.</p>
						</div>
					</Fade>
					<div>
						<Fade bottom cascade distance="3rem">
							<div className={classNames(common.paragraph, common.grid)}>
								<div>
									<h3>Problems</h3>
									<figure className={common.body__imgWrapper}>
										<img
											alt="Ingram Micro and Apple CTO site - before"
											src={CTOBefore}
											loading="lazy"
											className={common.body__img}
										/>
										<figcaption>Before</figcaption>
									</figure>
									<p>Here are some key issues I identified:</p>
									<h4>Unorganised navigation/user flow</h4>
									<ul>
										<li>
											The menu contained too many items with no clear hierarchy.
										</li>
										<li>
											Menu names were confusing for new users.
										</li>
										<li>The website's primary feature, "Configure & Order" was not highlighted effectively, making the red route unclear.</li>
									</ul>

									<h4>Weak home page content</h4>
									<p>The homepage failed to effectively showcase what the Ingram Micro Apple team could offer to users.</p>
								</div>
							</div>
						</Fade>
						<Fade bottom cascade distance="3rem">
							<div className={common.paragraph}>
								<h3>Identify the users</h3>
								<p>The primary users are existing Ingram Micro partner resellers. At the time, the client was not accepting new partner applications.</p>
							</div>
						</Fade>
						<Fade bottom cascade distance="3rem">
							<div className={common.paragraph}>
								<h3>Identify the goal of the site</h3>
								<ul>
									<li><strong>Main goal:</strong> To enable users to order Apple products through the Configure &amp; Order feature.</li>
									<li><strong>Secondary goals:</strong> To provide information about the Apple-related services offered by Ingram Micro.</li>
									<li><strong>Tertiary goals:</strong> To inform users about upcoming events and Apple-related resources.</li>
								</ul>
							</div>
						</Fade>
						<Fade bottom cascade distance="3rem">
							<div className={common.paragraph}>
								<h3>Wireframe</h3>
								<figure className={common.body__imgWrapper}>
									<img
										alt="Ingram Micro and Apple CTO site - wireframe"
										src={CTOWireframe}
										loading="lazy"
										className={common.body__img}
									/>
								</figure>
								<p>I redesigned the layout with the following goals in mind:</p>
								<h4>Navigation</h4>
								<ul>
									<li>I organised the navigation menu based on importance. Pages that didn&#39;t serve the core purpose of the site were hidden.</li>
									<li>I renamed the menu items to be more precise and easier to understand. </li>
								</ul>
								<h4>Home page</h4>
								<ul>
									<li>I added a brief blurb to explain the purpose of the site and set the &#39;Configure &amp; Order&#39; link as the main CTA for quick access.</li>
									<li>I Highlighted the content of the site in a card format and organised it by its importance, allowing users to quickly skim and understand what the site offers.</li>
								</ul>
							</div>
						</Fade>
						<Fade bottom cascade distance="3rem">
							<div className={common.paragraph}>
								<h3>UI design</h3>
								<p>I followed Apple and Ingram Micro's brand guidelines to visually align their identities, creating a consistent and cohesive design across the site.</p>
								<figure className={common.body__imgWrapper}>
									<img
										alt="Ingram Micro and Apple CTO site - style guide"
										src={CTOStyleGuide}
										loading="lazy"
										className={common.body__img}
									/>
									<figcaption>Style Guide</figcaption>
								</figure>
								<figure className={common.body__imgWrapper}>
									<img
										alt="Ingram Micro and Apple CTO site - final design"
										src={CTOFinal}
										loading="lazy"
										className={common.body__img}
									/>
									<figcaption>Final design</figcaption>
								</figure>
							</div>
						</Fade>
						<Fade bottom cascade distance="3rem">
							<div className={common.paragraph}>
								<h3>Front-end development</h3>
								<p>It was a particularly challenging part due to the access restrictions set by company policy. The front-end code, written by a back-end developer in C++, was not directly accessible to me. Despite this, I managed to get a copy of the HTML and CSS and reorganise the legacy styles by modularising them with SCSS. This made the code more maintainable and scalable for the future. After updating and refining the front-end, I worked closely with the backend developer to manually integrate my changes into the main codebase. Through collaboration and problem-solving, I was able to enhance the front-end structure and set a solid foundation for easier management moving forward.
								</p>
							</div>
						</Fade>
						<Fade bottom cascade distance="3rem">
							<div className={common.paragraph}>
								<h3>Feedback & Final Thought</h3>
								<p>My problem-solving approach and clean design received great feedback from the client. Although they made a few slight adjustments to my initial design a few months later, I was pleased with the outcome and gained valuable insights from the process.
								</p>
							</div>
						</Fade>
					</div>
				</div>
				<GoToPortfolio />
			</Layout>
		);
	}
}
