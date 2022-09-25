/**
 * External Dependencies
 */
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

/**
 * Internal Dependencies
 */
import Layout from "../../components/Layout/Layout";
import Preloader from "../../components/Preloader/Preloader";
import { axiosInstance } from "../../_helpers/utils";

import styles from "./project.module.scss";

const Project = () => {
	const [ projectDetails, setProjectDetails ] = useState( [] );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	let projectId = useParams().id;

	useEffect( () => {
		axiosInstance({
			method: 'get',
			url: `projects/${ projectId }?populate=coverImage`
		}).then( result => {
			setProjectDetails( result.data.data.attributes );
		}).catch( error => {
			setErrorMessage( error.message );
		});

	}, [ projectId ]);

	const { title, excerpt } = projectDetails;

	return (
		<Layout pageTitle={ title }>
			{
				errorMessage ?
				<Preloader />
				:
				<main className={ styles.project }>
					<h1>
						{ title }
					</h1>
					<div className={ styles.project__inner }>
						<ReactMarkdown>
							{ excerpt }
						</ReactMarkdown>
					</div>
				</main>
			}
		</Layout>
	);
};

export default Project;
