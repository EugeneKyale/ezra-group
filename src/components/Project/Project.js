/**
 * External Dependencies
 */
import React from "react";
import { Link } from "react-router-dom";

/**
 * Internal Dependencies
 */
import { cmsUrl, slugify } from "../../_helpers/utils";
import styles from "./Project.module.scss";

const Project = ( { id, category, title, coverImage } ) => {
	return (
		<div 
			className={ styles.project }
			style= {{
				background: `url( ${ cmsUrl + coverImage } )`
			}}
		>
			<div className={ styles.project__inner }>
				<Link to={ `/project/${ slugify( title ) }/${ id }` }>
					<p className="wow fadeInUp" data-wow-delay=".3s">
						{ category }
					</p>
					<h5 className="wow fadeInUp" data-wow-delay=".5s">
						{ title }
					</h5>
				</Link>
			</div>
		</div>
	);
};

export default Project;
