/**
 * External Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import styles from "./about.module.scss";

const About = () => {
	return (
		<Layout pageTitle="About">
			<main className={ styles.about }>
				<Hero
					title="About Us"
					backgroundImage="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
				/>
			</main>
		</Layout>
	);
};

export default About;
