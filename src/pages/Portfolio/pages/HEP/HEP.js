import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { Layout } from '../../../../components/Layout/Layout';
import common from '../common.module.scss';
import HEPMain from 'src/assets/portfolio/hep-main.png';
import HEPOld from 'src/assets/portfolio/hep-old.png';
import HEPResponsive from 'src/assets/portfolio/hep-responsive.png';
import HEPNew from 'src/assets/portfolio/hep-new.png';
import GoToPortfolio from 'src/components/GoToPortfolio/GoToPortfolio';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import classNames from 'classnames';

export default class HEP extends Component {
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
						<h2>
							A Website redesign & development for History of Egypt Podcast
						</h2>
						<LazyLoadImage
							alt="History of Egypt Podcast"
							effect="blur"
							src={HEPMain}
						/>
					</div>
				</Fade>
				<div className={common.body}>
					<Fade bottom cascade distance="3rem">
						<div className={common.intro}>
							<div className={common.brief}>
								<div>
									<h6>Year</h6>
									<p>2020</p>
								</div>
								<div>
									<h6>Role</h6>
									<p>UX/UI design</p>
									<p>Web development</p>
								</div>
								<div>
									<h6>Software & Technology</h6>
									<p>Figma</p>
									<p>Wordpress</p>
								</div>
								<div>
									<h6>
										<a
											href="https://www.egyptianhistorypodcast.com/"
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
								The History of Egypt Podcast is a long-running, successful audio
								show, delivering episodes about ancient Egyptian society and
								history. Based in New Zealand, it has subscribers worldwide,
								with more than 7 million downloads. Every episode includes a
								detailed blog post with images, references, and an online audio
								player. The Podcast host contracted me to improve the website
								user experience and increase engagement.
							</p>
						</div>
					</Fade>
					<Fade bottom cascade distance="3rem">
						<div className={classNames(common.paragraph, common.grid)}>
							<div>
								<h3>Before</h3>
								<figure className={common.body__imgWrapper}>
									<img
										alt="History of Egypt Podcast - before"
										src={HEPOld}
										loading="lazy"
										className={classNames(common.body__img, common.noShadow)}
									/>
									<figcaption>Before</figcaption>
								</figure>
								<p>In tackling the redesign of this website, I had to improve three key metrics. These were:</p>
								<ul>
									<li>
										Increasing user engagement with the website and its
										features.
									</li>
									<li>
										Improve the user experience, navigability, and presentation
										of episodes.
									</li>
									<li>
										Increase website income, by improving click through rates to
										Patreon and PayPal donation services.
									</li>
								</ul>
							</div>
						</div>
					</Fade>
					<Fade bottom cascade distance="3rem">
						<div className={classNames(common.paragraph, common.grid)}>
							<div>
								<h3>After</h3>
								<figure className={common.body__imgWrapper}>
									<img
										alt="History of Egypt Podcast - after"
										src={HEPResponsive}
										loading="lazy"
										className={classNames(common.body__img, common.noShadow)}
									/>
								</figure>
								<br />
								<h4>UX / UI design</h4>
								<p>To increase user engagement, I added new quick access features including call to action buttons, playlist and gallery features, and one-click access to third-part services (Apple, Spotify, Google, etc).</p>
								<p>Secondly, I improved the website navigation features. I added new playlist functions and reorganised the existing blog posts, categorising more than 180 entries, for easier access.
								</p>
								<p>Thirdly, I improved the website's merchant facilities. I added one-click solutions for Patreon, PayPal and the online shop, and new banner features to visually engage visitors. As a result of my work, the client has reported much higher sales of merchandise and increased donations and Patreon subscriptions.
								</p>
								<p>Finally, I created a new branding scheme. Bold colours of blue and beige, representing the landscape of ancient Egypt (the river Nile and deserts, particularly). I added background illustrations and design features including ancient artefacts, to unify the website's identity and improve its theming.
								</p>
								<figure className={common.body__imgWrapper}>
									<img
										alt="History of Egypt Podcast - after"
										src={HEPNew}
										loading="lazy"
										className={classNames(common.body__img, common.noShadow)}
									/>
								</figure>
								<h4>Development</h4>
								<p>To support the new design, I migrated the website from Wordpress plan and built it on new hosting services from scratch, using Elementor.</p>
							</div>
						</div>
					</Fade>
				</div>
				<GoToPortfolio />
			</Layout>
		);
	}
}
