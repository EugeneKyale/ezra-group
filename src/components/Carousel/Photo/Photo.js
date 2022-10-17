/**
 * External Dependencies
 */
import React, { useEffect, useState } from "react";
import { Slide } from "hero-slider";

/**
 * Internal Dependencies
 */
import { axiosInstance } from "../../../_helpers/utils";

const Photo = ( { id } ) => {
	const [ sliderImageUrl, setSliderImageUrl ] = useState( '' );
	const [ sliderImageCaption, setSliderImageCaption ] = useState( '' );

	const fetchSliderImage = async () => {
		await axiosInstance({
			method: 'get',
			url: `media/${ id }`
		}).then(( image ) => {
			setSliderImageUrl( image.data.media_details.sizes.full.source_url );
			setSliderImageCaption( image.data.alt_text );
		});
	};

	useEffect(()=>{
		fetchSliderImage();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ id ])

	return (
		sliderImageUrl && sliderImageCaption &&
		<Slide
			label={ sliderImageCaption }
			background={{
				backgroundColor: 'rgba(0, 0, 0, 0.15)',
				backgroundImageSrc: sliderImageUrl
			}}
		/>
	);
};

export default Photo;
