import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { Layout } from '../../../../components/Layout/Layout';
import common from '../common.module.scss';
import ToolboxMain from 'src/assets/portfolio/toolbox.png';
import ToolboxResponsive from 'src/assets/portfolio/responsive.png';
import ToolboxVideo from 'src/assets/portfolio/toolbox-video.mp4';
import Description from '../../components/Description/Description';
import GoToPortfolio from 'src/components/GoToPortfolio/GoToPortfolio';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default class Toolbox extends Component {
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
						<h2>A website for Toolbox Digital</h2>
						<LazyLoadImage
							alt="Toolbox Digital"
							effect="blur"
							src={ToolboxMain}
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
									<p>UX/UI design</p>
									<p>Front-end development</p>
								</div>
								<div>
									<h6>Software & Technology</h6>
									<p>Figma</p>
									<p>React JS, HTML5, CSS3(SCSS)</p>
								</div>
								<div>
									<h6>
										<a
											href="https://digital.toolbox.net.nz/"
											target="_blank"
											rel="noopener noreferrer"
											className={common.visit}
										>
											Visit website
										</a>
									</h6>
								</div>
							</div>
							<p>
								From 2018 to 2019, I was a lead web designer and front-end
								developer for Toolbox Digital Ltd. Toolbox needed a complete
								redesign for its website. In this role I took charge of the
								project, building the visuals and front-end single-handedly.
							</p>
						</div>
					</Fade>
					<Description
						title="Video & Animations"
						paragraph="
            I integrated video and animations to the landing page and multiple design elements. 
            My work focussed on enhancing the user experience and the effectiveness of Toolbox's visual tools."
						bgVideo={ToolboxVideo}
						imgPosition="right"
					/>
					<Description
						title="Fast and responsive Front-end development with React JS and SCSS"
						paragraph="I created cross-platform compatibility, with responsive design elements between mobile, 
            tablet and desktop. Using React JS and SCSS, I created reusable components and rules that improved 
            development time significantly and will faciliate future processes."
						bgImage={ToolboxResponsive}
						imgPosition="left"
					/>
				</div>
				<GoToPortfolio />
			</Layout>
		);
	}
}
