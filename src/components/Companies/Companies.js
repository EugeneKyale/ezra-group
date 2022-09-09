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
				<h3>
					<a href={ page }>
						{ title }
					</a>
				</h3>
				<p>
					{ description }
				</p>
				{/* <Button variant="arrow" text="Read More" page={ page } /> */}
			</div>
		</div>
	);
};

export default Companies;
