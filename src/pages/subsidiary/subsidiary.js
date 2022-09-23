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
import Preloader from "../../components/Preloader";
import { axiosInstance } from "../../_helpers/utils";

import styles from "./subsidiary.module.scss";

const Subsidiary = () => {
	const [ subsidiaryDetails, setSubsidiaryDetails ] = useState( [] );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	let subsidiaryId = useParams().id;

	useEffect( () => {
		axiosInstance({
			method: 'get',
			url: `subsidiaries/${ subsidiaryId }?populate=icon`
		}).then( result => {
			setSubsidiaryDetails( result.data.data.attributes );
		}).catch( error => {
			setErrorMessage( error.message );
		});

	}, [ subsidiaryId ]);

	const { title, description } = subsidiaryDetails;

	return (
		<Layout pageTitle="Ezra Group - Home">
			{
				errorMessage ?
				<Preloader />
				:
				<main className={ styles.subsidiary }>
					<h1>
						{ title }
					</h1>
					<div className={ styles.subsidiary__inner }>
						<ReactMarkdown>
							{ description }
						</ReactMarkdown>
					</div>
				</main>
			}
		</Layout>
	);
};

export default Subsidiary;
