/**
 * External Dependencies
 */
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * Internal Dependencies
 */
import Photo from "./Photo";

const SlickSlider = ( { ids } ) => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear'
    };

	return (
        <Slider { ...settings }>
            { ids &&
                ids.map( ( id ) => (
                    <Photo key={ id } id={ id } />
                ))
            }
        </Slider>
	);
};

export default SlickSlider;
