'use strict';

var createElement = require( './../lib' );

var opts = {
	'className': 'eqn',
	'align': 'left',
	'equation': '\\operatorname{erf}(x) = \\frac{2}{\\sqrt\\pi}\\int_0^x e^{-t^2}\\,\\mathrm dt',
	'label': 'eq:erf',
	'src': 'https://cdn.rawgit.com/math-io/erf/master/img/docs/eqn.svg',
	'alt': 'Error function.'
};

var html = createElement( opts );

console.log( html );
