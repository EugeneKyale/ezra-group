/**
 * External Dependencies
 */
import React, { useState, useEffect } from "react";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon, WhatsappShareButton, WhatsappIcon } from "react-share";
import { useParams } from "react-router-dom";

/**
 * Internal Dependencies
 */
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Preloader from "../../components/Preloader";
import { axiosInstance, formatDate } from "../../_helpers/utils";

import styles from "./post.module.scss";

const Post = () => {
	const [ postDetails, setPostDetails ] = useState( [] );
	const [ postImageId, setPostImageId ] = useState( '' );
	const [ postImageUrl, setPostImageUrl ] = useState( '' );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	let postId = useParams().id;
	let shareUrl = window.location.href;

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
					<div className={ styles.post__meta }>
						<p>
							<b> Date Published </b> <br /> { formatDate( postDetails?.date ) }
						</p>
						<p>
							<b> Author </b> <br /> Ezra Group
						</p>
						<div>
							<b> Share on </b>
							<div className={ styles.post__meta_share }>
								<FacebookShareButton
									url={ shareUrl }
									quote={ postDetails.title?.rendered }
									hashtag={ "#EzraGroup" }
									description={ postDetails.excerpt?.rendered }
									className={ styles.post__meta_share_icon }
								>
									<FacebookIcon 
										size={ 32 } 
										borderRadius="6px"
									/>
								</FacebookShareButton>

								<TwitterShareButton
									title={ postDetails.title?.rendered }
									url={  shareUrl }
									hashtags={ [ "EzraGroup", "Building a Legacy Together" ] }
									className={ styles.post__meta_share_icon }
								>
									<TwitterIcon
										size={ 32 }
										borderRadius="6px"
									/>
								</TwitterShareButton>

								<LinkedinShareButton
									className={ styles.post__meta_share_icon }
									url={  shareUrl }
									title={ postDetails.title?.rendered }
									summary={ postDetails.excerpt?.rendered }
									source="Ezra Group Website"
								>
									<LinkedinIcon
										size={ 32 } 
										borderRadius="6px"
									/>
								</LinkedinShareButton>

								<WhatsappShareButton
									className={ styles.post__meta_share_icon }
									url={  shareUrl }
									title={ postDetails.title?.rendered }
								>
									<WhatsappIcon
										size={ 32 } 
										borderRadius="6px"
									/>
								</WhatsappShareButton>
							</div>
						</div>
					</div>

					<div 
						className={ styles.post__content + " wow fadeInUp" }
						data-wow-delay=".5s"
						dangerouslySetInnerHTML={{
							__html: postDetails.content?.rendered
						}}
					/>
				</main>
			}
		</Layout>
	);
};

export default Post;
