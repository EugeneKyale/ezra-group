/**
 * External Dependencies
 */
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

/**
 * Internal Dependencies
 */
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Stats from "../../components/Stats";
import Preloader from "../../components/Preloader";
import Gallery from "../../components/Gallery";
import { axiosInstance } from "../../_helpers/utils";

import styles from "./project.module.scss";

const Project = () => {
	const [ projectDetails, setProjectDetails ] = useState( [] );
	const [ projectImageId, setProjectImageId ] = useState( '' );
	const [ projectImageUrl, setProjectImageUrl ] = useState( '' );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	let projectId = useParams().id;

	const fetchProject = async () => {
		await axiosInstance({
			method: 'get',
			url: `project/${ projectId }`
		}).then( result => {
			setProjectDetails( result.data );
			setProjectImageId( result.data.featured_media );
		}).catch( error => {
			setErrorMessage( error.message );
		});
	}

	const fetchProjectImage = async () => {
		await axiosInstance({
			method: 'get',
			url: `media/${ projectImageId }`
		}).then(( res ) => {
			setProjectImageUrl( res.data.media_details.sizes.full.source_url );
		});
	};

	useEffect( () => {
		fetchProject();

		if ( projectImageId ) {
			fetchProjectImage();
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ projectId, projectImageId ]);

	return (
		<Layout pageTitle={ projectDetails.title?.rendered }>
			{
				errorMessage ?
				<Preloader />
				:
				<main className={ styles.project }>
					<Hero
						title={ projectDetails.title?.rendered }
						backgroundImage={ projectImageUrl }
					/>

					<div className={ styles.project__inner }>
						<div className={ styles.project__inner_left + " wow fadeInUp" } data-wow-delay=".3s">
							<ReactMarkdown>
								{ projectDetails.acf?.excerpt }
							</ReactMarkdown>
						</div>

						<div className={ styles.project__inner_right + " wow fadeInUp" } data-wow-delay=".5s">
							{
								projectDetails.acf?.milestones &&
								<div className={ styles.project__inner_right_card }>
									{ 
										projectDetails.acf?.milestones && 
											projectDetails.acf?.milestones.map( ( milestone ) => (
												<Stats
													key={ milestone.id }
													iconId={ milestone.icon }
													title={ milestone.title }
													description={ milestone.description }
												/>
										))
									}
								</div>
							}
						</div>
					</div>

					<div className={ styles.project__inner }>
						<div className={ styles.project__inner_bottom }>
							{ 
								projectDetails.acf?.details && 
							  		projectDetails.acf?.details.map( ( item ) => (
									<div 
										className={ styles.project__inner_bottom_inner + " wow fadeInUp" } 
										data-wow-delay=".5s" 
										dangerouslySetInnerHTML={{
											__html: item.detail
										}}
									/>
								))
							}
						</div>
					</div>

					{
						projectDetails.acf?.gallery &&
						<div className={ styles.project__gallery }>
							<small>
								Project Gallery
							</small>
							<h2>
								View Photo Gallery
							</h2>
							<Gallery ids={ projectDetails.acf?.gallery } />
						</div>
					}
				</main>
			}
		</Layout>
	);
};

export default Project;
