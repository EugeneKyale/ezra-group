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
import Preloader from "../../components/Preloader";
import { axiosInstance } from "../../_helpers/utils";

import styles from "./csr.module.scss";

const Csr = () => {
	const [ pageContent, setPageContent ] = useState( [] );
	const [ heroBackgroundId, setHeroBackgroudId ] = useState( '' );
	const [ heroBackgroundUrl, setHeroBackgroudUrl ] = useState( '' );
	const [ initiatives, setInitiatives ] = useState( [] );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	const fetchPageContent = async () => {
		await axiosInstance({
			method: 'get',
			url: `pages/446`
		}).then(( page ) => {
			setPageContent( page.data );
			setHeroBackgroudId( page.data.acf.hero.background_image );
		}).catch( fetchPageFail => {
			setErrorMessage( fetchPageFail.data.message );
		});
	};

	const fetchInitiatives = async () => {
		await axiosInstance({
			method: 'get',
			url: `csr`
		}).then(( res ) => {
			setInitiatives( res.data );
		}).catch( fetchInitiativesFail => {
			setErrorMessage( fetchInitiativesFail.data.message );
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

		fetchInitiatives();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ heroBackgroundId ]);


	const content = pageContent.acf;

	return (
		<Layout pageTitle="Initiatives">
			{
				errorMessage ?
				<Preloader />
				:
				<main className={ styles.csr }>
					<Hero
						title={ content?.hero.title }
						backgroundImage={ heroBackgroundUrl }
					/>

					<section className={ styles.csr__cards }>
						<div className={ styles.csr__cards_inner }>
							{ initiatives &&
								initiatives.map( ( initiative ) => (
									<div key={ initiative.id } className={ styles.csr__cards_inner_wrapper }>
										<div className={ styles.csr__cards_inner_wrapper_left }>
											<h3>
												<ReactMarkdown>
														{ initiative.title.rendered }
												</ReactMarkdown>
											</h3>
											<div
												className={ styles.csr__cards_inner_wrapper_left_description }
												dangerouslySetInnerHTML={{
													__html: initiative.acf.description
												}}
											/>
										</div>
										<div className={ styles.csr__cards_inner_wrapper_right }>
											
										</div>
									</div>
								))
							}
						</div>
					</section>
				</main>
			}
		</Layout>
	);
};

export default Csr;
