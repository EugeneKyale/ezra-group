/**
 * External Dependencies
 */
import React, { useEffect, useState }  from "react";
import { BackgroundImage } from "react-image-and-background-image-fade";

/**
 * Internal Dependencies
 */
import Button from "../Button";
import { axiosInstance, slugify, generateExcerpt } from "../../_helpers/utils";
import styles from "./Post.module.scss";

const Post = ( { id, title, coverImage, excerpt } ) => {
	const [ postCoverImageUrl, setPostCoverImageUrl ] = useState( '' );

	const fetchPostCoverImage = async () => {
		await axiosInstance({
			method: 'get',
			url: `media/${ coverImage }`
		}).then(( image ) => {
			setPostCoverImageUrl( image.data.media_details.sizes.full.source_url );
		});
	};

	useEffect(()=>{
		fetchPostCoverImage();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ coverImage ])

	return (
		<div className={ styles.post }>
			<BackgroundImage 
				className={ styles.post__image }
				src={ postCoverImageUrl }
				lazyLoad
			/>
			<div className={ styles.post__inner }>
				<h3 className="wow fadeInUp" data-wow-delay=".3s">
					{ generateExcerpt( title, 0, 40 ) }
					{ title.length > 40 ? "..." : "" }
				</h3>
				<div 
					className="wow fadeInUp" 
					data-wow-delay=".5s"
					dangerouslySetInnerHTML={{
						__html: generateExcerpt( excerpt, 0, 140 ) + ' ...' 
					}}
				/>
				<Button variant="arrow" text="Read More" page={ `/news/${ slugify( title ) }/${ id }` } />
			</div>
		</div>
	);
};

export default Post;
