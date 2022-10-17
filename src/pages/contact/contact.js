/**
 * External Dependencies
 */
import React, { useState, useEffect } from "react";

/**
 * Internal Dependencies
 */
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Map from "../../components/Map";
import Preloader from "../../components/Preloader";
import ContactForm from "../../components/ContactForm";
import { axiosInstance, toAbsoluteUrl } from "../../_helpers/utils";

import styles from "./contact.module.scss";

const Contact = () => {
	const [ pageContent, setPageContent ] = useState( [] );
	const [ heroBackgroundId, setHeroBackgroudId ] = useState( '' );
	const [ heroBackgroundUrl, setHeroBackgroudUrl ] = useState( '' );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	const fetchPageContent = async () => {
		await axiosInstance({
			method: 'get',
			url: `pages/560`
		}).then(( page ) => {
			setPageContent( page.data );
			setHeroBackgroudId( page.data.acf.hero.background_image );
		}).catch( fetchPageFail => {
			setErrorMessage( fetchPageFail.data.message );
		});
	};

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

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ heroBackgroundId ]);


	const content = pageContent.acf;

	return (
		<Layout pageTitle="Contact">
			{
				errorMessage ?
				<Preloader />
				:
				<main className={ styles.contact }>
					<Hero
						title={ content?.hero.title }
						backgroundImage={ heroBackgroundUrl }
					/>

					<h3 className={ styles.contact__intro }>
						Feel free to ask questions or share your message with us.	
					</h3>
					<section className={ styles.contact__cards }>
						<div className={ styles.contact__cards_flex }>
							<img
								className="wow zoomIn" 
								data-wow-delay=".3s"
								src={ toAbsoluteUrl( "/icons/phone.png" ) }
								alt="Mobile"
							/>
							<div>
								<h4 className="wow fadeInUp" data-wow-delay=".4s">
									Mobile
								</h4>
								<p className="wow fadeInUp" data-wow-delay=".5s">
									<a href="tel:+211911008088">
										( +211 ) 911 008 088
									</a>
									<br />
									<a href="tel:+212929008088">
										( +212 ) 929 008 088
									</a>
								</p>
							</div>
						</div>
						<div>
							<div className={ styles.contact__cards_flex }>
								<img
									className="wow zoomIn" 
									data-wow-delay=".3s"
									src={ toAbsoluteUrl( "/icons/mail.png" ) }
									alt="Email"
								/>
								<div>
									<h4 className="wow fadeInUp" data-wow-delay=".4s">
										Email
									</h4>
									<p className="wow fadeInUp" data-wow-delay=".5s">
										<a href="mailto:info@ezraenterprise.com">				
											info@ezraenterprise.com
										</a>
									</p>
								</div>
							</div>
						</div>
						<div>
							<div className={ styles.contact__cards_flex }>
								<img
									className="wow zoomIn" 
									data-wow-delay=".3s"
									src={ toAbsoluteUrl( "/icons/address.png" ) }
									alt="Address"
								/>
								<div>
									<h4 className="wow fadeInUp" data-wow-delay=".4s">
										Address
									</h4>
									<p className="wow fadeInUp" data-wow-delay=".5s">
										Block Hai Jebel Munuki <br />
										Garden 18 Juba, South Sudan
									</p>
								</div>
							</div>
						</div>
					</section>

					<section className={ styles.contact__form }>
						<ContactForm />
					</section>
					<Map />
				</main>
			}
		</Layout>
	);
};

export default Contact;
