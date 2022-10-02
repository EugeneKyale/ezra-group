/**
 * External Dependencies
 */
import React, { useEffect, useState } from "react";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

/**
 * Internal Dependencies
 */
import Photo from "./Photo";

const Gallery = ( { ids } ) => {

	return (
        <LightGallery
            speed={ 500 }
            plugins={ [ lgThumbnail, lgZoom ] }
        >
            { ids &&
                ids.map( ( id ) => (
                    <Photo id={ id } />
                ))
            }
        </LightGallery>
	);
};

export default Gallery;
