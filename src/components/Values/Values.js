/**
 * External Dependencies
 */
import React, { useEffect, useState }  from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

/**
 * Internal Dependencies
 */
import { axiosInstance } from "../../_helpers/utils";
import styles from "./Values.module.scss";

const Values = ( { idx, iconId, title, description } ) => {
	const [ valueIconUrl, setValueIconUrl ] = useState( '' );

	const fetchValueIcon = async () => {
		await axiosInstance({
			method: 'get',
			url: `media/${ iconId }`
		}).then(( icon ) => {
			setValueIconUrl( icon.data.media_details.sizes.full.source_url );
		});
	};

	useEffect(()=>{
		fetchValueIcon();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ iconId ])

	return (
		<div className={ styles.values }>
			<div className={ styles.values__inner }>
				<div className={ styles.values__inner_top }>
					<LazyLoadImage effect="blur" className="wow zoomIn" data-wow-delay=".3s" src={ valueIconUrl } alt="" />

					<h1>
						0{ idx + 1 }
					</h1>
				</div>
				<h3 className="wow fadeInUp" data-wow-delay=".4s">
					{ title }
				</h3>
				<p className="wow fadeInUp" data-wow-delay=".5s">
					{ description }
				</p>
			</div>
		</div>
	);
};

export default Values;
