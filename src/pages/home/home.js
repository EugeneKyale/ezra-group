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
import { axiosInstance, cmsUrl } from "../../_helpers/utils";

import styles from "./home.module.scss";

const Home = () => {
	const [ pageContent, setPageContent ] = useState( [] );
	const [ heroBackgroundId, setHeroBackgroudId ] = useState( '' );
	const [ heroBackgroundUrl, setHeroBackgroudUrl ] = useState( '' );
	const [ aboutImageId, setAboutImageId ] = useState( '' );
	const [ aboutImageUrl, setAboutImageUrl ] = useState( '' );
	const [ subsidiaries, setSubsidiaries ] = useState( [] );
	const [ statistics, setStatistics ] = useState( [] );
	const [ values, setValues ] = useState( [] );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	const fetchPageContent = async ( e ) => {
		await axiosInstance({
			method: 'get',
			url: `pages/12`
		}).then(( result ) => {
			setPageContent( result.data );
			setHeroBackgroudId( result.data.acf.hero.background_image );
			setAboutImageId( result.data.acf.about.image );
		}).catch( error => {
			setErrorMessage( error.data.message );
		});
	};
  
	const fetchHeroBackground = async () => {
		await axiosInstance({
			method: 'get',
			url: `media/${ heroBackgroundId }`
		}).then(( background ) => {
			setHeroBackgroudUrl( background.data.media_details.sizes.full.source_url );
		}).catch( error => {
			setErrorMessage( error.data.message );
		});
	};

	const fetchAboutImage = async () => {
		await axiosInstance({
			method: 'get',
			url: `media/${ aboutImageId }`
		}).then(( image ) => {
			setAboutImageUrl( image.data.media_details.sizes.full.source_url );
		}).catch( error => {
			setErrorMessage( error.data.message );
		});
	};

	useEffect(()=>{
		fetchPageContent();

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

					{/* <section className={ styles.home__subsidiaries }>
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
							{ subsidiaries.length &&
								subsidiaries.map( ( subsidiary ) => (
									<Subsidiaries
										key={ subsidiary.id }
										id={ subsidiary.id }
										icon={ subsidiary.attributes.icon.data.attributes.url }
										title={ subsidiary.attributes.title }
										description={ subsidiary.attributes.description }
									/>
								))
							}
						</div>
					</section>

					<section className={ styles.home__stats }>
						<div className={ styles.home__stats_cards }>
							{ statistics.length &&
								statistics.map( ( stat ) => (
									<Stats
										key={ stat.id }
										icon={ stat.attributes.icon.data.attributes.url }
										title={ stat.attributes.title }
										number={ stat.attributes.number }
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
							{ values.length &&
								values.map( ( value, idx ) => (
									<Values
										key={ value.id }
										idx={idx }
										icon={ value.attributes.icon.data.attributes.url }
										title={ value.attributes.title }
										description={ value.attributes.description }
									/>
								))
							}
						</div>
					</section> */}
				</main>
			}
		</Layout>
	);
};

export default Home;
