/**
 * External Dependencies
 */
import React from "react";
import { Link } from "react-router-dom";

/**
 * Internal Dependencies
 */
import { cmsUrl } from "../../_helpers/utils";
import styles from "./Team.module.scss";

const Team = ( { photo, name, position } ) => {
	return (
		<div className={ styles.team }>
			<div className={ styles.team__inner }>
				<img className="wow zoomIn" data-wow-delay=".3s" src={ cmsUrl + photo } alt={ name } />
				<h3 className="wow fadeInUp" data-wow-delay=".4s">
					{ name }
				</h3>
				<p className="wow fadeInUp" data-wow-delay=".5s">
					{ position }
				</p>
			</div>
		</div>
	);
};

export default Team;
