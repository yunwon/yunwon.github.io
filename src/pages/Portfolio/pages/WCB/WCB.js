import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { Layout } from 'src/components/Layout/Layout';
import common from '../common.module.scss';
import WCBMain from 'src/assets/portfolio/wcb-main.png';
import DetailImage from 'src/assets/portfolio/detail.png';
import PeopleImage from 'src/assets/portfolio/people-screens.png';
import Description from '../../components/Description/Description';
import GoToPortfolio from 'src/components/GoToPortfolio/GoToPortfolio';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
								In this role, I participated in UX/UI Design and front-end
								development. This job was done remotely, involving regular
								communication and conferencing.
							</p>
						</div>
					</Fade>
					<Description
						title="Strong user experience"
						paragraph="My work for WhiteCollarBlue focussed on enhancing user convenience and accessibility. 
            Catering to job seekers and employers, I worked to streamline navigation and visitor experience.
            As a result of my work I significantly improved ease-of-use and access, reducing complicated 
            navigation to a one- or two-click process."
					/>
					<Description
						title="Design that boosts brand recognition"
						paragraph="To improve WhiteCollarBlue's brand recognition, I incorporated design elements from 
            their logo into the website itself."
						bgImage={DetailImage}
						imgPosition="left"
					/>
					<Description
						title="Human Resources, Human Imagery"
						paragraph="To better reflect WhiteCollarBlue's role as an HR and employment-facilitator, 
            I redesigned their website to incorporate more people-focussed elements. Graphics, logos 
            and backgrounds now work together to emphasise real people and connect visitors with the 
            core philosophy of WCB."
						bgImage={PeopleImage}
						imgPosition="right"
					/>
				</div>
				<GoToPortfolio />
			</Layout>
		);
	}
}
