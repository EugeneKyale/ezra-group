/**
 * External Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import Layout from "../../components/Layout";

import styles from "./home.module.scss";

const Home = () => {

	return (
		<Layout pageTitle="Swahili Tours - Home">
			<main className={ styles.home }>
				Homepage
			</main>
		</Layout>
	);
};

export default Home;
