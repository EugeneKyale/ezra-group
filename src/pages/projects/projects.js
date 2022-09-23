/**
 * External Dependencies
 */
import React, { useState, useEffect } from "react";

/**
 * Internal Dependencies
 */
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";
import Project from "../../components/Project/Project";
import Preloader from "../../components/Preloader/Preloader";
import { axiosInstance, cmsUrl } from "../../_helpers/utils";

import styles from "./projects.module.scss";

const Projects = () => {
	const [ projects, setProjects ] = useState( [] );
	const [ pageContent, setPageContent ] = useState( [] );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	useEffect( () => {
		axiosInstance({
			method: 'get',
			url: `projects-page?populate=hero.backgroundImage`
		}).then( result => {
			setPageContent( result.data.data );
		}).catch( error => {
			setErrorMessage( error.message );
		});
		
		axiosInstance({
			method: 'get',
			url: `projects?populate=coverImage,category&sort[0]=id:asc`
		}).then( result => {
			setProjects( result.data.data );
		}).catch( error => {
			setErrorMessage( error.message );
		});

	}, []);

	const content = pageContent.attributes;

	return (
		<Layout pageTitle="Projects">
			{
				errorMessage ?
				<Preloader />
				:
				<main className={ styles.projects }>
					<Hero
						title={ content?.hero.title }
						backgroundImage={ cmsUrl + content?.hero.backgroundImage.data.attributes.url }
					/>

					<section className={ styles.projects__cards }>
						<div className={ styles.projects__cards_inner }>
							{ projects.length &&
								projects.map( ( project ) => (
									<Project
										key={ project.id }
										id={ project.id }
										coverImage={ project.attributes.coverImage.data.attributes.url }
										title={ project.attributes.title }
										category={ project.attributes.category?.data.attributes.Title }
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