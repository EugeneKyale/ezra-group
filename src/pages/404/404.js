/**
 * External Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import Layout from "../../components/Layout";

import "./404.scss";

const Four0Four = () => {
	return (
		<Layout pageTitle="404">
			<main className="four0four">
				<h1 className="wow fadeInUp" data-wow-delay=".3s">
					Oops, this page doesn't exist! 🚀
				</h1>
			</main>
		</Layout>
	);
};

export default Four0Four;
