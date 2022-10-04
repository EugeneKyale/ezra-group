/**
 * External Dependencies
 */
import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

/**
 * Internal Dependencies
 */
import { toAbsoluteUrl } from "../../_helpers/utils";
import MenuConfig from "../../_helpers/MenuConfig";

import styles from "./Footer.module.scss";

const Footer = () => {

	return (
		<footer className={ styles.footer }>
			<div className={ styles.footer__top }>
				<div className={ styles.footer__top_about }>
					<h4 className="wow fadeInUp" data-wow-delay=".3s">
						About Us
					</h4>
					<p>
						The Ezra Group is already seen as a catalyst for change in their new home country, where they have committed to creating a lasting legacy as they transform the country's landscape.
					</p>
				</div>
				<div className={ styles.footer__top_socials }>
					<h4 className="wow fadeInUp" data-wow-delay=".3s">
						Follow Us
					</h4>
					{ MenuConfig.footer.socialPages.map( ( social ) => (
						<div className={ styles.footer__top_socials_single } key={ social.id }>
							<LazyLoadImage
								effect="blur"
								src={ toAbsoluteUrl( social.icon ) }
								alt={ social.title }
							/>
							<a href={ social.url } target="_blank" rel="noopener noreferrer"> { social.title } </a>
						</div>
					))}
				</div>
				<div className={ styles.footer__top_media }>
					<h4 className="wow fadeInUp" data-wow-delay=".3s">
						Media
					</h4>
					{ MenuConfig.footer.media.map( ( link ) => (
						<div
							key={ link.id }
							className={ styles.footer__top_links }
						>
							<Link to={ link.page }>
								{ link.title }
							</Link>
						</div>
					))}
				</div>
				<div className={ styles.footer__top_contact }>
					<h4 className="wow fadeInUp" data-wow-delay=".3s">
						Contact
					</h4>
					<>
						<p>				
							Block Hai Jebel Munuki
						</p>

						<p>				
							Garden No.18 Juba, South Sudan
						</p>

						<a href="mailto:info@ezraenterprise.com">				
							info@ezraenterprise.com
						</a>
						<br />
						<a href="tel:+211911008088">
							( +211 ) 911 008 088
						</a>
						<br />
						<a href="tel:+212929008088">
							( +212 ) 929 008 088
						</a>
					</>
				</div>
			</div>

			<div className={ styles.footer__copyright }>
				<p>
					© { new Date().getFullYear() } Ezra Group | All Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
