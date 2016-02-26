'use strict';

// MODULES //

var tape = require( 'tape' );
var createElement = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof createElement, 'function', 'main export is a function' );
	t.end();
});
