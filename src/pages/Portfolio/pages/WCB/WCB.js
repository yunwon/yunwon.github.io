import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { Layout } from 'src/components/Layout/Layout';
import common from '../common.module.scss';
import WCBMain from 'src/assets/portfolio/wcb/wcb-main.png';
import DetailImage from 'src/assets/portfolio/wcb/wcb_logo-screen.webp';
import PeopleImage from 'src/assets/portfolio/wcb/people-screens.png';
import GoToPortfolio from 'src/components/GoToPortfolio/GoToPortfolio';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import classNames from 'classnames';
import WCBVideo from 'src/assets/portfolio/wcb/wcb-home.mp4';
import WCBPoster from 'src/assets/portfolio/wcb/wcb-home.avif';

export default class WCB extends Component {
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
						<h2>A website redesign for WhiteCollarBlue Australia</h2>
						<LazyLoadImage
							alt="White Collar Blue"
							effect="blur"
							src={WCBMain}
						/>
					</div>
				</Fade>
				<div className={common.body}>
					<Fade bottom cascade distance="3rem">
						<div className={common.intro}>
							<div className={common.brief}>
								<div>
									<h6>Year</h6>
									<p>2019</p>
								</div>
								<div>
									<h6>Role</h6>
									<div>
										<p>UX/UI design</p>
										<p>Front-end development</p>
									</div>
								</div>
								<div>
									<h6>Software & Technology</h6>
									<div>
										<p>UXPin</p>
										<p>React JS, HTML5, CSS3(SCSS)</p>
									</div>
								</div>
								<h6>
									<a
										href="https://whitecollarblue.com.au/"
										target="_blank"
										rel="noopener noreferrer"
										className={common.visit}
									>
										Visit website
									</a>
								</h6>
							</div>
							<p>
								As part of my work for Toolbox Digital, I completed a project
								for WhiteCollarBlue, an HR company based in Sydney, Australia.
								In this role, I led UX/UI Design and front-end
								development. This job was done remotely, involving regular
								communication and conferencing.
							</p>
						</div>
					</Fade>
					<Fade bottom cascade distance="3rem">
						<div className={classNames(common.paragraph, common.grid)}>
							<h3>Strong user experience</h3>
							<p>My work for WhiteCollarBlue focussed on enhancing user convenience and accessibility.
								Catering to job seekers and employers, I worked to streamline navigation and visitor experience.
								As a result of my work, I significantly improved ease-of-use and access, reducing complicated
								navigation to a one- or two-click process.</p>
							<video
								width="100%"
								autoPlay="true"
								loop="true"
								controls="true"
								poster={WCBPoster}
							>
								<source src={WCBVideo} type="video/mp4" />
							</video>

						</div>
					</Fade>
					<Fade bottom cascade distance="3rem">
						<div className={classNames(common.paragraph, common.paragraphRelaxed, common.grid)}>
							<h3>Design that boosts brand recognition</h3>
							<p>To improve WhiteCollarBlue's brand recognition, I incorporated design elements from their logo into the website itself.</p>
							<figure className={common.body__imgWrapper}>
								<img
									alt="Design detail close up"
									src={DetailImage}
									loading="lazy"
									className={common.body__img}
								/>
							</figure>
						</div>
					</Fade>
					<Fade bottom cascade distance="3rem">
						<div className={classNames(common.paragraph, common.paragraphRelaxed, common.grid)}>
							<h3>Human Resources, Human Imagery</h3>
							<p>To better reflect WhiteCollarBlue's role as an HR and employment-facilitator, I redesigned their website to incorporate more people-focussed elements. Graphics, logos and backgrounds now work together to emphasise real people and connect visitors with the core philosophy of WCB.</p>
							<figure className={common.body__imgWrapper}>
								<img
									alt="People images"
									src={PeopleImage}
									loading="lazy"
									className={classNames(common.body__img, common.noShadow)}
								/>
							</figure>
						</div>
					</Fade>
				</div >
				<GoToPortfolio />
			</Layout >
		);
	}
}
