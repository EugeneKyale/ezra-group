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
import Subsidiaries from "../../components/Subsidiaries";
import Values from "../../components/Values";
import Preloader from "../../components/Preloader";
import { axiosInstance } from "../../_helpers/utils";

import styles from "./home.module.scss";

const Home = () => {
	const [ pageContent, setPageContent ] = useState( [] );
	const [ heroBackgroundId, setHeroBackgroudId ] = useState( '' );
	const [ heroBackgroundUrl, setHeroBackgroudUrl ] = useState( '' );
	const [ aboutImageId, setAboutImageId ] = useState( '' );
	const [ aboutImageUrl, setAboutImageUrl ] = useState( '' );
	const [ subsidiaries, setSubsidiaries ] = useState( [] );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	const fetchPageContent = async () => {
		await axiosInstance({
			method: 'get',
			url: `pages/12`
		}).then(( page ) => {
			setPageContent( page.data );
			setHeroBackgroudId( page.data.acf.hero.background_image );
			setAboutImageId( page.data.acf.about.image );
		}).catch( fetchPageFail => {
			setErrorMessage( fetchPageFail.data.message );
		});
	};

	const fetchSubsidiaries = async () => {
		await axiosInstance({
			method: 'get',
			url: `subsidiary`
		}).then(( subs ) => {
			setSubsidiaries( subs );
		}).catch( error => {
			setErrorMessage( error.data.message );
		});
	}

	const fetchHeroBackground = async () => {
		await axiosInstance({
			method: 'get',
			url: `media/${ heroBackgroundId }`
		}).then(( background ) => {
			setHeroBackgroudUrl( background.data.media_details.sizes.full.source_url );
		}).catch( fetchHeroBackgroundFail => {
			setErrorMessage( fetchHeroBackgroundFail.data.message );
		});
	};

	const fetchAboutImage = async () => {
		await axiosInstance({
			method: 'get',
			url: `media/${ aboutImageId }`
		}).then(( image ) => {
			setAboutImageUrl( image.data.media_details.sizes.full.source_url );
		}).catch( fetchAboutImageFail => {
			setErrorMessage( fetchAboutImageFail.data.message );
		});
	};

	useEffect(()=>{
		fetchPageContent();

		if ( pageContent ) {
			fetchSubsidiaries();
		}

		if ( heroBackgroundId ) {
			fetchHeroBackground();
		}

		if ( aboutImageId ) {
			fetchAboutImage();
		}

	}, [ heroBackgroundId, aboutImageId ])


	const content = pageContent.acf;

	return (
		<Layout pageTitle="Ezra Group - Home">
			{
				errorMessage ?
				<Preloader error={ errorMessage } />
				:
				<main className={ styles.home }>
					<Hero
						title={ content?.hero.title }
						backgroundImage={ heroBackgroundUrl }
					/>

					<section className={ styles.home__about }>
						<div className={ styles.home__about_left }>
							<small className="wow fadeInUp" data-wow-delay=".5s">
								{ content?.about.tagline }
							</small>
							<h2 className="wow fadeInUp" data-wow-delay=".3s">
								{ content?.about.title }
							</h2>

							<div className="wow fadeInUp" data-wow-delay=".5s">
								<ReactMarkdown>
									{ content?.about.description }
								</ReactMarkdown>
							</div>
							
							<div className={ styles.home__about_left_bottom }>
								<div
									className={ styles.home__about_left_bottom_box + ` wow zoomIn`  } 
									data-wow-delay=".5s"
									dangerouslySetInnerHTML={{
										__html: content?.about.highlights
									}}
								/>
							</div>
						</div>

						<div className={ styles.home__about_right }>
							<img
								className="wow zoomIn" data-wow-delay=".6s"
								alt="illustration"
								src={ aboutImageUrl }
							/>
						</div>
					</section>

					<section className={ styles.home__subsidiaries }>
						<div className={ styles.home__subsidiaries_top }>
							<small className="wow fadeInUp" data-wow-delay=".5s">
								{ content?.subsidiaries.tagline }
							</small>
							<h2 className="wow fadeInUp" data-wow-delay=".3s">
								{ content?.subsidiaries.title }
							</h2>
							<div
								className="wow fadeInUp" 
								data-wow-delay=".5s"
								dangerouslySetInnerHTML={{
									__html: content?.subsidiaries.description
								}}
							/>
						</div>

						<div className={ styles.home__subsidiaries_cards }>
							{ subsidiaries.data &&
								subsidiaries.data.map( ( item ) => (
									<Subsidiaries
										key={ item.id }
										id={ item.id }
										iconId={ item.acf.icon }
										title={ item.title.rendered }
										excerpt={ item.acf.excerpt }
									/>
								))
							}
						</div>
					</section>

					<section className={ styles.home__stats }>
						<div className={ styles.home__stats_cards }>
							{ content?.statistics.length &&
								content?.statistics.map( ( stat ) => (
									<Stats
										key={ stat.id }
										iconId={ stat.icon }
										title={ stat.title }
										description={ stat.description }
									/>
								))
							}
						</div>
					</section>

					<section className={ styles.home__values }>
						<small className="wow fadeInUp" data-wow-delay=".5s">
							{ content?.values.tagline }
						</small>
						<div className={ styles.home__values_top }>
							<div className={ styles.home__values_top_left }>
								<h2 className="wow fadeInUp" data-wow-delay=".3s">
									{ content?.values.title }
								</h2>
							</div>

							<div className={ styles.home__values_top_right + " wow fadeInUp" } data-wow-delay=".5s">
								<ReactMarkdown>
									{ content?.values.description }
								</ReactMarkdown>
							</div>
						</div>

						<div className={ styles.home__values_cards }>
							{ content?.values.values.length &&
								content?.values.values.map( ( value, idx ) => (
									<Values
										key={ value.id }
										idx={ idx }
										iconId={ value.icon }
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
