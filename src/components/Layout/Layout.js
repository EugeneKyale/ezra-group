/**
 * External Dependencies
 */
import React from "react";
import { Helmet } from "react-helmet";

/**
 * Internal Dependencies
 */
import Header from "../Header";
import HeaderLinks from "../Header/HeaderLinks";
import Footer from "../Footer/";

const dashboardRoutes = [];

export default function Layout( { pageTitle, children } ) {
	return (
		<>
			<Header
				color="transparent"
				routes={ dashboardRoutes }
				brand="EZRA GROUP"
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
			<Footer />
		</>
	);
}
