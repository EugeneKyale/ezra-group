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
import Preloader from "../../components/Preloader";
import { axiosInstance, cmsUrl } from "../../_helpers/utils";

import styles from "./about.module.scss";

const About = () => {
	const [ aboutContent, setAboutContent ] = useState( [] );
	const [ statistics, setStatistics ] = useState( [] );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	useEffect( () => {
		axiosInstance({
			method: 'get',
			url: `about?populate=hero.backgroundImage,history.image`
		}).then( result => {
			setAboutContent( result.data.data );
		}).catch( error => {
			setErrorMessage( error.message );
		});

		axiosInstance({
			method: 'get',
			url: `statistics?populate=icon`
		}).then( result => {
			setStatistics( result.data.data );
		}).catch( error => {
			setErrorMessage( error.message );
		});

	}, []);

	const content = aboutContent.attributes;

	return (
		<Layout pageTitle="About">
			{
				errorMessage ?
				<Preloader />
				:
				<main className={ styles.home }>
					<Hero
						title={ content?.hero.title }
						backgroundImage={ cmsUrl + content?.hero.backgroundImage.data.attributes.url }
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
							</div>
						</div>
					</section>
				</main>
			}
		</Layout>
	);
};

export default About;
