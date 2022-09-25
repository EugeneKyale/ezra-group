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
				<h3>
					The site is currently undergoing an update...
				</h3>
				<div className="four0four__inner wow zoomIn" data-wow-delay=".3s">
					<lottie-player
						src="https://assets2.lottiefiles.com/packages/lf20_suhe7qtm.json"
						background="transparent"
						speed="1"
						loop
						autoplay
						style={{
							width: 600,
							height: 'auto'
						}}
					/>
				</div>
			</main>
		</Layout>
	);
};

export default Four0Four;
