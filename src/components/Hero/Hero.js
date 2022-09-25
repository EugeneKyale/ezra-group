/**
 * External Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import { cmsUrl } from "../../_helpers/utils";
import styles from "./Hero.module.scss";

const Hero = ( { title, backgroundImage } ) => {

	return (
		<div
			className={ styles.hero }
			style= {{
				background: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url( ${ cmsUrl + backgroundImage } )`
			}}
		>
			<h1 className="wow fadeInUp" data-wow-delay=".3s">
				{ title }
			</h1>
		</div>
	);
};

export default Hero;
