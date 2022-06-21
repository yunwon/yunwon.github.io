import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import styles from '../../PortfolioHome.module.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Layout } from 'src/components/Layout/Layout';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import dailyUiStyles from './DailyUi.module.scss';
import 'reactjs-popup/dist/index.css';
import { DailyUIPopupImg } from '../../components/PopupImg/PopupImg.js';

export default class DailyUi extends Component {
	render() {
		return (
			<Layout>
				<Fade top cascade distance="3rem">
					<div className={styles.hero}>
						<Link to="/portfolio/dailyui" onClick={this.handleAll}>
							<h1>#Daily UI Challenge</h1>
						</Link>
					</div>
				</Fade>
				<Fade bottom distance="3rem">
					<div className={styles.works}>
						<Link to="/portfolio/dailyui/day1">
							<LazyLoadImage
								alt="DailyUI001"
								effect="blur"
								src={require('../../../../assets/portfolio/daily-ui/001/dailyUI001.jpg')}
								className={styles.image}
							/>
						</Link>
						<DailyUIPopupImg dayNumber="002" />
						<Link to="/portfolio/dailyui/day3">
							<LazyLoadImage
								alt="DailyUI003"
								effect="blur"
								src={require('../../../../assets/portfolio/daily-ui/003/dailyui003.png')}
								className={styles.image}
							/>
						</Link>
						<LazyLoadImage
							alt="DailyUI004"
							effect="blur"
							src={require('../../../../assets/portfolio/daily-ui/004/dailyUI004.png')}
							className={styles.image}
						/>
						<LazyLoadImage
							alt="DailyUI005"
							effect="blur"
							src={require('../../../../assets/portfolio/daily-ui/005/dailyUI005.jpg')}
							className={styles.image}
						/>
						<DailyUIPopupImg dayNumber="006" />
						<DailyUIPopupImg dayNumber="007" />
						<DailyUIPopupImg dayNumber="008" />
					</div>
				</Fade>
			</Layout>
		);
	}
}
