/**
 * External Dependencies
 */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

/**
 * Internal Dependencies
 */
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Preloader from "../../components/Preloader";
import { axiosInstance } from "../../_helpers/utils";

import styles from "./post.module.scss";

const Post = () => {
	const [ postDetails, setPostDetails ] = useState( [] );
	const [ postImageId, setPostImageId ] = useState( '' );
	const [ postImageUrl, setPostImageUrl ] = useState( '' );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	let postId = useParams().id;

	const fetchPost = async () => {
		await axiosInstance({
			method: 'get',
			url: `posts/${ postId }`
		}).then( result => {
			setPostDetails( result.data );
			setPostImageId( result.data.featured_media );
		}).catch( error => {
			setErrorMessage( error.message );
		});
	}

	const fetchPostImage = async () => {
		await axiosInstance({
			method: 'get',
			url: `media/${ postImageId }`
		}).then(( res ) => {
			setPostImageUrl( res.data.media_details.sizes.full.source_url );
		});
	};

	useEffect( () => {
		fetchPost();

		if ( postImageId ) {
			fetchPostImage();
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ postId, postImageId ]);

	return (
		<Layout pageTitle={ postDetails.title?.rendered }>
			{
				errorMessage ?
				<Preloader />
				:
				<main className={ styles.post }>
					<Hero
						title={ postDetails.title?.rendered }
						backgroundImage={ postImageUrl }
					/>
					<div className={ styles.post }>
					</div>
				</main>
			}
		</Layout>
	);
};

export default Post;
