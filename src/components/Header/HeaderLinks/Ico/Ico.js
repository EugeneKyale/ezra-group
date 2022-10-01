/**
 * External Dependencies
 */
import React, { useEffect, useState } from "react";

/**
 * Internal Dependencies
 */
import { axiosInstance } from "../../../../_helpers/utils";

import styles from "./Ico.module.scss";

const Ico = ( { id } ) => {
	const [ subsidiaryIconUrl, setSubsidiaryIconUrl ] = useState( '' );

	const fetchSubsidiaryIcon = async () => {
		await axiosInstance({
			method: 'get',
			url: `media/${ id }`
		}).then(( icon ) => {
			setSubsidiaryIconUrl( icon.data.media_details.sizes.full.source_url );
		});
	};

	useEffect(()=>{
		fetchSubsidiaryIcon();

	}, [ id ])

	return (
		<img
			className={ styles.ico } 
			src={ subsidiaryIconUrl }
			alt="icon" 
		/>
	);
};

export default Ico;
