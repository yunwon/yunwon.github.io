import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import common from '../common.module.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Layout } from 'src/components/Layout/Layout';
import classNames from 'classnames';
import GoToPortfolio from 'src/components/GoToPortfolio/GoToPortfolio';
import HP01 from 'src/assets/portfolio/ingram-micro/IngramMicro_HP_01.webp';
import HP01Video from 'src/assets/portfolio/ingram-micro/IngramMicro_HP_02.mp4';
import Microsoft01Video from 'src/assets/portfolio/ingram-micro/IngramMicro_Microsoft_01.mp4';
import HEP01 from 'src/assets/portfolio/ingram-micro/IngramMicro_HPE_01.webp';
import HPMicrosoft01 from 'src/assets/portfolio/ingram-micro/IngramMicro_HP-Microsoft_01.webp';



export default class IngramMicro extends Component {
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
						<h2>Digital Campaign Design & Execution at Ingram Micro APAC</h2>
					</div>
				</Fade>
				<div className={common.body}>
					<Fade bottom cascade distance="3rem">
						<div className={common.intro}>
							<p>
								At Ingram Micro, I designed and executed 200+ digital campaigns for top clients like Apple, Microsoft, HP, Dell, and Logitech—often under tight deadlines. I ensured all designs aligned with vendor guidelines while maintaining Ingram Micro's brand identity. Collaborating with clients and marketing managers across APAC countries, I delivered tailored digital solutions, including HTML emails, social banners, and landing pages.
							</p>
						</div>
					</Fade>
					<Fade bottom cascade distance="3rem">
						<div className={classNames(common.paragraph)}>
							<figure className={common.body__imgWrapper}>
								<img
									alt="Ingram Micro | HP Sustainable devices promotion"
									src={HP01}
									loading="lazy"
									className={classNames(common.body__img, common.noShadow)}
								/>
								<figcaption>Ingram Micro Australia | HP Sustainable Devices Promotion</figcaption>
							</figure>
						</div>
					</Fade>
					<Fade bottom cascade distance="3rem">
						<div className={classNames(common.paragraph)}>
							<figure className={common.body__imgWrapper}>
								<video
									width="100%"
									autoPlay="true"
									loop="true"
									controls="true"
								>
									<source src={HP01Video} type="video/mp4" />
								</video>
								<figcaption>Ingram Micro Australia | HP Blitz Nike Shoes Promotion</figcaption>
							</figure>
						</div>
					</Fade>
					<Fade bottom cascade distance="3rem">
						<div className={classNames(common.paragraph)}>
							<figure className={common.body__imgWrapper}>
								<video
									width="100%"
									autoPlay="true"
									loop="true"
									controls="true"
								>
									<source src={Microsoft01Video} type="video/mp4" />
								</video>
								<figcaption>Ingram Micro New Zealand | Microsoft Purchase, Earn, Redeem Promotion</figcaption>
							</figure>
						</div>
					</Fade>
					<Fade bottom cascade distance="3rem">
						<div className={classNames(common.paragraph)}>
							<figure className={common.body__imgWrapper}>
								<img
									alt="Ingram Micro | HEP PointNext Promotion"
									src={HEP01}
									loading="lazy"
									className={classNames(common.body__img, common.noShadow)}
								/>
								<figcaption>Ingram Micro Australia | HEP PointNext Promotion</figcaption>
							</figure>
						</div>
					</Fade>
					<Fade bottom cascade distance="3rem">
						<div className={classNames(common.paragraph)}>
							<figure className={common.body__imgWrapper}>
								<img
									alt="Ingram Micro | Microsoft & HP Destination Fiji "
									src={HPMicrosoft01}
									loading="lazy"
									className={classNames(common.body__img, common.noShadow)}
								/>
								<figcaption>Ingram Micro New Zealand | Microsoft & HP Destination Fiji Promotion</figcaption>
							</figure>
						</div>
					</Fade>
				</div>
				<GoToPortfolio />
			</Layout>
		);
	}
}
