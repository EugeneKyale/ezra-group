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
import mockData from "./mock.json";

const Home = () => {

	const { about } = mockData;

	return (
		<Layout pageTitle="EZRA GROUP - Home">
			<main className={ styles.home }>
				<Hero 
					backgroundImage="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
				/>

				<div className={ styles.home__about }>
					<div className={ styles.home__about_left }>
						<small className="wow fadeInUp" data-wow-delay=".5s">
							{ about.tagline }
						</small>
						<h2 className="wow fadeInUp" data-wow-delay=".3s">
							{ about.title }
						</h2>
						<div
							className="wow fadeInUp" 
							data-wow-delay=".5s"
							dangerouslySetInnerHTML={{
								__html: about.description
							}}
						/>
						
						<div className={ styles.home__about_left_bottom }>
							<div
								className={ styles.home__about_left_bottom_box + ` wow zoomIn`  } 
								data-wow-delay=".5s"
								dangerouslySetInnerHTML={{
									__html: about.box
								}}
							/>
						</div>
					</div>

					<div className={ styles.home__about_right }>
						{/* TODO: replace src */}
						<img
							className="wow fadeInRight" data-wow-delay=".6s"
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
