/**
 * External Dependencies
 */
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { LazyLoadImage } from 'react-lazy-load-image-component';

/**
 * Internal Dependencies
 */
import Layout from "../../components/Layout";
import Carousel from "../../components/Carousel";
import Stats from "../../components/Stats";
import Post from "../../components/Post";
import Values from "../../components/Values";
import Preloader from "../../components/Preloader";
import Button from "../../components/Button";
import { axiosInstance } from "../../_helpers/utils";

import styles from "./home.module.scss";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Home = () => {
	const [ pageContent, setPageContent ] = useState( [] );
	const [ aboutImageId, setAboutImageId ] = useState( '' );
	const [ aboutImageUrl, setAboutImageUrl ] = useState( '' );
	const [ posts, setPosts ] = useState( [] );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	const fetchPageContent = async () => {
		await axiosInstance({
			method: 'get',
			url: `pages/12`
		}).then(( page ) => {
			setPageContent( page.data );
			setAboutImageId( page.data.acf.about.image );
		}).catch( fetchPageFail => {
			setErrorMessage( fetchPageFail.data.message );
		});
	};

	const fetchPosts = async () => {
		await axiosInstance({
			method: 'get',
			url: `posts?filter[orderby]=date&order=desc&per_page=3`
		}).then(( subs ) => {
			setPosts( subs );
		}).catch( error => {
			setErrorMessage( error.data.message );
		});
	}

	const fetchAboutImage = async () => {
		await axiosInstance({
			method: 'get',
			url: `media/${ aboutImageId }`
		}).then(( image ) => {
			setAboutImageUrl( image.data.media_details.sizes.full.source_url );
		}).catch( fetchAboutImageFail => {
			setErrorMessage( fetchAboutImageFail.data.message );
		});
	};

	useEffect(()=>{
		fetchPageContent();

		if ( pageContent ) {
			fetchPosts();
		}

		if ( aboutImageId ) {
			fetchAboutImage();
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ aboutImageId ]);


	const content = pageContent.acf;

	return (
		<Layout pageTitle="Ezra Group - Home">
			{
				errorMessage ?
				<Preloader error={ errorMessage } />
				:
				<main className={ styles.home }>
					<Carousel
						title={ content?.hero.title }
						subtitle={ content?.hero.subtitle }
						images={ content?.hero.images }
					/>

					<section className={ styles.home__about }>
						<div className={ styles.home__about_left }>
							<small className="wow fadeInUp" data-wow-delay=".5s">
								{ content?.about.tagline }
							</small>
							<h2 className="wow fadeInUp" data-wow-delay=".3s">
								{ content?.about.title }
							</h2>

							<div className="wow fadeInUp" data-wow-delay=".5s">
								<ReactMarkdown>
									{ content?.about.description }
								</ReactMarkdown>
							</div>
							
							<div className={ styles.home__about_left_bottom }>
								<div
									className={ styles.home__about_left_bottom_box + ` wow zoomIn`  } 
									data-wow-delay=".5s"
									dangerouslySetInnerHTML={{
										__html: content?.about.highlights
									}}
								/>

								<div className={ styles.home__about_left_bottom_right }>
									<Stats
										iconId={ content?.about.cta.icon }
										title={ content?.about.cta.title }
										description={ content?.about.cta.description }
									/>

									<div className={ styles.home__about_left_bottom_right_btn + ` wow fadeInUp` } data-wow-delay=".5s">
										<Button 
											variant="primary" 
											text="More about us" 
											page={ `/about` } 
										/>
									</div>
								</div>
							</div>
						</div>

						<div className={ styles.home__about_right }>
							<LazyLoadImage
								effect="blur"
								className="wow zoomIn" 
								data-wow-delay=".6s"
								alt=""
								src={ aboutImageUrl }					
							/>
						</div>
					</section>

					<section className={ styles.home__posts }>
						<div className={ styles.home__posts_top }>
							<small className="wow fadeInUp" data-wow-delay=".5s">
								{ content?.posts.tagline }
							</small>
							<h2 className="wow fadeInUp" data-wow-delay=".3s">
								{ content?.posts.title }
							</h2>
							<div
								className="wow fadeInUp" 
								data-wow-delay=".5s"
								dangerouslySetInnerHTML={{
									__html: content?.posts.description
								}}
							/>
						</div>

						<div className={ styles.home__posts_cards }>
							{ posts.data &&
								posts.data.map( ( item ) => (
									<Post
										key={ item.id }
										id={ item.id }
										coverImage={ item.featured_media }
										published={ item.date }
										title={ item.title.rendered }
										excerpt={ item.excerpt.rendered }
									/>
								))
							}
						</div>
					</section>

					<section className={ styles.home__stats }>
						<div className={ styles.home__stats_cards }>
							{ content?.statistics.length &&
								content?.statistics.map( ( stat ) => (
									<Stats
										key={ stat.id }
										iconId={ stat.icon }
										title={ stat.title }
										description={ stat.description }
									/>
								))
							}
						</div>
					</section>

					<section className={ styles.home__values }>
						<small className="wow fadeInUp" data-wow-delay=".5s">
							{ content?.values.tagline }
						</small>
						<div className={ styles.home__values_top }>
							<div className={ styles.home__values_top_left }>
								<h2 className="wow fadeInUp" data-wow-delay=".3s">
									{ content?.values.title }
								</h2>
							</div>

							<div className={ styles.home__values_top_right + " wow fadeInUp" } data-wow-delay=".5s">
								<ReactMarkdown>
									{ content?.values.description }
								</ReactMarkdown>
							</div>
						</div>

						<div className={ styles.home__values_cards }>
							{ content?.values.values.length &&
								content?.values.values.map( ( value, idx ) => (
									<Values
										key={ value.id }
										idx={ idx }
										iconId={ value.icon }
										title={ value.title }
										description={ value.description }
									/>
								))
							}
						</div>
					</section>
				</main>
			}
		</Layout>
	);
};

export default Home;
