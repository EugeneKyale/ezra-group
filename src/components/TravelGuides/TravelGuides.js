/**
 * External Dependencies
 */
import React from "react";
import { Link } from "react-router-dom";

/**
 * Internal Dependencies
 */
import { toAbsoluteUrl, generateExcerpt, slugify } from "../../_helpers/utils";
import styles from "./TravelGuides.module.scss";

const TravelGuides = ( { photo, title, published, excerpt } ) => {

	return (
		<Link to={`/guide/${slugify( title )}`}  style={{ color: '#041c26' }}>
			<div className={ styles.travelGuides }>
				<div
					className={ styles.travelGuides__photo }
					style= {{
						backgroundImage: `url(${toAbsoluteUrl( photo )})`
					}}
				>
					&nbsp;
				</div>
				<div className={ styles.travelGuides__content }>
					<small className="wow fadeInUp" data-wow-delay=".3s">
						{ published }
					</small>
					<h4 className="wow fadeInUp" data-wow-delay=".4s">
						{ title }
					</h4>

					<p className="wow fadeInUp" data-wow-delay=".5s">
						{ generateExcerpt( excerpt, 0, 107 ) }
						{ excerpt.length > 107 ? "..." : "" }
					</p>
				</div>
			</div>
		</Link>
	);
};

export default TravelGuides;
 