/**
 * External Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import { toAbsoluteUrl } from "../../_helpers/utils";
import styles from "./Hero.module.scss";

const Hero = ( { backgroundImage } ) => {

	return (
		<div
			className={ styles.hero }
			style= {{
				background: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${toAbsoluteUrl(
					backgroundImage
				)})`
			}}
		>
		</div>
	);
};

export default Hero;
