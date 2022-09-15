/**
 * External Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import styles from "./Values.module.scss";

const Values = ( { icon, title, description } ) => {
	return (
		<div className={ styles.values }>
			<div className={ styles.values__inner }>
				<img className="wow zoomIn" data-wow-delay=".3s" src={ icon } alt="icon" />
				<h3 className="wow fadeInUp" data-wow-delay=".4s">
					{ title }
				</h3>
				<p className="wow fadeInUp" data-wow-delay=".5s">
					{ description }
				</p>
			</div>
		</div>
	);
};

export default Values;
