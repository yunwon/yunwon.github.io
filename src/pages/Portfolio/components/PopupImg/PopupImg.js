import React from 'react';
import styles from './PopupImg.module.scss';
import Popup from 'reactjs-popup';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const DailyUIPopupImg = ({ dayNumber }) => {
	return (
		<Popup
			trigger={
				<LazyLoadImage
					alt={`DailyUI ${dayNumber}`}
					effect="blur"
					src={require(`../../../../assets/portfolio/daily-ui/${dayNumber}/dailyUI${dayNumber}.jpg`)}
				/>
			}
			modal
			nested
			position="top center"
		>
			{(close) => (
				<div>
					<button className={styles.close} onClick={close}>
						&times;
					</button>
					<div>
						<img
							src={require(`../../../../assets/portfolio/daily-ui/${dayNumber}/dailyUI${dayNumber}-large.jpg`)}
							alt={`DailyUI ${dayNumber}`}
							className={styles.image}
						/>
					</div>
				</div>
			)}
		</Popup>
	);
};

const PopupImg = ({ thumbUrl, imageUrl, name, description, website }) => {
	return (
		<Popup
			trigger={
				<LazyLoadImage
					alt={name}
					effect="blur"
					src={require(`../../../../assets/${thumbUrl}`)}
				/>
			}
			modal
			nested
			position="top center"
		>
			{(close) => (
				<div>
					<button className={styles.close} onClick={close}>
						&times;
					</button>
					<div>
						<img
							src={require(`../../../../assets/${imageUrl}`)}
							alt={name}
							className={styles.image}
						/>
						{name &&
							<div className={styles.description}>
								<h3>{name}</h3>
								{description && <p>{description}</p>}
								{website && <a href={website} target="_blank" rel="noreferrer">Visit website</a>}
							</div>
						}
					</div>
				</div>
			)}
		</Popup>
	);
};
export { DailyUIPopupImg, PopupImg };
