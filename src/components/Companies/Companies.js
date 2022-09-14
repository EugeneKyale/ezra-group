/**
 * External Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import Button from "../Button";
import { generateExcerpt } from "../../_helpers/utils";
import styles from "./Companies.module.scss";

const Companies = ( { icon, title, description, page } ) => {

	return (
		<div className={ styles.companies }>
			<div className={ styles.companies__inner }>
				<img className="wow zoomIn" data-wow-delay=".3s" src={ icon } alt="icon" />
				<h3 className="wow fadeInUp" data-wow-delay=".4s">
					<a href={ page }>
						{ title }
					</a>
				</h3>
				<p className="wow fadeInUp" data-wow-delay=".5s">
				{ generateExcerpt( description, 0, 110 ) }
				{ description.length > 110 ? "..." : "" }
				</p>
				<Button variant="arrow" text="Read More" page={ page } />
			</div>
		</div>
	);
};

export default Companies;
