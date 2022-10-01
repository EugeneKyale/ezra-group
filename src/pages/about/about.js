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
import Team from "../../components/Team";
import Preloader from "../../components/Preloader";
import { axiosInstance, cmsUrl } from "../../_helpers/utils";

import styles from "./about.module.scss";

const About = () => {
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
			url: `pages/120`
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

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ heroBackgroundId, aboutImageId ]);


	const content = pageContent.acf;

	return (
		<Layout pageTitle="About">
			{
				errorMessage ?
				<Preloader />
				:
				<main className={ styles.home }>
					<Hero
						title={ content?.hero.title }
						backgroundImage={ heroBackgroundUrl }
					/>

					<section className={ styles.about__history }>
						<div className={ styles.about__history_left }>
							<small className="wow fadeInUp" data-wow-delay=".5s">
								{ content?.history.tagline }
							</small>
							<h2 className="wow fadeInUp" data-wow-delay=".3s">
								{ content?.history.title }
							</h2>

							<div className="wow fadeInUp" data-wow-delay=".5s">
								<ReactMarkdown>
									{ content?.history.description }
								</ReactMarkdown>
							</div>
							
							<div className={ styles.about__history_left_bottom }>
								<div
									className={ styles.about__history_left_bottom_box + ` wow zoomIn`  } 
									data-wow-delay=".5s"
									dangerouslySetInnerHTML={{
										__html: content?.history.highlights
									}}
								/>

								<div className={ styles.about__history_left_bottom_cards }>
									{/* { statistics.length &&
										statistics.map( ( stat ) => (
											<Stats
												key={ stat.id }
												icon={ stat.attributes.icon.data.attributes.url }
												title={ stat.attributes.title }
												number={ stat.attributes.number }
											/>
										))
									} */}
								</div>
							</div>
						</div>
					</section>

					{/* <section className={ styles.about__mission }>
						<small className="wow fadeInUp" data-wow-delay=".5s">
							{ content?.mission.tagline }
						</small>
						<div className={ styles.about__mission_top }>
							<div className={ styles.about__mission_top_left }>
								<h2 className="wow fadeInUp" data-wow-delay=".3s">
									{ content?.mission.title }
								</h2>
							</div>

							<div className={ styles.about__mission_top_right + " wow fadeInUp" } data-wow-delay=".5s">
								<ReactMarkdown>
									{ content?.mission.description }
								</ReactMarkdown>
							</div>
						</div>

						<div className={ styles.about__mission_cards }>
							{ content?.mission.card.length &&
								content?.mission.card.map( ( card ) => (
									<div key={ card.id } className={ styles.about__mission_cards_component }>
										<div className={ styles.about__mission_cards_component__inner }>
											<div className={ styles.about__mission_cards_component__inner_top }>
												<img className="wow zoomIn" data-wow-delay=".3s" src={ cmsUrl + card.icon.data.attributes.url } alt="" />
											</div>
											<h3 className="wow fadeInUp" data-wow-delay=".4s">
												{ card.title }
											</h3>
											<p className="wow fadeInUp" data-wow-delay=".5s">
												<ReactMarkdown>
													{ card.description }
												</ReactMarkdown>
											</p>
										</div>
									</div>
								))
							}
						</div>
					</section> */}

					{/* <section className={ styles.about__team }>
						<div className={ styles.about__team_top }>
							<small className="wow fadeInUp" data-wow-delay=".5s">
								{ content?.team.tagline }
							</small>
							<h2 className="wow fadeInUp" data-wow-delay=".3s">
								{ content?.team.title }
							</h2>
							<div
								className="wow fadeInUp" 
								data-wow-delay=".5s"
								dangerouslySetInnerHTML={{
									__html: content?.team.description
								}}
							/>
						</div>

						<div className={ styles.about__team_cards }>
							{ teamMembers.length &&
								teamMembers.map( ( member ) => (
									<Team
										key={ member.id }
										photo={ member.attributes.photo.data.attributes.url }
										name={ member.attributes.name }
										position={ member.attributes.position }
										social={ member.attributes.social }
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

export default About;
