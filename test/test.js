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

tape( 'the function throws an error if provided an invalid `options` argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		undefined,
		true,
		[],
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			createElement( value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		undefined,
		true,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = setup();
			opts.equation = value;
			createElement( opts );
		};
	}
});

tape( 'the function returns an HTML string for rendering an SVG equation in Github Markdown', function test( t ) {
	var expected;
	var actual;

	expected = '<div class="equation" align="center" data-raw-text="y = mx + b" data-equation="eq:line">\n\t<img src="https://cdn.rawgit.com/math-io/repo/branch/docs/img/eqn.svg" alt="Equation for a line.">\n\t<br>\n</div>';
	actual = createElement( setup() );

	t.equal( actual, expected, 'returns a HTML string' );
	t.end();
});

tape( 'if not provided an option, the function will set a corresponding HTML attribute to either a default value (if one exists) or an empty string', function test( t ) {
	var expected;
	var actual;

	expected = '<div class="equation" align="center" data-raw-text="" data-equation="">\n\t<img src="" alt="">\n\t<br>\n</div>';
	actual = createElement();

	t.equal( actual, expected, 'returns a HTML string' );
	t.end();
});
