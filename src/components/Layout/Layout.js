/**
 * External Dependencies
 */
import React from "react";
import { Helmet } from "react-helmet";

/**
 * Internal Dependencies
 */
import Header from "../Header";
import Footer from "../Footer/";

export default function Layout( { pageTitle, children } ) {
	return (
		<>
			<Header />
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
