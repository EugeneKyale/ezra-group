/**
 * External Dependencies
 */
import React from "react";
import { Link } from "react-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
			<LazyLoadImage
				effect="blur"
				className={ styles.ico }
				alt=""
				src={ toAbsoluteUrl( "/icons/submenu" ) }
			/>
		</Link>
	);
};

export default ScrollInvoker;
