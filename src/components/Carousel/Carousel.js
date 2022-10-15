/**
 * External Dependencies
*/
import React from "react";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

/**
 * Internal Dependencies
*/
import Wrapper from "./Wrapper";
import styles from "./Carousel.module.scss";
import "./index.scss";

 
const Carousel = ( { title, subtitle } ) => {
	return (
		<HeroSlider
			height={ "100vh" }
			controller={{
				initialSlide: 1,
				slidingDuration: 500,
				slidingDelay: 100
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
  
			<Slide
				label="Giau Pass - Italy"
				background={{
					backgroundColor: 'rgba(0, 0, 0, 0.15)',
					backgroundImageSrc: "http://localhost:10054/wp-content/uploads/2022/09/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg"
				}}
			/>
	
			<Slide
				label="Bogliasco - Kenya"
				background={{
					backgroundColor: 'rgba(0, 0, 0, 0.15)',
					backgroundImageSrc: "http://localhost:10054/wp-content/uploads/2022/10/markus-winkler-aId-xYRTlEc-unsplash.jpg"
				}}
			/>
			<MenuNav />
	  </HeroSlider>
	);
};
 
 export default Carousel;
 