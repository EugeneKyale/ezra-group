/**
 * External Dependencies
 */
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

/**
 * Internal Dependencies
 */
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Stats from "../../components/Stats";
import Companies from "../../components/Companies";
import Values from "../../components/Values";
import Preloader from "../../components/Preloader";
import { axiosInstance } from "../../_helpers/utils";

import styles from "./home.module.scss";
import mockData from "./mock.json";

const Home = () => {
	const [ homeContent, setHomeContent ] = useState( [] );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	useEffect( () => {
		axiosInstance({
			method: 'get',
			url: `home?populate[0]=hero,about`
		}).then( result => {
			setHomeContent( result.data.data );
		}).catch( error => {
			setErrorMessage( error.message );
		});

	}, []);

	const { companies, stats, values } = mockData;
	const content = homeContent.attributes;

	return (
		<Layout pageTitle="EZRA GROUP - Home">
			{
				errorMessage ?
				<Preloader />
				:
				<main className={ styles.home }>
					<Hero
						title={ content && content.hero.title }
						backgroundImage={ content && content.hero.backgroundImage }
					/>

					<section className={ styles.home__about }>
						<div className={ styles.home__about_left }>
							<small className="wow fadeInUp" data-wow-delay=".5s">
								{ content && content.about.tagline }
							</small>
							<h2 className="wow fadeInUp" data-wow-delay=".3s">
								{ content && content.about.title }
							</h2>

							<div className="wow fadeInUp" data-wow-delay=".5s">
								<ReactMarkdown>
									{ content && content.about.description }
								</ReactMarkdown>
							</div>
							
							<div className={ styles.home__about_left_bottom }>
								<div
									className={ styles.home__about_left_bottom_box + ` wow zoomIn`  } 
									data-wow-delay=".5s"
									dangerouslySetInnerHTML={{
										__html: content && content.about.highlights
									}}
								/>
							</div>
						</div>

						<div className={ styles.home__about_right }>
							{/* TODO: replace src */}
							<img
								className="wow fadeInRight" data-wow-delay=".6s"
								alt="image"
								src={ content && content.about.image }
							/>
						</div>
					</section>

					<section className={ styles.home__companies }>
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
					</section>

					<section className={ styles.home__stats }>
						<div className={ styles.home__stats_cards }>
							{ stats.cards.length &&
								stats.cards.map( ( stat, idx ) => (
									<Stats
										key={ idx }
										icon={ stat.icon }
										title={ stat.title }
										number={ stat.number }
									/>
								))
							}
						</div>
					</section>

					<section className={ styles.home__values }>
						<small className="wow fadeInUp" data-wow-delay=".5s">
							{ values.tagline }
						</small>
						<div className={ styles.home__values_top }>
							<div className={ styles.home__values_top_left }>
								<h2 className="wow fadeInUp" data-wow-delay=".3s">
									{ values.title }
								</h2>
							</div>

							<div
								className={ styles.home__values_top_right + " wow fadeInUp" } 
								data-wow-delay=".5s"
								dangerouslySetInnerHTML={{
									__html: values.description
								}}
							/>
						</div>

						<div className={ styles.home__values_cards }>
							{ values.cards.length &&
								values.cards.map( ( value, idx ) => (
									<Values
										key={ idx }
										idx={idx }
										icon={ value.icon }
										title={ value.title }
										description={ value.description }
									/>
								))
							}
						</div>
					</section>
				</main>
			}
		</Layout>
	);
};

export default Home;
