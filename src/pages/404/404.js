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
				<lottie-player 
					src="https://assets2.lottiefiles.com/packages/lf20_suhe7qtm.json"
					background="transparent"
					speed="1"
					style={{ width: 500, height: 500 }}
					loop
					autoplay
				/>
			</main>
		</Layout>
	);
};

export default Four0Four;
