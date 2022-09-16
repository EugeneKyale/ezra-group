/**
 * External Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import Layout from "../../components/Layout/Layout";
import styles from "./about.module.scss";

const About = () => {
	return (
		<Layout pageTitle="About">
			<div className={ styles.about }>
				<h1 className="wow fadeInUp" data-wow-delay=".3s">
					EZRA GROUP - About Page
				</h1>
			</div>
		</Layout>
	);
};

export default About;
