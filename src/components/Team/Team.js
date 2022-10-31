/**
 * External Dependencies
 */
import React, { useEffect, useState }  from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "react-modal";

/**
 * Internal Dependencies
 */
import { axiosInstance } from "../../_helpers/utils";
import styles from "./Team.module.scss";
import "./index.scss";

const Team = ( { photo, name, position, social, bio } ) => {
	const [ teamAvatarUrl, setTeamAvatarUrl ] = useState( '' );
	const [ isModalOpen, setIsModalOpen ] = useState( false );

	const defaultModalStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			width: '75%',
			height: '50%',
			marginTop: '50px',
			borderRadius: '6px',
			boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.10)',
			overflow: 'hidden',
			paddingBottom: '50px',
		},
	};

	const openModal = () => {
		setIsModalOpen( true );
	}

	const closeModal = () => {
		setIsModalOpen( false );
	}

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
				<img className="wow zoomIn" data-wow-delay=".3s" src={ teamAvatarUrl } alt="" />
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

				<div className={ styles.team__modal }>
					<div className={ styles.team__modal_btn }>
						<button onClick={ openModal }>
							Read Bio <span> &rarr; </span>
						</button>
					</div>

					<Modal
						isOpen={ isModalOpen }
						onRequestClose={ closeModal }
						style={ defaultModalStyles }
						contentLabel={ name }
					>

						<div className={ styles.team__modal_wrapper }>
							<div className={ styles.team__modal_wrapper_left }>
								<img src={ teamAvatarUrl } alt="" />

								<h3>
									{ name }
								</h3>

								<p>
									{ position }
								</p>
							</div>

							<div className={ styles.team__modal_wrapper_right }>
								<div
									className={ styles.team__modal_wrapper_right_bio }
									dangerouslySetInnerHTML={{
										__html: bio
									}}
								/>
								<div className={ styles.team__modal_wrapper_right_btn }>
									<button onClick={ closeModal }>
										Close
									</button>
								</div>
							</div>
						</div>
					</Modal>
				</div>
			</div>
		</div>
	);
};

export default Team;
