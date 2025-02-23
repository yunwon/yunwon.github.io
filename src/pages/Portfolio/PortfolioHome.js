import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import styles from './PortfolioHome.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default class PortfolioHome extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	state = {
		webDesign: true,
		graphicDesign: true,
		frontEnd: true
	};
	handleWebDesign = () => {
		this.setState({
			webDesign: true,
			graphicDesign: false,
			frontEnd: false
		});
	};
	handleGraphicDesign = () => {
		this.setState({
			webDesign: false,
			graphicDesign: true,
			frontEnd: false
		});
	};
	handleFrontEnd = () => {
		this.setState({
			webDesign: false,
			graphicDesign: false,
			frontEnd: true
		});
	};
	handleAll = () => {
		this.setState({
			webDesign: true,
			graphicDesign: true,
			frontEnd: true
		});
	};
	render() {
		return (
			<Layout>
				<Fade top cascade distance="3rem">
					<div className={styles.hero}>
						<Link to="/portfolio" onClick={this.handleAll}>
							<h1>Work</h1>
						</Link>
						<ul>
							<li onClick={this.handleWebDesign}>Web design</li>
							<li onClick={this.handleGraphicDesign}>Graphic design</li>
							<li onClick={this.handleFrontEnd}>Front-end development</li>
							<li>
								<Link to="/portfolio/dailyui">#Daily UI Challenge</Link>
							</li>
						</ul>
					</div>
				</Fade>
				<Fade bottom distance="3rem">
					<div className={styles.works}>
						{this.state.webDesign ||
							this.state.graphicDesign ||
							this.state.frontEnd ? (
							<Link to="/portfolio/aim">
								<LazyLoadImage
									alt="Agency Ingram Micro"
									effect="blur"
									src={require('../../assets/portfolio/ingram-micro/IngramMicro_HP_01.webp')}
									className={styles.image}
								/>
							</Link>
						) : null}
						{this.state.webDesign || this.state.frontEnd ? (
							<>
								<Link to="/portfolio/ingram-micro-apple-portal">
									<LazyLoadImage
										alt="Ingram Micro Apple Portal"
										effect="blur"
										src={require('../../assets/home/cto_thumb.webp')}
										className={styles.image}
									/>
								</Link>
								<Link to="/portfolio/bouqo">
									<LazyLoadImage
										alt="Bouqo"
										effect="blur"
										src={require('../../assets/home/bouqo-thumb.jpg')}
										className={styles.image}
									/>
								</Link>
								<Link to="/portfolio/hep">
									<LazyLoadImage
										alt="History of Egypt Podcast"
										effect="blur"
										src={require('../../assets/home/hep-thumb.png')}
										className={styles.image}
									/>
								</Link>
								<Link to="/portfolio/dailyui">
									<LazyLoadImage
										alt="DailyUI day 001"
										effect="blur"
										src={require('../../assets/portfolio/daily-ui/002/dailyUI002.jpg')}
										className={styles.image}
									/>
								</Link>
								<Link to="/portfolio/toolbox">
									<LazyLoadImage
										alt="Toolbox"
										effect="blur"
										src={require('../../assets/home/toolbox.png')}
										className={styles.image}
									/>
								</Link>
								<Link to="/portfolio/wcb">
									<LazyLoadImage
										alt="White Collar Blue"
										effect="blur"
										src={require('../../assets/home/wcb-thumb.png')}
										className={styles.image}
									/>
								</Link>
							</>
						) : null}
						{this.state.graphicDesign ? (
							<>
								<Link to="/portfolio/solar-system">
									<LazyLoadImage
										alt="Solar System"
										effect="blur"
										src={require('../../assets/portfolio/solarSystemMain.png')}
										className={styles.image}
									/>
								</Link>
							</>
						) : null}
					</div>
				</Fade>
			</Layout>
		);
	}
}
