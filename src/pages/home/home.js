/**
 * External Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { toAbsoluteUrl } from "../../_helpers/utils";

import styles from "./home.module.scss";

const Home = () => {

	return (
		<Layout pageTitle="EZRA GROUP - Home">
			<main className={ styles.home }>
				<Hero 
					backgroundImage="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
				/>

				<div className={ styles.home__about }>
					<div className={ styles.home__about_left }>
						<small className="wow fadeInUp" data-wow-delay=".5s">
							We're Trusted
						</small>
						<h2 className="wow fadeInUp" data-wow-delay=".3s">
							Why Choose Our Solar Energy Platform
						</h2>
						<p className="wow fadeInUp" data-wow-delay=".5s">
							We're a reliable energy partner to world wide businesses big and small. 
							Benefit from our experience, expertise and ment to find energy savings designed specifically for your business. 
							See how we can help a business like yours today.
						</p>
						<p className="wow fadeInUp" data-wow-delay=".5s">
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
						</p>
						
						<div className={ styles.home__about_left_bottom }>
							<div className={ styles.home__about_left_bottom_box + ` wow zoomIn`  } data-wow-delay=".5s">
								We're trusted by more than <span> 30k </span> clients.
							</div>
						</div>
					</div>

					<div className={ styles.home__about_right }>
						<img
							className="wow fadeIn" data-wow-delay=".5s"
							alt="Ico"
							src={ toAbsoluteUrl( "images/img-1.jpg" ) }
						/>
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default Home;
