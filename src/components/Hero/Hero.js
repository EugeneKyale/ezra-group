/**
 * External Dependencies
*/
import React from "react";
import ReactMarkdown from "react-markdown";

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
					<ReactMarkdown>
						{ title }
					</ReactMarkdown>
				</h1>
			</div> 
		:
			<div className={ styles.hero }>
				<Preloader />
			</div>
	);
};
 
 export default Hero;
 