/**
 * External Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import { cmsUrl } from "../../_helpers/utils";
import styles from "./Values.module.scss";

const Values = ( { idx, icon, title, description } ) => {
	return (
		<div className={ styles.values }>
			<div className={ styles.values__inner }>
				<div className={ styles.values__inner_top }>
					<img className="wow zoomIn" data-wow-delay=".3s" src={ cmsUrl + icon } alt={ title } />

					<h1>
						0{ idx + 1 }
					</h1>
				</div>
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
