/**
 * External Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import styles from "./Stats.module.scss";

const Stats = ( { icon, title, number } ) => {
	return (
		<div className={ styles.stats }>
			<img className="wow zoomIn" data-wow-delay=".3s" src={ icon } alt={ title } />

			<div className={ styles.stats__details }>
				<h3 className="wow fadeInUp" data-wow-delay=".3s">
					{ number }
				</h3>

				<p className="wow fadeInUp" data-wow-delay=".5s">
					{ title }
				</p>
			</div>
		</div>
	);
};

export default Stats;
