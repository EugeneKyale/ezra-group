/**
 * External Dependencies
*/
import React from "react";

/**
 * Internal Dependencies
*/
import styles from "./Wrapper.module.scss";
 
const Wrapper = ( { children } ) => {
	return (
		<h2 className={ styles.wrapper }>
			{ children }
		</h2>
	);
};
 
 export default Wrapper;
 