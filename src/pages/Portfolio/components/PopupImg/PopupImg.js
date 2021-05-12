import React, { Component } from 'react';
import styles from './PopupImg.module.scss';
import Popup from 'reactjs-popup';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PopupImg = ({ dayNumber }) => {
	return (
		<Popup
			trigger={
				<LazyLoadImage
					alt={`DailyUi ${dayNumber}`}
					effect="blur"
					src={require(`../../../../assets/portfolio/daily-ui/${dayNumber}/dailyUI${dayNumber}.jpg`)}
				/>
			}
			modal
			nested
			position="center center"
		>
			{(close) => (
				<div>
					<button className={styles.close} onClick={close}>
						&times;
					</button>
					<div>
						<img
							src={require(`../../../../assets/portfolio/daily-ui/${dayNumber}/dailyUI${dayNumber}-large.jpg`)}
							alt={`DailyUi ${dayNumber}`}
						/>
					</div>
				</div>
			)}
		</Popup>
	);
};

export default PopupImg;
