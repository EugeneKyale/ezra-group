/**
 * External Dependencies
 */
import React, { useState, useEffect } from "react";

/**
 * Internal Dependencies
 */
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";
import Button from "../../components/Button";
import Preloader from "../../components/Preloader/Preloader";
import { axiosInstance, generateExcerpt, slugify } from "../../_helpers/utils";

import styles from "./posts.module.scss";

const Posts = () => {
	const [ pageContent, setPageContent ] = useState( [] );
	const [ heroBackgroundId, setHeroBackgroudId ] = useState( '' );
	const [ heroBackgroundUrl, setHeroBackgroudUrl ] = useState( '' );
	const [ posts, setPosts ] = useState( [] );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	const fetchPageContent = async () => {
		await axiosInstance({
			method: 'get',
			url: `pages/516`
		}).then(( page ) => {
			setPageContent( page.data );
			setHeroBackgroudId( page.data.acf.hero.background_image );
		}).catch( fetchPageFail => {
			setErrorMessage( fetchPageFail.data.message );
		});
	};

	const fetchPosts = async () => {
		await axiosInstance({
			method: 'get',
			url: `posts`
		}).then(( res ) => {
			setPosts( res.data );
		}).catch( fetchPostsFail => {
			setErrorMessage( fetchPostsFail.data.message );
		});
	}

	const fetchHeroBackground = async () => {
		await axiosInstance({
			method: 'get',
			url: `media/${ heroBackgroundId }`
		}).then(( background ) => {
			setHeroBackgroudUrl( background.data.media_details.sizes.full.source_url );
		}).catch( fetchHeroBackgroundFail => {
			setErrorMessage( fetchHeroBackgroundFail.data.message );
		});
	};

	useEffect(()=>{
		fetchPageContent();

		if ( heroBackgroundId ) {
			fetchHeroBackground();
		}

		fetchPosts();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ heroBackgroundId ]);


	const content = pageContent.acf;

	return (
		<Layout pageTitle="News Articles">
			{
				errorMessage ?
				<Preloader />
				:
				<main className={ styles.posts }>
					<Hero
						title={ content?.hero.title }
						backgroundImage={ heroBackgroundUrl }
					/>

					<section className={ styles.posts__cards }>
						<div className={ styles.posts__cards_inner }>
							{ posts &&
								posts.map( ( post ) => (
									<div key={ post.id }>
										<h3 className="wow fadeInUp" data-wow-delay=".3s">
											{ post.title.rendered }
										</h3>
										<div 
											className="wow fadeInUp" 
											data-wow-delay=".5s"
											dangerouslySetInnerHTML={{
												__html: generateExcerpt( post.content.rendered, 0, 200 ) 
											}}
										/>
										<Button variant="arrow" text="Read More" page={ `/news/${ slugify( post.title.rendered ) }/${ post.id }` } />
									</div>
								))
							}
						</div>
					</section>
				</main>
			}
		</Layout>
	);
};

export default Posts;
