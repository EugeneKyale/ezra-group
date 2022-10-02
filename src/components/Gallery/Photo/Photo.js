/**
 * External Dependencies
 */
import React, { useEffect, useState } from "react";

/**
 * Internal Dependencies
 */
import { axiosInstance } from "../../../_helpers/utils";

import styles from "./Photo.module.scss";

const Photo = ( { id } ) => {
	const [ galleryImageUrl, setGalleryImageUrl ] = useState( '' );

	const fetchGalleryImage = async () => {
		await axiosInstance({
			method: 'get',
			url: `media/${ id }`
		}).then(( icon ) => {
			setGalleryImageUrl( icon.data.media_details.sizes.full.source_url );
		});
	};

	useEffect(()=>{
		fetchGalleryImage();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ id ])

	return (
		<a href={ galleryImageUrl }>
			<img
				className={ styles.photo }
				alt=""
				src={ galleryImageUrl }
			/>
		</a>
	);
};

export default Photo;
