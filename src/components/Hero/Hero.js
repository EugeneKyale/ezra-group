/**
 * External Dependencies
*/
import React from "react";

/**
 * Internal Dependencies
*/
import Preloader from "../Preloader";
import styles from "./Hero.module.scss";
 
const Hero = ( { title, backgroundImage } ) => {
	return (
		backgroundImage ?
			<div
				className={ styles.hero }
				style= {{
					background: `linear-gradient( rgba(0, 0, 0, 0.5 ),rgba( 0, 0, 0, 0.5 ) ), url( ${ backgroundImage } )`
				}}
			>
				<h1 className="wow fadeInUp" data-wow-delay=".3s">
					{ title }
				</h1>
			</div> 
		:
			<div className={ styles.hero }>
				<Preloader />
			</div>
	);
};
 
 export default Hero;
 