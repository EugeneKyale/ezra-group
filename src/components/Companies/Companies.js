/**
 * External Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import Button from "../Button";
import styles from "./Companies.module.scss";

const Companies = ( { icon, title, description, page } ) => {

	return (
		<div className={ styles.companies }>
			<div className={ styles.companies__inner }>
				{/* <img src="" alt="icon" /> */}
				<h3 className="wow fadeInUp" data-wow-delay=".3s">
					<a href={ page }>
						{ title }
					</a>
				</h3>
				<p className="wow fadeInUp" data-wow-delay=".5s">
					{ description }
				</p>
				<Button variant="arrow" text="Read More" page={ page } />
			</div>
		</div>
	);
};

export default Companies;
