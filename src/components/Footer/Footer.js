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
				<div className={ styles.footer__top_services }>
					<h4 className="wow fadeInUp" data-wow-delay=".3s">
						Services
					</h4>
					{ MenuConfig.footer.services.map( ( link ) => (
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
				<div className={ styles.footer__top_contact }>
					<h4 className="wow fadeInUp" data-wow-delay=".3s">
						Contact
					</h4>
					<>
						<p>
							Juba, Republic of South Sudan
						</p>

						<a href="mailto:info@ezragroup.com">
							info@ezragroup.com
						</a>
						<br />
						<a href="tel:+211924003703">
							( +211 ) 924 003 703
						</a>
					</>
				</div>
			</div>

			<div className={ styles.footer__copyright }>
				<p>
					© { new Date().getFullYear() } Ezra Group
				</p>
				<p>
					All Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
