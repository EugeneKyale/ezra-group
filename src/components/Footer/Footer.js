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
				<div className={ styles.footer__top_about }>
					<h4 className="wow fadeInUp" data-wow-delay=".3s">
						About Us
					</h4>
					<p>
					EZRA GROUP is a company founded in October 1986 in Ethiopia by two brothers.
					</p>
				</div>
				<div className={ styles.footer__top_subsidiaries }>
					<h4 className="wow fadeInUp" data-wow-delay=".3s">
						Subsidiaries
					</h4>
					{ MenuConfig.footer.subsidiaries.map( ( link ) => (
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
					© { new Date().getFullYear() } Ezra Group | All Rights Reserved
				</p>
				<p>
					Built by <a href="https://eugene.co.ke/" target="_blank" rel="noreferrer"> Eugene </a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
