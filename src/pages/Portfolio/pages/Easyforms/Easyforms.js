import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Layout } from '../../../../components/Layout/Layout';
import common from '../common.module.scss';
import EasyformsMain from 'src/assets/portfolio/easyforms-main.png';
import EasyformsResponsive from 'src/assets/portfolio/mobile-all.png';
import Video from 'src/assets/portfolio/easyforms-video.mp4';
import Description from '../../components/Description/Description';
import GoToPortfolio from 'src/components/GoToPortfolio/GoToPortfolio';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default class Easyforms extends Component {
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
						<h2>A website redesign for Easyforms</h2>
						<LazyLoadImage
							alt="Easyforms website redesign"
							effect="blur"
							src={EasyformsMain}
						/>
					</div>
				</Fade>
				<div className={common.body}>
					<Fade bottom cascade distance="3rem">
						<div className={common.intro}>
							<div className={common.brief}>
								<div>
									<h6>Year</h6>
									<p>2018</p>
								</div>
								<div>
									<h6>Role</h6>
									<p>UX/UI design</p>
								</div>
								<div>
									<h6>Software & Technology</h6>
									<p>Adobe XD</p>
								</div>
								<div></div>
							</div>
							<p>
								I participated in a website redesign project for Easyforms,
								Auckland as an one-off volunteer role. My approach focussed on
								creating a trendy UI design and improving usability, by reducing
								verbiage. This project was my first web design work with an
								outside client. Looking back, this project was a valuable
								learning experience that greatly developed my creative and
								technical skillset.
							</p>
						</div>
					</Fade>
					<Description
						title="Bold Choices, Designer Focus"
						paragraph="For the main colour scheme, I chose a striking contrast of blue and yellow. 
            Additionally, I selected new graphics and design elements that would improve click-through and retention rates. 
            My ultimate goal was to improve this website's accessibility, engagement and visual appeal."
						bgVideo={Video}
						imgPosition="left"
					/>
					<Description
						title="Responsive Design for Mobile"
						paragraph="In addition to the above work, I designed the mobile user experience for this website. 
            Here, I focussed on adaptability and ease of use."
						bgImage={EasyformsResponsive}
						imgPosition="right"
					/>
				</div>
				<GoToPortfolio />
			</Layout>
		);
	}
}
