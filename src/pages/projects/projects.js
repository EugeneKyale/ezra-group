/**
 * External Dependencies
 */
import React, { useState, useEffect } from "react";

/**
 * Internal Dependencies
 */
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Project from "../../components/Project";
import Preloader from "../../components/Preloader";
import { axiosInstance } from "../../_helpers/utils";

import styles from "./projects.module.scss";

const Projects = () => {
	const [ pageContent, setPageContent ] = useState( [] );
	const [ heroBackgroundId, setHeroBackgroudId ] = useState( '' );
	const [ heroBackgroundUrl, setHeroBackgroudUrl ] = useState( '' );
	const [ projects, setProjects ] = useState( [] );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	const fetchPageContent = async () => {
		await axiosInstance({
			method: 'get',
			url: `pages/285`
		}).then(( page ) => {
			setPageContent( page.data );
			setHeroBackgroudId( page.data.acf.hero.background_image );
		}).catch( fetchPageFail => {
			setErrorMessage( fetchPageFail.data.message );
		});
	};

	const fetchProjects = async () => {
		await axiosInstance({
			method: 'get',
			url: `project`
		}).then(( res ) => {
			setProjects( res.data );
		}).catch( fetchProjectsFail => {
			setErrorMessage( fetchProjectsFail.data.message );
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

		fetchProjects();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ heroBackgroundId ]);


	const content = pageContent.acf;

	return (
		<Layout pageTitle="Projects">
			{
				errorMessage ?
				<Preloader />
				:
				<main className={ styles.projects }>
					<Hero
						title={ content?.hero.title }
						backgroundImage={ heroBackgroundUrl }
					/>

					{/* <section className={ styles.projects__overview }>
						<small className="wow fadeInUp" data-wow-delay=".5s">
							{ content?.overview.tagline }
						</small>
						<h2 className="wow fadeInUp" data-wow-delay=".3s">
							{ content?.overview.title }
						</h2>
						<div
							className="wow fadeInUp" 
							data-wow-delay=".5s"
							dangerouslySetInnerHTML={{
								__html: content?.overview.description
							}}
						/>
					</section> */}

					<section className={ styles.projects__cards }>
						<div className={ styles.projects__cards_inner }>
							{ projects &&
								projects.map( ( project ) => (
									<Project
										key={ project.id }
										id={ project.id }
										coverImage={ project.featured_media }
										title={ project.title.rendered }
										category={ project.acf.category }
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

export default Projects;
