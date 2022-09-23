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
	const [ errorMessage, setErrorMessage ] = useState( '' );

	useEffect( () => {
		axiosInstance({
			method: 'get',
			url: `projects?populate=coverImage&sort[0]=id:asc`
		}).then( result => {
			setProjects( result.data.data );
		}).catch( error => {
			setErrorMessage( error.message );
		});

	}, []);

	return (
		<Layout pageTitle="Projects">
			{
				errorMessage ?
				<Preloader />
				:
				<main className={ styles.projects }>
					<Hero
						title="Our Projects"
						backgroundImage={ cmsUrl + "/uploads/8_Road_Construction_9eaeac99e5.jpg" }
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
										category="Construction"
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
