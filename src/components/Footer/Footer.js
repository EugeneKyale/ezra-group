/**
 * External Dependencies
 */
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown"; 
import { Link } from "react-router-dom";

/**
 * Internal Dependencies
 */
import { axiosInstance } from "../../_helpers/utils";
import MenuConfig from "../../_helpers/MenuConfig";

import styles from "./Footer.module.scss";

const Footer = () => {
	const [ footerContent, setFooterContent ] = useState( [] );

	useEffect( () => {
		axiosInstance({
			method: 'get',
			url: `footer?populate=footer`
		}).then( result => {
			setFooterContent( result.data.data );
		}).catch( error => {
			console.log( error.message );
		});

	}, []);

	const content = footerContent.attributes;

	return (
		<footer className={ styles.footer }>
			<div className={ styles.footer__top }>
				<div className={ styles.footer__top_about }>
					<h4 className="wow fadeInUp" data-wow-delay=".3s">
						About Us
					</h4>
					<p>
						{ content?.footer.aboutText }
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
					<ReactMarkdown>
					{ content?.footer.contactDetails }
					</ReactMarkdown>
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
