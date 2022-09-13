/**
 * External Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Companies from "../../components/Companies";
import { toAbsoluteUrl } from "../../_helpers/utils";

import styles from "./home.module.scss";
import mockData from "./mock.json";

const Home = () => {

	const { hero, about, companies } = mockData;

	return (
		<Layout pageTitle="EZRA GROUP - Home">
			<main className={ styles.home }>
				<Hero
					title={ hero.title }
					backgroundImage={ hero.background_image }
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

				<div className={ styles.home__companies }>
					<div className={ styles.home__companies_top }>
						<small className="wow fadeInUp" data-wow-delay=".5s">
							{ companies.tagline }
						</small>
						<h2 className="wow fadeInUp" data-wow-delay=".3s">
							{ companies.title }
						</h2>
						<div
							className="wow fadeInUp" 
							data-wow-delay=".5s"
							dangerouslySetInnerHTML={{
								__html: companies.description
							}}
						/>
					</div>

					<div className={ styles.home__companies_cards }>
						{ companies.cards.length &&
							companies.cards.map( ( company, idx ) => (
								<Companies
									key={ idx }
									icon={ company.icon }
									title={ company.title }
									description={ company.description }
									page={ company.page }
								/>
							))
						}
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default Home;
