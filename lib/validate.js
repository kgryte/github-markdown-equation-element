'use strict';

// MODULES //

var isObject = require( 'validate.io-object' );
var isString = require( 'validate.io-string-primitive' );
var isURL = require( 'validate.io-url' );


// VALIDATE //

/**
* FUNCTION: validate( opts, options )
*	Validates function options.
*
* @param {Object} opts - destination object
* @param {Object} options - options to validate
* @param {String} [options.className] - element class name
* @param {String} [options.align] - element alignment
* @param {String} [options.equation] - raw equation text
* @param {String} [options.label] - equation label
* @param {String} [options.src] - image source URL
* @param {String} [options.alt] - alternative image text
* @returns {Error|Null} error object or null
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( options.hasOwnProperty( 'className' ) ) {
		opts.className = options.className;
		if ( !isString( opts.className ) ) {
			return new TypeError( 'invalid option. `className` option must be a string primitive. Option: `' + opts.className + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'align' ) ) {
		opts.align = options.align;
		if ( !isString( opts.align ) ) {
			return new TypeError( 'invalid option. `align` option must be a string primitive. Option: `' + opts.align + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'equation' ) ) {
		opts.equation = options.equation;
		if ( !isString( opts.equation ) ) {
			return new TypeError( 'invalid option. `equation` option must be a string primitive. Option: `' + opts.equation + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'label' ) ) {
		opts.label = options.label;
		if ( !isString( opts.label ) ) {
			return new TypeError( 'invalid option. `label` option must be a string primitive. Option: `' + opts.label + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'src' ) ) {
		opts.src = options.src;
		if ( !isURL( opts.src ) ) {
			return new TypeError( 'invalid option. `src` option must be a valid URI. Option: `' + opts.src + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'alt' ) ) {
		opts.alt = options.alt;
		if ( !isString( opts.alt ) ) {
			return new TypeError( 'invalid option. `alt` option must be a string primitive. Option: `' + opts.alt + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
