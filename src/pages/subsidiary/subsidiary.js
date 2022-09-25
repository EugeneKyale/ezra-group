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
import Hero from "../../components/Hero";
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
			url: `subsidiaries/${ subsidiaryId }?populate=icon,coverImage`
		}).then( result => {
			setSubsidiaryDetails( result.data.data.attributes );
		}).catch( error => {
			setErrorMessage( error.message );
		});

	}, [ subsidiaryId ]);

	const { title, description, coverImage } = subsidiaryDetails;

	return (
		<Layout pageTitle={ title }>
			{
				errorMessage ?
				<Preloader />
				:
				<main className={ styles.subsidiary }>
					<Hero
						title={ title }
						backgroundImage={ coverImage?.data.attributes.url }
					/>
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
