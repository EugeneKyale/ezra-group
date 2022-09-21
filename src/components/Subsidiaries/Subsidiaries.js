/**
 * External Dependencies
 */
import React from "react";
import { Link } from "react-router-dom";

/**
 * Internal Dependencies
 */
import Button from "../Button/Button";
import { generateExcerpt, cmsUrl, slugify } from "../../_helpers/utils";
import styles from "./Subsidiaries.module.scss";

const Subsidiaries = ( { id, icon, title, description } ) => {
	return (
		<div className={ styles.subsidiaries }>
			<div className={ styles.subsidiaries__inner }>
				<img className="wow zoomIn" data-wow-delay=".3s" src={ cmsUrl + icon } alt={ title } />
				<h3 className="wow fadeInUp" data-wow-delay=".4s">
					<Link to={ `/subsidiary/${ slugify( title ) }/${ id }` }>
						{ title }
					</Link>
				</h3>
				<p className="wow fadeInUp" data-wow-delay=".5s">
					{ generateExcerpt( description, 0, 95 ) }
					{ description.length > 95 ? "..." : "" }
				</p>
				<Button variant="arrow" text="Read More" page={ `/subsidiary/${ slugify( title ) }/${ id }` } />
			</div>
		</div>
	);
};

export default Subsidiaries;
