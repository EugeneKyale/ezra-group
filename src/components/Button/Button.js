import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import "./Button.scss";

const Button = ( { variant, text, page, hashlink } ) => {

	const scrollWithOffset = ( el ) => {
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = -100; 
		window.scrollTo( { top: yCoordinate + yOffset, behavior: 'smooth' } ); 
	}

	return (
		<>
			{ hashlink ? (
				<HashLink
					className={ `btn__${variant}` }
					to={ page }
					scroll={ el => scrollWithOffset( el ) }
				>
					{ text }
				</HashLink>
			) : (
				<Link
					className={ `btn__${variant}` }
					to={ page } 
				>
					{ text }
				</Link>
			) }
		</>
	);
};

export default Button;
