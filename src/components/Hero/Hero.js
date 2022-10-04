/**
 * External Dependencies
 */
import React from "react";
import ReactMarkdown from "react-markdown";
import { BackgroundImage } from "react-image-and-background-image-fade";

/**
 * Internal Dependencies
 */
import styles from "./Hero.module.scss";

const Hero = ( { title, backgroundImage } ) => {

	return (
		<BackgroundImage
			src={ backgroundImage }
			className={ styles.hero }
			lazyLoad
		>
			<h1 className="wow fadeInUp" data-wow-delay=".3s">
				<ReactMarkdown>
					{ title }
				</ReactMarkdown>
			</h1>
		</BackgroundImage>
	);
};

export default Hero;
