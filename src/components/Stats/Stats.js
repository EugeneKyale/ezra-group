/**
 * External Dependencies
 */
import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

/**
 * Internal Dependencies
 */
import { axiosInstance } from "../../_helpers/utils";
import styles from "./Stats.module.scss";

const Stats = ( { iconId, title, description } ) => {
	const [ statIconUrl, setStatIconUrl ] = useState( '' );

	const fetchStatIcon = async () => {
		await axiosInstance({
			method: 'get',
			url: `media/${ iconId }`
		}).then(( icon ) => {
			setStatIconUrl( icon.data.media_details.sizes.full.source_url );
		});
	};

	useEffect(()=>{
		fetchStatIcon();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ iconId ])

	return (
		<div className={ styles.stats }>
			{ statIconUrl && <LazyLoadImage effect="blur" className="wow zoomIn" data-wow-delay=".3s" src={ statIconUrl } alt="" /> }

			<div className={ styles.stats__details }>
				<h3 className="wow fadeInUp" data-wow-delay=".3s">
					{ title }
				</h3>

				<p className="wow fadeInUp" data-wow-delay=".5s">
					{ description }
				</p>
			</div>
		</div>
	);
};

export default Stats;
