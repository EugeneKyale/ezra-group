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
import { axiosInstance } from "../../_helpers/utils";

import styles from "./about.module.scss";

const About = () => {
	const [ pageContent, setPageContent ] = useState( [] );
	const [ heroBackgroundId, setHeroBackgroudId ] = useState( '' );
	const [ heroBackgroundUrl, setHeroBackgroudUrl ] = useState( '' );
	const [ team, setTeam ] = useState( [] );
	const [ errorMessage, setErrorMessage ] = useState( '' );
	const [ readMore, setReadMore ] = useState( true );

	const fetchPageContent = async () => {
		await axiosInstance({
			method: 'get',
			url: `pages/120`
		}).then(( page ) => {
			setPageContent( page.data );
			setHeroBackgroudId( page.data.acf.hero.background_image );
		}).catch( fetchPageFail => {
			setErrorMessage( fetchPageFail.data.message );
		});
	};

	const fetchTeam = async () => {
		await axiosInstance({
			method: 'get',
			url: `team?filter[orderby]=date&order=asc`
		}).then(( res ) => {
			setTeam( res.data );
		}).catch( fetchTeamFail => {
			setErrorMessage( fetchTeamFail.data.message );
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

	useEffect(()=>{
		fetchPageContent();

		if ( heroBackgroundId ) {
			fetchHeroBackground();
		}

		fetchTeam();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ heroBackgroundId ]);


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

							{
								readMore ?
								<div 
									className="wow fadeInUp" 
									data-wow-delay=".5s"
									dangerouslySetInnerHTML={{ __html: content?.history.description.slice( 0, 985 ) }} 
								/>
							:
								<div 
									className="wow fadeInUp" 
									data-wow-delay=".5s"
									dangerouslySetInnerHTML={{
										__html: content?.history.description
									}}
								/>
							}
							{
								readMore && 
								<p
									onClick={ () => setReadMore( false ) }
									style={{
										fontWeight: '500',
										color: '#DAA520',
										cursor: 'pointer',
									}}
								> 
									Read More...
								</p>
							}

							{/* <div 
								className="wow fadeInUp" 
								data-wow-delay=".5s"
								dangerouslySetInnerHTML={{
									__html: content?.history.description
								}}
							/> */}
							
							<div className={ styles.about__history_left_bottom }>
								<div
									className={ styles.about__history_left_bottom_box + ` wow zoomIn`  } 
									data-wow-delay=".5s"
									dangerouslySetInnerHTML={{
										__html: content?.history.highlights
									}}
								/>

								<div className={ styles.about__history_left_bottom_cards }>
									{ content?.history.stats &&
										content?.history.stats.map( ( stat ) => (
											<Stats
												key={ stat.id }
												title={ stat.title }
												description={ stat.description }
											/>
										))
									}
								</div>
							</div>
						</div>
					</section>

					<section className={ styles.about__mission }>
						<small className="wow fadeInUp" data-wow-delay=".5s">
							{ content?.values.tagline }
						</small>
						<div className={ styles.about__mission_top }>
							<div className={ styles.about__mission_top_left }>
								<h2 className="wow fadeInUp" data-wow-delay=".3s">
									{ content?.values.title }
								</h2>
							</div>

							<div className={ styles.about__mission_top_right + " wow fadeInUp" } data-wow-delay=".5s">
								<ReactMarkdown>
									{ content?.values.description }
								</ReactMarkdown>
							</div>
						</div>

						<div className={ styles.about__mission_cards }>
							{ content?.values.value &&
								content?.values.value.map( ( card ) => (
									<div key={ card.id } className={ styles.about__mission_cards_component }>
										<div className={ styles.about__mission_cards_component__inner }>
											<div className={ styles.about__mission_cards_component__inner_top }>

											</div>
											<h3 className="wow fadeInUp" data-wow-delay=".4s">
												{ card.title }
											</h3>
											<div 
												className="wow fadeInUp" 
												data-wow-delay=".5s"
												dangerouslySetInnerHTML={{
													__html: card.description
												}}
											/>
										</div>
									</div>
								))
							}
						</div>
					</section>

					<section className={ styles.about__team }>
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
							{ team &&
								team.map( ( member ) => (
									<Team
										key={ member.id }
										photo={ member.featured_media }
										name={ member.title.rendered }
										position={ member.acf.position }
										bio={ member.acf.bio }
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

export default About;
