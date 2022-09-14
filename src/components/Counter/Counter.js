/**
 * External Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import styles from "./Counter.module.scss";

const Counter = ( { icon, title, number } ) => {
	return (
		<div className={ styles.counter }>
			<img src={ icon } alt={ title } />

			<div className={ styles.counter__details }>
				<h6>
					{ number }
				</h6>

				<p>
					{ title }
				</p>
			</div>
		</div>
	);
};

export default Counter;
