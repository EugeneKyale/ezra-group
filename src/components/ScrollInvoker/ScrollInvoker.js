/**
 * External Dependencies
 */
import React from "react";
import { Link } from "react-scroll";

/**
 * Internal Dependencies
 */
import { toAbsoluteUrl } from "../../_helpers/utils";

import styles from "./ScrollInvoker.module.scss";

const ScrollInvoker = () => {
	return (
		<Link
			to="anchor"
			spy={ true }
			smooth={ true }
			duration={ 500 }
			style={{ cursor: "pointer" }}
		>
			<img
				className={ styles.ico }
				alt="scroll invoker"
				src={ toAbsoluteUrl( "/scroll-invoker.webp" ) }
			/>
		</Link>
	);
};

export default ScrollInvoker;
