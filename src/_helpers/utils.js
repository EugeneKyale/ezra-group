import axios from "axios";

export const toAbsoluteUrl = ( pathname ) => process.env.PUBLIC_URL + pathname;

export const baseUrl = "https://natnaele.sg-host.com/wp-json/wp/v2/";

/**
 * Convert any date into dd-mm-yyyy
 * 
 * @since TBD
 *
 * @param int {date} The date in raw format.
 */
export const formatDate = ( date ) => {
	let d = new Date( date );
	let monthNumber = "" + ( d.getMonth() );
	let monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	let monthName = monthNames[ monthNumber ];
	let day = "" + d.getDate();
	let year = d.getFullYear();

	if ( day.length < 2 ) {
		day = "0" + day;
	}

	return [ day, monthName, year ].join( " " );
};

/*
 * Transforms blog description into plain text.
 *
 * @since TBD
 */
export const toText = ( node ) => {
	let tag = document.createElement( "div" );
	tag.innerHTML = node;
	node = tag.innerText;
	
	return node;
};

/*
 * Generates post excerpt from entire post content by trimming the number of characters.
 *
 * @since TBD
 * 
 * @param string {text}       The text that needs to be trimmed.
 * @param int {startingPoint} The position of the character in which the trimming should start.
 * @param int {maxLength}     The number of characters that the content should be trimmed to.
 */
export const generateExcerpt = ( text, startingPoint, maxLength ) => {
	return text.length > maxLength
		? text.slice( startingPoint, maxLength )
		: text;
};

/*
 * This function takes in the anchor title as a parameter and converts it into a lowercase slug.
 * The newly generated slug is then used to map each technology card to its animation icon.
 * 
 * @since TBD
 * 
 * @param string {str} The string that needs to be converted into a slug.
 */
export function slugify( str ) {
	str = str.replace(/^\s+|\s+$/g, ""); // trim
	str = str.toLowerCase();

	/* remove accents, swap ñ for n, etc */
	var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
	var to = "aaaaeeeeiiiioooouuuunc------";
	for (var i = 0, l = from.length; i < l; i++) {
		str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
	}

	str = str
		.replace(/[^a-z0-9 -]/g, "") // remove invalid characters
		.replace(/\s+/g, "-") // collapse whitespace and replace by -
		.replace(/-+/g, "-"); // collapse dashes

	return str;
}

/*
 * Axios instance to used to fetch content from the CMS
 *
 * @since TBD
 */
export const axiosInstance = axios.create({
	baseURL: baseUrl,
});
