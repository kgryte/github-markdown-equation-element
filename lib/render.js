'use strict';

// NOTES //

/**
* Example output:
*
*	<div class="equation" align="center" data-raw-text="y = \frac{1}{2}x + 5" data-equation="eq:linear_equation">
*		<img src="https://cdn.rawgit.com/owner/repo/commit/docs/img/eqn.svg" alt="Equation for a line having slope 1/2 and intercept 5.">
*		<br>
*	</div>
*/


// RENDER //

/**
* FUNCTION: render( opts )
*	Renders an HTML string.
*
* @param {Object} opts - render options
* @param {String} opts.className - element class name
* @param {String} opts.align - element alignment
* @param {String} opts.equation - raw equation text
* @param {String} opts.label - equation label
* @param {String} opts.src - image source URL
* @param {String} opts.alt - alternative image text
* @returns {String} HTML string
*/
function render( opts ) {
	var str = '';

	str += '<div';
	str += ' ';
	str += 'class="' + opts.className + '"';
	str += ' ';
	str += 'align="' + opts.align + '"';
	str += ' ';
	str += 'data-raw-text="' + opts.equation + '"';
	str += ' ';
	str += 'data-equation="' + opts.label + '"';
	str += '>';

	str += '\n\t';

	str += '<img';
	str += ' ';
	str += 'src="' + opts.src + '"';
	str += ' ';
	str += 'alt="' + opts.alt + '"';
	str += '>';

	str += '\n\t';

	str += '<br>';

	str += '\n';
	str += '</div>';

	return str;
} // end FUNCTION render()


// EXPORTS //

module.exports = render;
