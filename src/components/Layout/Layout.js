/**
 * External Dependencies
 */
import React, { useState } from "react";
import { Helmet } from "react-helmet";

/**
 * Internal Dependencies
 */
import Header from "../Header";
import HeaderLinks from "../Header/HeaderLinks";
import Footer from "../Footer/";
import { toAbsoluteUrl } from "../../_helpers/utils";

import styles from "./Layout.module.scss";

const dashboardRoutes = [];

export default function Layout( { pageTitle, children } ) {
	const [ showScroll, setShowScroll ] = useState( false )

	const checkScrollTop = () => {
		if ( !showScroll && window.pageYOffset > 600 ) {
			setShowScroll( true );
		} else if ( showScroll && window.pageYOffset <= 600 ) {
			setShowScroll( false );
		}
	};
  
	const scrollTop = () => {
		window.scrollTo({ 
			top: 0, 
			behavior: 'smooth' 
		});
	};
  
	window.addEventListener( 'scroll', checkScrollTop )

	return (
		<>
			<Header
				color="transparent"
				routes={ dashboardRoutes }
				brand="Ezra Group"
				rightLinks={ <HeaderLinks /> }
				fixed
				changeColorOnScroll={{
					height: 100,
					color: "red",
				}}
			/>
				<Helmet>
					<meta charSet="utf-8" />
					<title>
						{ pageTitle }
					</title>
				</Helmet>
				{ children }
				<img
					alt=""
					src={ toAbsoluteUrl(
						"/icons/scrollTop.svg"
					)}
					className={ styles.layout__scrollTop }
					onClick={ scrollTop }
					style={{ 
						height: 40, 
						display: showScroll ? 'flex' : 'none' 
					}}
				/>
			<Footer />
		</>
	);
}
