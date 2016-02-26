'use strict';

// MODULES //

var copy = require( 'utils-copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var render = require( './render.js' );


// CREATE ELEMENT //

/**
* FUNCTION: createElement( [options] )
*	Generates an HTML string for displaying an SVG equation in a Github Markdown file.
*
* @param {Object} [options] - function options
* @param {String} [options.className='equation'] - element class name
* @param {String} [options.align='center'] - element alignment
* @param {String} [options.equation] - raw equation text
* @param {String} [options.label] - equation label
* @param {String} [options.src] - image source URL
* @param {String} [options.alt] - alternative image text
* @returns {String} HTML string
*/
function createElement( options ) {
	var opts;
	var err;
	opts = copy( defaults );
	if ( arguments.length ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	return render( opts );
} // end FUNCTION createElement()


// EXPORTS //

module.exports = createElement;
