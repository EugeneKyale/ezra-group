/**
 * External Dependencies
 */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Internal Dependencies
 */
import Button from "../Button/Button";
import { generateExcerpt, slugify, axiosInstance } from "../../_helpers/utils";
import styles from "./Subsidiaries.module.scss";

const Subsidiaries = ( { id, iconId, title, excerpt } ) => {
	const [ subsidiaryIconUrl, setSubsidiaryIconUrl ] = useState( '' );

	const fetchSubsidiaryIcon = async () => {
		await axiosInstance({
			method: 'get',
			url: `media/${ iconId }`
		}).then(( icon ) => {
			setSubsidiaryIconUrl( icon.data.media_details.sizes.full.source_url );
		});
	};

	useEffect(()=>{
		fetchSubsidiaryIcon();

	}, [ iconId ])

	return (
		<div className={ styles.subsidiaries }>
			<div className={ styles.subsidiaries__inner }>
				<img className="wow zoomIn" data-wow-delay=".3s" src={ subsidiaryIconUrl } alt={ title } />
				<h3 className="wow fadeInUp" data-wow-delay=".4s">
					<Link to={ `/subsidiary/${ slugify( title ) }/${ id }` }>
						{ title }
					</Link>
				</h3>
				<p className="wow fadeInUp" data-wow-delay=".5s">
					{ generateExcerpt( excerpt, 0, 120 ) }
					{ excerpt.length > 120 ? "..." : "" }
				</p>
				<Button variant="arrow" text="Read More" page={ `/subsidiary/${ slugify( title ) }/${ id }` } />
			</div>
		</div>
	);
};

export default Subsidiaries;
