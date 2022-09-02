/**
 * External Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import Layout from "../../components/Layout";
import styles from "./privacy.module.scss";

const Privacy = () => {
	return (
		<Layout pageTitle="Privacy Notice">
			<div className={ styles.privacy }>
				<h1 className="wow fadeInUp" data-wow-delay=".3s">
					Jedco Power Ltd. - Privacy Notice.
				</h1>
			</div>
		</Layout>
	);
};

export default Privacy;
