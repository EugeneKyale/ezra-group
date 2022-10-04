/**
 * External Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import styles from "./Preloader.module.scss";

const Preloader = ( { error } ) => {
	return(
		<div className={ styles.preloader }>
			<h3>
				{ error }
			</h3>
			<lottie-player
				className={ styles.preloader__icon }
				src="https://assets6.lottiefiles.com/packages/lf20_kxsd2ytq.json"
				background="transparent"  
				speed="1"
				loop
				autoplay 
			/>
		</div>
	);
}

export default Preloader;
