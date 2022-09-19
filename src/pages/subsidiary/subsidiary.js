/**
 * External Dependencies
 */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'

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

	const { title } = subsidiaryDetails;

	return (
		<Layout pageTitle="EZRA GROUP - Home">
			{
				errorMessage ?
				<Preloader />
				:
				<main className={ styles.subsidiary }>
					<h1>
						{ title }
					</h1>
				</main>
			}
		</Layout>
	);
};

export default Subsidiary;
