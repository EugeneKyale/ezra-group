/**
 * External Dependencies
 */
import React, { useState, useEffect } from "react";

/**
 * Internal Dependencies
 */
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";
import Subsidiary from "../../components/Subsidiary/Subsidiary";
import Preloader from "../../components/Preloader/Preloader";
import { axiosInstance } from "../../_helpers/utils";

import styles from "./subsidiaries.module.scss";

const Subsidiaries = () => {
	const [ pageContent, setPageContent ] = useState( [] );
	const [ heroBackgroundId, setHeroBackgroudId ] = useState( '' );
	const [ heroBackgroundUrl, setHeroBackgroudUrl ] = useState( '' );
	const [ subsidiaryCards, setSubsidiaryCards ] = useState( [] );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	const fetchPageContent = async () => {
		await axiosInstance({
			method: 'get',
			url: `pages/590`
		}).then(( page ) => {
			setPageContent( page.data );
			setHeroBackgroudId( page.data.acf.hero.background_image );
		}).catch( fetchPageFail => {
			setErrorMessage( fetchPageFail.data.message );
		});
	};

	const fetchSubsidiaries = async () => {
		await axiosInstance({
			method: 'get',
			url: `subsidiary`
		}).then(( res ) => {
			setSubsidiaryCards( res.data );
		}).catch( fetchSubsidiariesFail => {
			setErrorMessage( fetchSubsidiariesFail.data.message );
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

		fetchSubsidiaries();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ heroBackgroundId ]);


	const content = pageContent.acf;

	return (
		<Layout pageTitle="Subsidiaries">
			{
				errorMessage ?
				<Preloader />
				:
				<main className={ styles.subsidiaries }>
					<Hero
						title={ content?.hero.title }
						backgroundImage={ heroBackgroundUrl }
					/>

					<section className={ styles.subsidiaries__overview }>
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
					</section>

					<section className={ styles.subsidiaries__cards }>
						<div className={ styles.subsidiaries__cards_inner }>
							{ subsidiaryCards &&
								subsidiaryCards.map( ( item ) => (
									<Subsidiary
										key={ item.id }
										id={ item.id }
										iconId={ item.acf.icon }
										title={ item.title.rendered }
										excerpt={ item.acf.excerpt }
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

export default Subsidiaries;
