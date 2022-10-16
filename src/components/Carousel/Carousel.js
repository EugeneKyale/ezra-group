/**
 * External Dependencies
*/
import React from "react";
import HeroSlider, { Overlay, MenuNav } from "hero-slider";

/**
 * Internal Dependencies
*/
import Wrapper from "./Wrapper";
import Photo from "./Photo";
import styles from "./Carousel.module.scss";
import "./index.scss";

 
const Carousel = ( { title, subtitle, images } ) => {
	return (
		<HeroSlider
			height={ "100vh" }
			controller={{
				initialSlide: 1,
				slidingDuration: 500,
				slidingDelay: 100
			}}
			animations={{
				slidingAnimation: 'wipe'
			}}
		>
			<Overlay className={ styles.carousel__overlay }>
				<Wrapper>
					<h1 className={ styles.carousel__overlay_title }>
						{ title }
					</h1>
					<p className={ styles.carousel__overlay_subtitle }>
						{ subtitle }
					</p>
				</Wrapper>
			</Overlay>

			{ images &&
                images.map( ( image ) => (
					<Photo key={ image } id={ image } />
                ))
            }
			<MenuNav />
	  </HeroSlider>
	);
};
 
 export default Carousel;
 