/**
 * External Dependencies
 */
import React, { useEffect, useState }  from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

/**
 * Internal Dependencies
 */
import { axiosInstance } from "../../_helpers/utils";
import styles from "./Team.module.scss";

const Team = ( { photo, name, position, social } ) => {
	const [ teamAvatarUrl, setTeamAvatarUrl ] = useState( '' );

	const fetchTeamAvatar = async () => {
		await axiosInstance({
			method: 'get',
			url: `media/${ photo }`
		}).then(( avatar ) => {
			setTeamAvatarUrl( avatar.data.media_details.sizes.full.source_url );
		});
	};

	useEffect(()=>{
		fetchTeamAvatar();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ photo ])

	return (
		<div className={ styles.team }>
			<div className={ styles.team__inner }>
				<LazyLoadImage effect="blur" className="wow zoomIn" data-wow-delay=".3s" src={ teamAvatarUrl } alt="" />
				<h3 className="wow fadeInUp" data-wow-delay=".4s">
					{ name }
				</h3>
				<p className="wow fadeInUp" data-wow-delay=".5s">
					{ position }
				</p>
				<div className={ styles.team__inner_social }>
					{ social &&
						social.map( ( media ) => (
							<a className="wow zoomIn" data-wow-delay=".6s" href={ media.url } target="_blank" rel="noreferrer">
								<LazyLoadImage effect="blur" src="" alt="" />
							</a>
						))
					}
				</div>
			</div>
		</div>
	);
};

export default Team;
