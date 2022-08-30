/**
 * External Dependencies
 */
import React from "react";
import { Link } from "react-router-dom";

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
				<div className={ styles.footer__top_logo }>
					<img
						src={ `${ toAbsoluteUrl( "/logo-white.svg" ) }` }
						alt="logo-white"
					/>
				</div>
				<div className={ styles.footer__top_contact }>
					<h4 className="wow fadeInUp" data-wow-delay=".3s">
						Contact
					</h4>
					<>
						<p>
							Nairobi, Kenya.
						</p>

						<a href="mailto:info@swahili.tours">
							info@swahili.tours
						</a>
						<br />
						<a href="tel:+254722143359">
							( +254 ) 722 143 359
						</a>
					</>
				</div>
				<div className={ styles.footer__top_payment }>
					<h4 className="wow fadeInUp" data-wow-delay=".3s">
						Payment Methods
					</h4>
					<div className={ styles.footer__top_payment_logos }>
						{ MenuConfig.footer.paymentMethods.map( ( method ) => (
							<img
								key={ method.id }
								src={ toAbsoluteUrl( method.logo ) }
								alt={ method.title }
							/>
						))}
					</div>
				</div>
				<div className={ styles.footer__top_quicklinks }>
					<h4 className="wow fadeInUp" data-wow-delay=".3s">
						Quicklinks
					</h4>
					{ MenuConfig.footer.quicklinks.map( ( link ) => (
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
			</div>

			<div className={ styles.footer__copyright }>
				<p>
					© { new Date().getFullYear() } Swahili Tours
				</p>
				<p>
					All Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
