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
import Gallery from "../../components/Gallery";
import Preloader from "../../components/Preloader";
import { axiosInstance } from "../../_helpers/utils";

import styles from "./subsidiary.module.scss";

const Subsidiary = () => {
	const [ subsidiaryDetails, setSubsidiaryDetails ] = useState( [] );
	const [ subsidiaryImageId, setSubsidiaryImageId ] = useState( '' );
	const [ subsidiaryImageUrl, setSubsidiaryImageUrl ] = useState( '' );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	let subsidiaryId = useParams().id;

	const fetchSubsidiary = async () => {
		await axiosInstance({
			method: 'get',
			url: `subsidiary/${ subsidiaryId }`
		}).then( result => {
			setSubsidiaryDetails( result.data );
			setSubsidiaryImageId( result.data.featured_media );
		}).catch( error => {
			setErrorMessage( error.message );
		});
	}

	const fetchSubsidiaryImage = async () => {
		await axiosInstance({
			method: 'get',
			url: `media/${ subsidiaryImageId }`
		}).then(( res ) => {
			setSubsidiaryImageUrl( res.data.media_details.sizes.full.source_url );
		});
	};

	useEffect( () => {
		fetchSubsidiary();

		if ( subsidiaryImageId ) {
			fetchSubsidiaryImage();
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ subsidiaryId, subsidiaryImageId ]);

	return (
		<Layout pageTitle={ subsidiaryDetails.title?.rendered }>
			{
				errorMessage ?
				<Preloader />
				:
				<main className={ styles.subsidiary }>
					<Hero
						title={ subsidiaryDetails.title?.rendered }
						backgroundImage={ subsidiaryImageUrl }
					/>
					<div className={ styles.subsidiary__inner }>
						<div className={ styles.subsidiary__inner_left }>
							<div className={ styles.subsidiary__inner_left_top }>
								<h3>
									Services
								</h3>
								{ 
									subsidiaryDetails.acf?.services &&
										subsidiaryDetails.acf?.services.map( ( item, idx ) => (
											<div key={ idx } className={ styles.subsidiary__inner_left_top_services }>
												{ item.service }  <span> &rarr; </span>
											</div>
									))
								}
							</div>

							<div className={ styles.subsidiary__inner_left_bottom }>
								<div 
									className={ styles.subsidiary__inner_left_bottom_details }
									dangerouslySetInnerHTML={{
										__html: subsidiaryDetails.acf?.cta
									}}
								/>
							</div>
						</div>

						<div 
							className={ styles.subsidiary__inner_right }
							dangerouslySetInnerHTML={{
								__html: subsidiaryDetails.acf?.description
							}}
						/>
					</div>
					{
						subsidiaryDetails.acf?.gallery &&
						<div className={ styles.subsidiary__gallery }>
							<small>
								Gallery
							</small>
							<h2>
								View Photo Gallery
							</h2>
							<Gallery ids={ subsidiaryDetails.acf?.gallery } />
						</div>
					}
				</main>
			}
		</Layout>
	);
};

export default Subsidiary;
