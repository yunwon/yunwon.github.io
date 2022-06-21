import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import common from '../common.module.scss';
import styles from '../../PortfolioHome.module.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Layout } from 'src/components/Layout/Layout';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'reactjs-popup/dist/index.css';
import { PopupImg } from '../../components/PopupImg/PopupImg.js';
import GoToPortfolio from 'src/components/GoToPortfolio/GoToPortfolio';

export default class IngramMicro extends Component {
	render() {
		return (
			<Layout>
				<Fade top cascade distance="3rem">
					<div className={common.hero}>
						<Link to="/portfolio">
							<h1>Work</h1>
						</Link>
						<h2>Works in Agency Ingram Micro</h2>
					</div>
				</Fade>
				<Fade bottom distance="3rem">
					<div className={styles.works}>
						<PopupImg
							name="Agency Ingram Micro website"
							thumbUrl={"portfolio/aim/aim-thumb.jpg"}
							imageUrl={"portfolio/aim/aim-large.jpg"}
							description={"In Agency Ingram Micro, I was requested to upgrade existing website. Since we were planning to launch a whole new website, we needed one that's temporary but look nice. I updated main look and feel with an abstract graphic with animation and bold message on it, which was generic but engaging at the same time, without losing AIM's identity."}
							website={"https://ingramnz.com/aim/"}
						/>
						<PopupImg
							name="Microsoft Surface | Ingram Micro microsite"
							thumbUrl={"portfolio/aim/microsoft-thumb.jpg"}
							imageUrl={"portfolio/aim/microsoft-large.jpg"}
							description={"On existing microsite of Microsoft Surface, I updated design and code for some pages. My design focussed on deliverying clear message about what Surface and Ingram Micro can offer, using clean and modern layout."}
							website={"https://ingramnz.com/sites/microsoft/surface-home.html"}
						/>
					</div>
				</Fade>
				<GoToPortfolio />
			</Layout>
		);
	}
}
