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
							description={"In Agency Ingram Micro, I was requested to upgrade the existing website. This involved creating a temporary website that could replace the original during a major upgrade and launch. In this project, I updated the primary aesthetic elements, with abstract graphics, animations, and bold typography. My design principle focussed on maintaining AIM's identity, while creating a functional but engaging website."}
							website={"https://ingramnz.com/aim/"}
						/>
						<PopupImg
							name="Microsoft Surface | Ingram Micro microsite"
							thumbUrl={"portfolio/aim/microsoft-thumb.jpg"}
							imageUrl={"portfolio/aim/microsoft-large.jpg"}
							description={"In this project, I modified and updated pre-existing web pages relating to the Microsoft Surface microsite. My approach emphasised clear messaging elements, highlighting Surface and Ingram Micro's marketing and product message. My design principle focussed on clean and modernised layouts to improve clarity and customer engagement, while retaining the brand guidelines."}
							website={"https://ingramnz.com/sites/microsoft/surface-home.html"}
						/>
						<PopupImg
							name="Microsoft eDM design"
							thumbUrl={"portfolio/aim/edm-ms-thumb.jpg"}
							imageUrl={"portfolio/aim/edm-ms-large.jpg"}
						/>
						<PopupImg
							name="Dell eDM design"
							thumbUrl={"portfolio/aim/edm-dell-thumb.jpg"}
							imageUrl={"portfolio/aim/edm-dell-large.jpg"}
						/>
					</div>
				</Fade>
				<GoToPortfolio />
			</Layout>
		);
	}
}
