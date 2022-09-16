/**
 * External Dependencies
 */
import React from "react";
import { Link } from "react-router-dom";

/**
 * Internal Dependencies
 */
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
						EZRA GROUP is a company founded in October 1986 in Ethiopia by two brothers.
					</p>
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
							Garden No.18 Juba, South Sudan
						</p>

						<a href="mailto:ezratrading1@gmail.com">				
							ezratrading1@gmail.com
						</a>
						<br />
						<a href="tel:+211911008088">
							( +211 ) 911 008 088
						</a>
						<br />
						<a href="tel:+211922228062">
							( +211 ) 922 228 062
						</a>
					</>
				</div>
			</div>

			<div className={ styles.footer__copyright }>
				<p>
					© { new Date().getFullYear() } EZRA GROUP | All Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
