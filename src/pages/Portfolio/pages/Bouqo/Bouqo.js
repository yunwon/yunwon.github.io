import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Layout } from '../../../../components/Layout/Layout';
import common from '../common.module.scss';
import BouqoMain from 'src/assets/portfolio/bouqo-main.webp';
import GoToPortfolio from 'src/components/GoToPortfolio/GoToPortfolio';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import OurStory from 'src/assets/portfolio/bouqo/ourStory.webp';
import HowItWorks from 'src/assets/portfolio/bouqo/howItWorks.webp';
import Blog from 'src/assets/portfolio/bouqo/blog.webp';
import GiftingTips from 'src/assets/portfolio/bouqo/giftingTips.webp';
import classNames from 'classnames';

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
						<h2>A website redesign / front-end development for Bouqo</h2>
						<LazyLoadImage
							alt="Bouqo website redesign"
							effect="blur"
							src={BouqoMain}
						/>
					</div>
				</Fade>
				<div className={common.body}>
					<Fade bottom cascade distance="3rem">
						<div className={common.intro}>
							<div className={common.brief}>
								<div>
									<h6>Year</h6>
									<p>2021-2022</p>
								</div>
								<div>
									<h6>Role</h6>
									<p>UX/UI design / Front-end development</p>
								</div>
								<div>
									<h6>Software & Technology</h6>
									<p>Figma / Vue JS</p>
								</div>
							</div>
							<p>
								I led a website redesign project for Bouqo.co.nz., a flower delivery service in Auckland, New Zealand.
								I upgraded the whole site with elements aimed at increasing user engagement, such as animated tags, modified layouts, and a more consistent application of the brand identity.
								I increased the number of CTA elements in the website's navigation and footer areas. This increased customer click-through rates significantly (as reported by the owner).
								For this front-end development project, I used SCSS to improve CSS modularity and reduce repetition in the code. Additionally, I modified and updated a pre-existing Vue.js project, further strengthening my proficiency in Vue.js.
							</p><br />
							<p>After the business was sold, the new owners updated the design, but this is the original version I created.</p>
						</div>
					</Fade>
					<Fade bottom cascade distance="3rem">
						<div className={classNames(common.paragraph)}>
							<figure className={common.body__imgWrapper}>
								<img
									alt="Bouqo redesign - How it works page"
									src={HowItWorks}
									loading="lazy"
									className={classNames(common.body__img)}
								/>
							</figure>
						</div>
					</Fade>
					<Fade bottom cascade distance="3rem">
						<div className={classNames(common.paragraph)}>
							<figure className={common.body__imgWrapper}>
								<img
									alt="Bouqo redesign - Our story page"
									src={OurStory}
									loading="lazy"
									className={classNames(common.body__img)}
								/>
							</figure>
						</div>
					</Fade>
					<Fade bottom cascade distance="3rem">
						<div className={classNames(common.paragraph)}>
							<figure className={common.body__imgWrapper}>
								<img
									alt="Bouqo redesign - Blog page"
									src={Blog}
									loading="lazy"
									className={classNames(common.body__img)}
								/>
							</figure>
						</div>
					</Fade>
					<Fade bottom cascade distance="3rem">
						<div className={classNames(common.paragraph)}>
							<figure className={common.body__imgWrapper}>
								<img
									alt="Bouqo redesign - Gifting tips page"
									src={GiftingTips}
									loading="lazy"
									className={classNames(common.body__img)}
								/>
							</figure>
						</div>
					</Fade>
				</div>
				<GoToPortfolio />
			</Layout>
		);
	}
}
