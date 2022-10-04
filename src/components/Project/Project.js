/**
 * External Dependencies
 */
import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import { BackgroundImage } from "react-image-and-background-image-fade";

/**
 * Internal Dependencies
 */
import { axiosInstance, slugify } from "../../_helpers/utils";
import styles from "./Project.module.scss";

const Project = ( { id, category, title, coverImage } ) => {
	const [ projectCoverImageUrl, setProjectCoverImageUrl ] = useState( '' );

	const fetchProjectCoverImage = async () => {
		await axiosInstance({
			method: 'get',
			url: `media/${ coverImage }`
		}).then(( avatar ) => {
			setProjectCoverImageUrl( avatar.data.media_details.sizes.full.source_url );
		});
	};

	useEffect(()=>{
		fetchProjectCoverImage();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ coverImage ])

	return (
		<BackgroundImage 
			className={ styles.project }
			src={ projectCoverImageUrl }
			lazyLoad
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
		</BackgroundImage>
	);
};

export default Project;
