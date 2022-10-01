/**
 * External Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import { cmsUrl } from "../../_helpers/utils";
import styles from "./Team.module.scss";

const Team = ( { photo, name, position, social } ) => {
	return (
		<div className={ styles.team }>
			<div className={ styles.team__inner }>
				<img className="wow zoomIn" data-wow-delay=".3s" src={ cmsUrl + photo } alt="" />
				<h3 className="wow fadeInUp" data-wow-delay=".4s">
					{ name }
				</h3>
				<p className="wow fadeInUp" data-wow-delay=".5s">
					{ position }
				</p>
				<div className={ styles.team__inner_social }>
					{ social.length &&
						social.map( ( media ) => (
							<a className="wow zoomIn" data-wow-delay=".6s" href={ media.url } target="_blank" rel="noreferrer">
								<img src={ cmsUrl + media.icon.data.attributes.url } alt="" />
							</a>
						))
					}
				</div>
			</div>
		</div>
	);
};

export default Team;
