'use strict';

// MODULES //

var tape = require( 'tape' );
var createElement = require( './../lib' );


// SETUP //

function setup() {
	return {
		'className': 'equation',
		'align': 'center',
		'equation': 'y = mx + b',
		'label': 'eq:line',
		'src': 'https://cdn.rawgit.com/math-io/repo/branch/docs/img/eqn.svg',
		'alt': 'Equation for a line.'
	};
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof createElement, 'function', 'main export is a function' );
	t.end();
});
