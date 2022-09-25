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
import { axiosInstance } from "../../_helpers/utils";

import styles from "./project.module.scss";

const Project = () => {
	const [ projectDetails, setProjectDetails ] = useState( [] );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	let projectId = useParams().id;

	useEffect( () => {
		axiosInstance({
			method: 'get',
			url: `projects/${ projectId }?populate=coverImage,infoCards.icon,projectDetails`
		}).then( result => {
			setProjectDetails( result.data.data.attributes );
		}).catch( error => {
			setErrorMessage( error.message );
		});

	}, [ projectId ]);

	const { title, excerpt, coverImage, infoCards } = projectDetails;

	return (
		<Layout pageTitle={ title }>
			{
				errorMessage ?
				<Preloader />
				:
				<main className={ styles.project }>
					<Hero
						title={ title }
						backgroundImage={ coverImage?.data.attributes.url }
					/>
					<div className={ styles.project__inner }>
						<div className={ styles.project__inner_left + " wow fadeInUp" } data-wow-delay=".3s">
							<ReactMarkdown>
								{ excerpt }
							</ReactMarkdown>
						</div>

						<div className={ styles.project__inner_right + " wow fadeInUp" } data-wow-delay=".5s">
							<div className={ styles.project__inner_right_card }>
								{ infoCards?.map( ( card ) => (
										<Stats
											key={ card.id }
											icon={ card.icon.data.attributes.url }
											title={ card.description }
											number={ card.title }
										/>
									))
								}
							</div>
						</div>
					</div>

					<div className={ styles.project__inner }>
						<div className={ styles.project__inner_bottom }>
							{ projectDetails.projectDetails?.map( ( detail ) => (
								<div className={ styles.project__inner_bottom_inner + " wow fadeInUp" } data-wow-delay=".5s">
									<ReactMarkdown>
										{ detail.description }
									</ReactMarkdown>
								</div>
							))}
						</div>
					</div>
				</main>
			}
		</Layout>
	);
};

export default Project;
